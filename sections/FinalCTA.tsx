"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArcMotif } from "@/components/shared/ArcMotif";
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

/**
 * CTA final antes do footer — última chance de conversão para quem
 * leu a página inteira sem agir. Repete a oferta principal (abertura
 * com desconto) em vez de introduzir uma oferta nova, para não
 * fragmentar a decisão do visitante a essa altura do funil.
 */
export function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <ArcMotif
        variant="centered"
        className="absolute inset-0 m-auto size-[600px] opacity-60 -z-10"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, var(--brand-glow), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-8">
        <h2 className="font-display font-semibold text-3xl sm:text-5xl leading-[1.1] tracking-tight text-foreground">
          Pronto para formalizar seu negócio{" "}
          <span className="text-gradient-brand">com segurança</span>?
        </h2>
        <p className="text-base sm:text-lg text-foreground-muted leading-relaxed max-w-xl">
          Fale agora com um especialista e descubra como abrir sua empresa com
          até 50% de desconto, sem fidelidade e com proteção patrimonial de
          verdade.
        </p>
        <a
          href={buildWhatsAppLink(WHATSAPP_MESSAGES.speakSpecialist)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="primary" size="lg">
            Falar com um especialista agora
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </a>
      </div>
    </section>
  );
}
