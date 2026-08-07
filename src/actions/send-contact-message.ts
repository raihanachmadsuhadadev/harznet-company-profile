"use server";

import { processContactMessage } from "@/lib/email/contact-message-service";
import type { ContactFormState } from "@/lib/validation/contact-message";

export async function sendContactMessage(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  return processContactMessage(formData);
}
