import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArcMotif } from "@/components/shared/ArcMotif";
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden flex items-center justify-center min-h-[70vh] px-4 py-24 sm:py-32">
      <ArcMotif
        variant="centered"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px]"
      />

      <div className="relative z-10 max-w-xl text-center flex flex-col items-center gap-6">
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-brand px-4 py-1.5 rounded-full glass">
          Erro 404
        </span>

        <h1 className="text-4xl sm:text-5xl font-semibold leading-[1.05]">
          Essa página não está no contrato
        </h1>

        <p className="text-base sm:text-lg text-foreground-muted leading-relaxed">
          O endereço que você tentou acessar não existe ou foi movido. Volte
          para a página inicial ou fale direto com a gente pelo WhatsApp.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <Link href="/">
            <Button variant="primary" size="lg">
              Voltar para o início
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </Link>
          <a
            href={buildWhatsAppLink(WHATSAPP_MESSAGES.generalInfo)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg">
              Falar no WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
