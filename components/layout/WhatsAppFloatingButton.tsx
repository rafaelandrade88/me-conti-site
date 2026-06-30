"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

/**
 * CTA flutuante persistente. Como o site não tem formulário com
 * backend (decisão de produto: GitHub Pages sem infraestrutura
 * própria por ora), o WhatsApp é o único canal de conversão —
 * por isso ele precisa estar sempre acessível, não apenas dentro
 * do hero ou de uma seção específica.
 */
export function WhatsAppFloatingButton() {
  return (
    <a
      href={buildWhatsAppLink(WHATSAPP_MESSAGES.generalInfo)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp com a Me Conti+"
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 flex items-center justify-center size-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_-4px_rgba(37,211,102,0.5)] transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <MessageCircle className="size-7" fill="white" aria-hidden="true" />
    </a>
  );
}
