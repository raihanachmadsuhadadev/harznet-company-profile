import { describe, expect, it, vi } from "vitest";

import { sendContactEmail } from "@/lib/email/contact-mailer";

const smtpEnvironment = {
  SMTP_HOST: "smtp.example.test",
  SMTP_PORT: "465",
  SMTP_SECURE: "true",
  SMTP_USER: "mailer@example.test",
  SMTP_PASS: "test-password",
  CONTACT_EMAIL_FROM: "website@example.test",
  CONTACT_EMAIL_TO: "customer_service@harznet.com",
};

describe("sendContactEmail", () => {
  it("mengirim text dan HTML dengan tujuan serta replyTo yang benar", async () => {
    const sendMail = vi.fn().mockResolvedValue({ messageId: "test-id" });
    const createTransport = vi.fn(() => ({ sendMail }));

    await sendContactEmail(
      {
        name: "Raihan\r\nBCC: attacker@example.test",
        email: "visitor@example.test",
        message: "Butuh layanan <script>alert('x')</script>\nuntuk kantor.",
        receivedAt: new Date("2026-08-05T03:00:00.000Z"),
      },
      { env: smtpEnvironment, createTransport },
    );

    expect(createTransport).toHaveBeenCalledWith({
      host: "smtp.example.test",
      port: 465,
      secure: true,
      auth: { user: "mailer@example.test", pass: "test-password" },
    });
    expect(sendMail).toHaveBeenCalledOnce();
    const message = sendMail.mock.calls[0][0];
    expect(message.from).toBe("website@example.test");
    expect(message.to).toBe("customer_service@harznet.com");
    expect(message.replyTo).toBe("visitor@example.test");
    expect(message.subject).toBe("[Website HARZNET] Pesan dari Raihan BCC: attacker@example.test");
    expect(message.text).toContain("Sumber: Website HARZNET");
    expect(message.html).toContain("&lt;script&gt;alert(&#039;x&#039;)&lt;/script&gt;");
    expect(message.html).not.toContain("<script>");
  });

  it("menolak konfigurasi SMTP yang tidak lengkap sebelum membuat transporter", async () => {
    const createTransport = vi.fn();

    await expect(
      sendContactEmail(
        {
          name: "Raihan",
          email: "visitor@example.test",
          message: "Pesan valid untuk tim HARZNET.",
          receivedAt: new Date(),
        },
        { env: {}, createTransport },
      ),
    ).rejects.toThrow("CONTACT_SMTP_CONFIGURATION_INVALID");
    expect(createTransport).not.toHaveBeenCalled();
  });
});
