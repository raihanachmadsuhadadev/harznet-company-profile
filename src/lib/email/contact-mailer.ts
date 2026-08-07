import nodemailer from "nodemailer";
import type { SendMailOptions } from "nodemailer";

import type { ValidContactMessage } from "@/lib/validation/contact-message";

type ContactMailTransport = {
  sendMail(options: SendMailOptions): Promise<unknown>;
};

type ContactTransportFactory = (options: {
  host: string;
  port: number;
  secure: boolean;
  auth: { user: string; pass: string };
}) => ContactMailTransport;

type ContactEnvironment = Record<string, string | undefined>;

type SendContactEmailOptions = {
  env?: ContactEnvironment;
  createTransport?: ContactTransportFactory;
};

const requiredEnvironmentKeys = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_SECURE",
  "SMTP_USER",
  "SMTP_PASS",
  "CONTACT_EMAIL_FROM",
  "CONTACT_EMAIL_TO",
] as const;

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character] ?? character,
  );
}

function getMailerConfiguration(env: ContactEnvironment) {
  for (const key of requiredEnvironmentKeys) {
    if (!env[key]?.trim()) throw new Error("CONTACT_SMTP_CONFIGURATION_INVALID");
  }

  const port = Number(env.SMTP_PORT);
  if (!Number.isInteger(port) || port < 1 || port > 65_535) {
    throw new Error("CONTACT_SMTP_CONFIGURATION_INVALID");
  }

  if (env.SMTP_SECURE !== "true" && env.SMTP_SECURE !== "false") {
    throw new Error("CONTACT_SMTP_CONFIGURATION_INVALID");
  }

  return {
    transport: {
      host: env.SMTP_HOST!.trim(),
      port,
      secure: env.SMTP_SECURE === "true",
      auth: { user: env.SMTP_USER!.trim(), pass: env.SMTP_PASS! },
    },
    from: env.CONTACT_EMAIL_FROM!.trim(),
    to: env.CONTACT_EMAIL_TO!.trim(),
  };
}

function sanitizeSubjectName(name: string) {
  return name
    .replace(/[\r\n]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 80);
}

export async function sendContactEmail(
  message: ValidContactMessage,
  options: SendContactEmailOptions = {},
) {
  const configuration = getMailerConfiguration(options.env ?? process.env);
  const createTransport =
    options.createTransport ?? ((transportOptions) => nodemailer.createTransport(transportOptions));
  const transporter = createTransport(configuration.transport);
  const receivedAt = message.receivedAt.toISOString();
  const subject = `[Website HARZNET] Pesan dari ${sanitizeSubjectName(message.name)}`;

  const text = [
    `Nama: ${message.name}`,
    `Email: ${message.email}`,
    "Pesan:",
    message.message,
    "",
    `Waktu penerimaan: ${receivedAt}`,
    "Sumber: Website HARZNET",
  ].join("\n");

  const html = `
    <h1>Pesan baru dari Website HARZNET</h1>
    <p><strong>Nama:</strong> ${escapeHtml(message.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(message.email)}</p>
    <p><strong>Pesan:</strong><br />${escapeHtml(message.message).replace(/\r?\n/g, "<br />")}</p>
    <p><strong>Waktu penerimaan:</strong> ${escapeHtml(receivedAt)}</p>
    <p><strong>Sumber:</strong> Website HARZNET</p>
  `.trim();

  await transporter.sendMail({
    from: configuration.from,
    to: configuration.to,
    replyTo: message.email,
    subject,
    text,
    html,
  });
}
