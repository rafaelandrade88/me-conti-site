import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { buildBaseMetadata, buildOrganizationJsonLd } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingButton } from "@/components/layout/WhatsAppFloatingButton";

/**
 * Fontes hospedadas localmente (next/font/local) em vez de
 * next/font/google: elimina a dependência de fonts.googleapis.com
 * em build time, mais resiliente em CI/CD com rede restrita.
 *
 * Arquivos .woff2 com subsetting Latin + Latin Extended (cobre
 * integralmente PT-BR, incluindo todos os acentos/cedilha) gerados
 * via fonttools a partir das variable fonts oficiais do repositório
 * google/fonts. O subsetting reduziu o payload combinado de ~1.2MB
 * (TTF completo, todos os scripts do mundo) para ~166KB —
 * essencial para o LCP ficar dentro da meta de Lighthouse 95+.
 */
const spaceGrotesk = localFont({
  src: "../assets/fonts/SpaceGrotesk-Variable.woff2",
  variable: "--font-space-grotesk",
  display: "swap",
  weight: "500 700",
});

const inter = localFont({
  src: "../assets/fonts/Inter-Regular.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "400 700",
});

const jetbrainsMono = localFont({
  src: "../assets/fonts/JetBrainsMono-Variable.woff2",
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: "400 500",
});

export const metadata: Metadata = buildBaseMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = buildOrganizationJsonLd();

  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
