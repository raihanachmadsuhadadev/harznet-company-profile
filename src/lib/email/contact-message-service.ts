import { sendContactEmail } from "@/lib/email/contact-mailer";
import type { ContactFormState } from "@/lib/validation/contact-message";
import { validateContactMessage } from "@/lib/validation/contact-message";

const genericErrorMessage =
  "Pesan belum dapat dikirim. Silakan periksa kembali data Anda atau coba beberapa saat lagi.";

export async function processContactMessage(
  formData: FormData,
  deliverMessage: typeof sendContactEmail = sendContactEmail,
): Promise<ContactFormState> {
  const validation = validateContactMessage(formData);

  if (!validation.success) {
    if (validation.isSpam) {
      return {
        status: "error",
        message: genericErrorMessage,
        fieldErrors: {},
        values: validation.values,
      };
    }

    return {
      status: "error",
      message: "Periksa kembali informasi pada form.",
      fieldErrors: validation.fieldErrors,
      values: validation.values,
    };
  }

  try {
    await deliverMessage(validation.data);
    return {
      status: "success",
      message: "Pesan berhasil dikirim kepada tim HARZNET.",
      fieldErrors: {},
      values: { name: "", email: "", message: "" },
    };
  } catch {
    return {
      status: "error",
      message: genericErrorMessage,
      fieldErrors: {},
      values: validation.data,
    };
  }
}
