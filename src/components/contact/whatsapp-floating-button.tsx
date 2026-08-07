import { whatsappContact } from "@/config/contact";

const accessibleLabel = "Hubungi HARZNET melalui WhatsApp";

export function WhatsAppFloatingButton() {
  return (
    <a
      aria-label={accessibleLabel}
      className="fixed right-4 bottom-4 z-40 grid size-[3.25rem] place-items-center rounded-full bg-[#25d366] text-white shadow-[0_12px_30px_rgba(15,23,42,0.28)] transition-[background-color,box-shadow,transform] hover:bg-[#1fbd5a] hover:shadow-[0_14px_34px_rgba(15,23,42,0.34)] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25d366] sm:right-6 sm:bottom-6 sm:size-14"
      href={whatsappContact.url}
      rel="noopener noreferrer"
      target="_blank"
      title={accessibleLabel}
    >
      <svg aria-hidden="true" className="size-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.04 2a9.84 9.84 0 0 0-8.5 14.78L2 22l5.36-1.5A9.93 9.93 0 0 0 12.04 22 10 10 0 0 0 12.04 2Zm0 18.18a8.08 8.08 0 0 1-4.12-1.13l-.3-.18-3.18.89.85-3.1-.2-.32a8 8 0 1 1 6.95 3.84Zm4.43-6.05c-.24-.12-1.43-.7-1.65-.79-.22-.08-.38-.12-.54.12-.16.25-.62.8-.76.97-.14.16-.28.18-.52.06-.24-.12-1.02-.37-1.94-1.2a7.3 7.3 0 0 1-1.34-1.67c-.14-.24-.01-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.19 1.1.16 1.52.1.46-.07 1.43-.59 1.63-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28Z" />
      </svg>
    </a>
  );
}
