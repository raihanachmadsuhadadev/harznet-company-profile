export type ContactMessageValues = {
  name: string;
  email: string;
  message: string;
};

export type ContactFieldErrors = Partial<Record<keyof ContactMessageValues, string>>;

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors: ContactFieldErrors;
  values: ContactMessageValues;
};

export type ValidContactMessage = ContactMessageValues & {
  receivedAt: Date;
};

export type ContactValidationResult =
  | { success: true; data: ValidContactMessage }
  | {
      success: false;
      isSpam: boolean;
      fieldErrors: ContactFieldErrors;
      values: ContactMessageValues;
    };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readText(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export function validateContactMessage(formData: FormData): ContactValidationResult {
  const values: ContactMessageValues = {
    name: readText(formData, "name"),
    email: readText(formData, "email").toLowerCase(),
    message: readText(formData, "message"),
  };

  if (readText(formData, "company")) {
    return { success: false, isSpam: true, fieldErrors: {}, values };
  }

  const fieldErrors: ContactFieldErrors = {};

  if (values.name.length < 2) {
    fieldErrors.name = "Nama harus terdiri dari minimal 2 karakter.";
  } else if (values.name.length > 100) {
    fieldErrors.name = "Nama tidak boleh lebih dari 100 karakter.";
  }

  if (!values.email) {
    fieldErrors.email = "Email wajib diisi.";
  } else if (values.email.length > 254 || !emailPattern.test(values.email)) {
    fieldErrors.email = "Masukkan alamat email yang valid.";
  }

  if (values.message.length < 10) {
    fieldErrors.message = "Pesan harus terdiri dari minimal 10 karakter.";
  } else if (values.message.length > 3_000) {
    fieldErrors.message = "Pesan tidak boleh lebih dari 3000 karakter.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { success: false, isSpam: false, fieldErrors, values };
  }

  return {
    success: true,
    data: { ...values, receivedAt: new Date() },
  };
}
