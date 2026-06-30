import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ShieldCheck } from "lucide-react";
import { INSTAGRAM_URL, SITE_CONFIG } from "@/lib/constants";
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

/**
 * Ícone do Instagram desenhado como outline simples (estilo consistente
 * com lucide-react), já que o pacote instalado não inclui o glifo da
 * marca. Geometria genérica de câmera com viewfinder, sem reproduzir
 * o logotipo proprietário da Meta.
 */
function InstagramGlyph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

const serviceLinks = [
  { label: "Abertura de Empresas", href: "#abertura" },
  { label: "Contabilidade Mensal", href: "#servicos" },
  { label: "Planejamento Tributário", href: "#servicos" },
  { label: "BPO Financeiro", href: "#servicos" },
];

const institutionalLinks = [
  { label: "Jornada do Cliente", href: "#jornada" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Perguntas Frequentes", href: "#faq" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-surface-border bg-background-elevated">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1 flex flex-col gap-4">
            <Image
              src="/images/logo.png"
              alt="Me Conti+ Contabilidade"
              width={170}
              height={42}
              className="h-9 w-auto"
            />
            <p className="text-sm text-foreground-muted leading-relaxed max-w-xs">
              Contabilidade digital para prestadores de serviço, com
              atendimento consultivo e contratos pensados para proteger o seu
              patrimônio.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Me Conti+"
                className="flex items-center justify-center size-10 rounded-full glass text-foreground-muted hover:text-brand hover:border-brand/50 transition-colors"
              >
                <InstagramGlyph className="size-4" aria-hidden="true" />
              </a>
              <a
                href={buildWhatsAppLink(WHATSAPP_MESSAGES.generalInfo)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Me Conti+"
                className="flex items-center justify-center size-10 rounded-full glass text-foreground-muted hover:text-brand hover:border-brand/50 transition-colors"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-sm text-foreground mb-4">
              Serviços
            </h3>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted hover:text-brand transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-sm text-foreground mb-4">
              Institucional
            </h3>
            <ul className="flex flex-col gap-3">
              {institutionalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted hover:text-brand transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-sm text-foreground mb-4">
              Confiança
            </h3>
            <div className="flex items-start gap-2 text-sm text-foreground-muted">
              <ShieldCheck className="size-4 text-brand shrink-0 mt-0.5" aria-hidden="true" />
              <span>
                Atendimento 100% digital, com portal próprio para
                acompanhamento de documentos e processos.
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground-subtle font-mono">
            © {year} {SITE_CONFIG.name}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-foreground-subtle">
            Contabilidade digital para vencedores.
          </p>
        </div>
      </div>
    </footer>
  );
}
