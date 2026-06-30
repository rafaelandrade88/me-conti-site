/**
 * Constantes globais da aplicação.
 *
 * IMPORTANTE: o número de WhatsApp e o link da Área do Cliente são
 * dados de negócio reais — qualquer alteração futura deve ser feita
 * apenas aqui, nunca espalhada em componentes individuais.
 */

export const SITE_CONFIG = {
  name: "Me Conti+ Contabilidade",
  shortName: "Me Conti+",
  url: "https://meconti.com.br",
  // GitHub Pages: ajustar quando o repositório/domínio final for definido
  description:
    "Contabilidade digital para prestadores de serviço. Abertura de empresa com contrato sob medida, proteção patrimonial e sem fidelidade contratual.",
  locale: "pt_BR",
} as const;

export const WHATSAPP_NUMBER = "5511998591974";

export const CLIENT_AREA_URL =
  "https://onvio.com.br/clientcenter/pt/auth?r=%2Fhome";

export const INSTAGRAM_URL =
  "https://www.instagram.com/meconticontabilidade";

export const PRICING = {
  openingFull: 1000,
  openingFullInstallments: "em até 2x no boleto (50% início + 50% na entrega)",
  openingWithAccounting: 500,
  openingWithAccountingInstallments: "em até 2x no boleto",
  savingsPercent: 50,
} as const;
