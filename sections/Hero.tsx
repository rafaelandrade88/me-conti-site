"use client";

import { ArrowRight, ShieldCheck, Unlock, BadgePercent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArcMotif } from "@/components/shared/ArcMotif";
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { PRICING } from "@/lib/constants";

const trustBadges = [
  { icon: Unlock, label: "Sem fidelidade contratual" },
  { icon: ShieldCheck, label: "Sem multa por cancelamento" },
  { icon: BadgePercent, label: "50% off na abertura" },
];

/**
 * Hero como tese do site: a oferta de abertura de empresa é o
 * elemento mais característico do negócio (confirmado pelo histórico
 * real do site atual da Me Conti, que converte fortemente nisso) —
 * por isso ocupa o espaço dominante, com prova de preço real logo
 * abaixo da dobra para ancorar valor sem parecer "venda de prateleira".
 */
export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Atmosfera de fundo: arcos de assinatura + glow radial */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, var(--brand-glow), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <ArcMotif
        variant="corner"
        className="absolute -top-10 -right-10 size-[420px] sm:size-[560px] -z-10 opacity-80"
      />
      <ArcMotif
        variant="corner"
        className="absolute -bottom-32 -left-32 size-[380px] rotate-180 -z-10 opacity-50"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-brand px-4 py-1.5 rounded-full glass animate-fade-in">
            Contabilidade digital para prestadores de serviço
          </span>

          <h1 className="font-display font-semibold text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-foreground animate-fade-up">
            Abra sua empresa com um{" "}
            <span className="text-gradient-brand">contrato feito para</span>{" "}
            proteger o que você construiu
          </h1>

          <p
            className="text-base sm:text-xl text-foreground-muted leading-relaxed max-w-2xl animate-fade-up"
            style={{ animationDelay: "0.1s", opacity: 0 }}
          >
            Sem fidelidade, sem multa de cancelamento e com contrato social
            personalizado para proteger seu patrimônio e sua família. A partir
            de{" "}
            <strong className="text-foreground font-semibold">
              R$ {PRICING.openingWithAccounting},00
            </strong>{" "}
            ao contratar com a contabilidade mensal.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            <a
              href={buildWhatsAppLink(WHATSAPP_MESSAGES.openCompanyWithAccounting)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="lg">
                Quero abrir minha empresa
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            </a>
            <a href="#abertura">
              <Button variant="outline" size="lg">
                Ver como funciona
              </Button>
            </a>
          </div>

          <div
            className="flex flex-wrap items-center justify-center gap-3 pt-6 animate-fade-up"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            {trustBadges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-foreground-muted"
              >
                <Icon className="size-4 text-brand" aria-hidden="true" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
