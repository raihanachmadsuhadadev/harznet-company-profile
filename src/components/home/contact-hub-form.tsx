"use client";

import { useActionState, useEffect, useRef } from "react";

import { sendContactMessage } from "@/actions/send-contact-message";
import type { ContactFormState } from "@/lib/validation/contact-message";
import type { ContactHubContent } from "@/types/content";

type ContactFormAction = (
  previousState: ContactFormState,
  formData: FormData,
) => Promise<ContactFormState>;

type ContactHubFormProps = {
  content: ContactHubContent["form"];
  action?: ContactFormAction;
};

const initialState: ContactFormState = {
  status: "idle",
  message: "",
  fieldErrors: {},
  values: { name: "", email: "", message: "" },
};

export function ContactHubForm({ content, action = sendContactMessage }: ContactHubFormProps) {
  const [state, formAction, pending] = useActionState(action, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
    if (state.status !== "idle") statusRef.current?.focus();
  }, [state]);

  return (
    <div className="min-w-0 rounded-[1.625rem] border border-[#c5d9e9] bg-[linear-gradient(145deg,#ffffff_0%,#f7fbff_100%)] p-5 shadow-[0_18px_46px_rgb(10_31_61_/_9%)] sm:p-7 xl:h-full xl:p-8">
      <p className="text-xs font-bold tracking-[0.18em] text-[var(--secondary)] uppercase">
        {content.eyebrow}
      </p>
      <h3 className="mt-3 text-2xl leading-[1.15] font-semibold tracking-[-0.025em] text-[var(--foreground)] sm:text-[1.75rem]">
        {content.title}
      </h3>
      <p className="mt-3 max-w-[36rem] text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">
        {content.description}
      </p>

      <form ref={formRef} action={formAction} className="mt-7 space-y-5" noValidate>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute size-px overflow-hidden [clip-path:inset(50%)]"
        >
          <label htmlFor="contact-company">Perusahaan</label>
          <input id="contact-company" name="company" type="text" autoComplete="off" tabIndex={-1} />
        </div>

        {content.fields.map((field) => {
          const error = state.fieldErrors[field.id];
          const errorId = `contact-${field.id}-error`;
          const commonClasses =
            "mt-2 w-full rounded-[0.875rem] border border-[#aebfd0] bg-white px-4 text-base text-[var(--foreground)] outline-none transition-[border-color,box-shadow,background-color] placeholder:text-[#718096] hover:border-[#8199ae] focus-visible:border-[var(--secondary)] focus-visible:ring-3 focus-visible:ring-[var(--secondary)]/18 aria-invalid:border-[#d92d20] aria-invalid:bg-[#fffafa] aria-invalid:focus-visible:ring-[#d92d20]/15";

          return (
            <div key={field.id}>
              <label htmlFor={`contact-${field.id}`} className="text-sm font-semibold">
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  id={`contact-${field.id}`}
                  name={field.id}
                  placeholder={field.placeholder}
                  autoComplete={field.autoComplete}
                  required
                  minLength={10}
                  maxLength={3_000}
                  aria-invalid={error ? true : undefined}
                  aria-describedby={error ? errorId : undefined}
                  defaultValue={state.values[field.id]}
                  className={`${commonClasses} min-h-36 resize-y py-3`}
                />
              ) : (
                <input
                  id={`contact-${field.id}`}
                  name={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  autoComplete={field.autoComplete}
                  required
                  minLength={field.id === "name" ? 2 : undefined}
                  maxLength={field.id === "name" ? 100 : 254}
                  aria-invalid={error ? true : undefined}
                  aria-describedby={error ? errorId : undefined}
                  defaultValue={state.values[field.id]}
                  className={`${commonClasses} min-h-13 py-2.5`}
                />
              )}
              {error ? (
                <p
                  id={errorId}
                  className="mt-1.5 text-[0.8125rem] leading-5 font-medium text-[#b42318]"
                >
                  {error}
                </p>
              ) : null}
            </div>
          );
        })}

        <button
          type="submit"
          disabled={pending}
          className="inline-flex min-h-13 w-full cursor-pointer items-center justify-center rounded-[0.875rem] bg-[var(--primary)] px-6 py-3 text-base font-bold text-white shadow-[0_8px_20px_rgb(8_38_72_/_14%)] transition-[background-color,box-shadow,transform] hover:bg-[var(--secondary)] hover:shadow-[0_10px_24px_rgb(8_38_72_/_18%)] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--secondary)] disabled:cursor-wait disabled:opacity-60 disabled:shadow-none disabled:hover:bg-[var(--primary)]"
        >
          {pending ? content.pendingLabel : content.submitLabel}
        </button>

        <p
          ref={statusRef}
          tabIndex={state.status === "idle" ? undefined : -1}
          role={state.status === "idle" ? undefined : "status"}
          aria-live="polite"
          className={`min-h-6 text-sm font-medium ${
            state.status === "success" ? "text-[#067647]" : "text-[#b42318]"
          }`}
        >
          {state.message}
        </p>
      </form>
    </div>
  );
}
