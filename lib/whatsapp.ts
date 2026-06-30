import { WHATSAPP_NUMBER } from "./constants";

/**
 * Constrói um link wa.me com mensagem pré-definida.
 * Centralizar isso evita strings de URL duplicadas e divergentes
 * espalhadas pelos componentes — qualquer ajuste de copy do CTA
 * é feito em um único lugar.
 */
export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encoded}`;
}

export const WHATSAPP_MESSAGES = {
  openCompany: "Olá! Quero abrir minha empresa com a Me Conti+.",
  openCompanyWithAccounting:
    "Olá! Gostaria de abrir minha empresa já com a contabilidade mensal (com desconto).",
  openCompanyOnly:
    "Olá! Gostaria de informações sobre a abertura de empresa avulsa, sem contabilidade mensal.",
  monthlyAccounting:
    "Olá! Tenho interesse na contabilidade mensal da Me Conti+.",
  freeConsultation: "Olá! Quero agendar minha consulta gratuita.",
  generalInfo: "Olá! Gostaria de mais informações sobre os serviços da Me Conti+.",
  speakSpecialist: "Olá! Gostaria de falar com um especialista da Me Conti+.",
} as const;
