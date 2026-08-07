import { beforeEach, describe, expect, it, vi } from "vitest";
import type { Mock } from "vitest";

import { sendContactMessage } from "@/actions/send-contact-message";
import { processContactMessage } from "@/lib/email/contact-message-service";
import type { ContactFormState } from "@/lib/validation/contact-message";
import type { ValidContactMessage } from "@/lib/validation/contact-message";

const initialState: ContactFormState = {
  status: "idle",
  message: "",
  fieldErrors: {},
  values: { name: "", email: "", message: "" },
};

function createFormData(overrides: Partial<Record<string, string>> = {}) {
  const formData = new FormData();
  const values = {
    name: "Raihan",
    email: "Visitor@Example.test",
    message: "Saya ingin berkonsultasi mengenai layanan HARZNET.",
    company: "",
    ...overrides,
  };
  for (const [key, value] of Object.entries(values)) formData.set(key, value);
  return formData;
}

describe("sendContactMessage", () => {
  let deliverMessage: Mock<(message: ValidContactMessage) => Promise<void>>;

  beforeEach(() => {
    deliverMessage = vi.fn<(message: ValidContactMessage) => Promise<void>>();
  });

  it("menolak input invalid di server tanpa memanggil mailer", async () => {
    const result = await sendContactMessage(
      initialState,
      createFormData({ name: "A", email: "invalid", message: "singkat" }),
    );

    expect(result.status).toBe("error");
    expect(result.fieldErrors).toEqual({
      name: "Nama harus terdiri dari minimal 2 karakter.",
      email: "Masukkan alamat email yang valid.",
      message: "Pesan harus terdiri dari minimal 10 karakter.",
    });
  });

  it("honeypot mencegah pengiriman tanpa mengungkap alasan penolakan", async () => {
    const result = await processContactMessage(
      createFormData({ company: "Bot Corporation" }),
      deliverMessage,
    );

    expect(result.status).toBe("error");
    expect(result.fieldErrors).toEqual({});
    expect(result.message).not.toMatch(/honeypot|spam|bot/i);
    expect(deliverMessage).not.toHaveBeenCalled();
  });

  it("success hanya dikembalikan setelah mailer berhasil", async () => {
    deliverMessage.mockResolvedValue(undefined);

    const result = await processContactMessage(createFormData(), deliverMessage);

    expect(deliverMessage).toHaveBeenCalledOnce();
    expect(deliverMessage).toHaveBeenCalledWith(
      expect.objectContaining({
        name: "Raihan",
        email: "visitor@example.test",
        message: "Saya ingin berkonsultasi mengenai layanan HARZNET.",
      }),
    );
    expect(result.status).toBe("success");
    expect(result.values).toEqual({ name: "", email: "", message: "" });
  });

  it("kegagalan SMTP menghasilkan error publik aman dan mempertahankan input", async () => {
    deliverMessage.mockImplementation(async () => {
      throw new Error("SMTP host smtp.secret.test rejected password secret-value");
    });

    const result = await processContactMessage(createFormData(), deliverMessage);

    expect(result.status).toBe("error");
    expect(result.message).not.toMatch(/smtp|host|password|secret-value/i);
    expect(result.values).toEqual(
      expect.objectContaining({
        name: "Raihan",
        email: "visitor@example.test",
        message: "Saya ingin berkonsultasi mengenai layanan HARZNET.",
      }),
    );
  });
});
