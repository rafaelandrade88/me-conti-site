import type { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

/**
 * Metadata base, herdada por todas as páginas via root layout.
 * Páginas individuais podem sobrescrever campos específicos.
 */
export function buildBaseMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title: {
      default: `${SITE_CONFIG.name} | Contabilidade Digital e Abertura de Empresa`,
      template: `%s | ${SITE_CONFIG.shortName}`,
    },
    description: SITE_CONFIG.description,
    keywords: [
      "abertura de empresa",
      "contabilidade digital",
      "contabilidade para prestadores de serviço",
      "MEI",
      "planejamento tributário",
      "BPO financeiro",
      "contabilidade São Paulo",
    ],
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    openGraph: {
      type: "website",
      locale: SITE_CONFIG.locale,
      url: SITE_CONFIG.url,
      siteName: SITE_CONFIG.name,
      title: `${SITE_CONFIG.name} | Contabilidade Digital e Abertura de Empresa`,
      description: SITE_CONFIG.description,
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: SITE_CONFIG.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${SITE_CONFIG.name} | Contabilidade Digital`,
      description: SITE_CONFIG.description,
      images: ["/images/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

/**
 * JSON-LD (schema.org) para negócio local de serviços contábeis.
 * Renderizado via <script type="application/ld+json"> no layout raiz.
 */
export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    image: `${SITE_CONFIG.url}/images/og-image.png`,
    areaServed: {
      "@type": "State",
      name: "São Paulo",
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    sameAs: ["https://www.instagram.com/meconticontabilidade"],
  };
}
