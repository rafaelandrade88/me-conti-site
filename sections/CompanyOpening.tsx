"use client";

import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/shared/GlassCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { PRICING } from "@/lib/constants";
import { cn } from "@/lib/utils";

const includedItems = [
  "Registro completo na Junta Comercial",
  "Emissão do CNPJ",
  "Definição do enquadramento tributário ideal",
  "Contrato social personalizado e redigido sob medida",
  "Cláusulas de proteção patrimonial e familiar",
];

/**
 * Seção de maior prioridade de conversão do site (objetivo nº1 do
 * negócio, conforme briefing). Apresenta os dois caminhos de compra
 * reais (avulso vs. com contabilidade mensal) com ancoragem de preço
 * clara — mostrar os dois valores lado a lado reforça a economia de
 * 50% de forma concreta, não abstrata.
 */
export function CompanyOpening() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="abertura" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Destaque"
          title="Abertura de Empresa, do jeito certo"
          description="Mais do que tirar um CNPJ do papel: um contrato social pensado para o seu negócio, com cláusulas que protegem você, sua empresa e sua família."
          className="mb-14"
        />

        <div
          ref={ref}
          className={cn(
            "grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 items-stretch transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          {/* O que está incluso */}
          <GlassCard className="flex flex-col gap-6">
            <h3 className="font-display font-semibold text-xl text-foreground">
              O que está incluso na abertura
            </h3>
            <ul className="flex flex-col gap-4">
              {includedItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex items-center justify-center size-5 rounded-full bg-brand/15 text-brand shrink-0 mt-0.5">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-sm sm:text-base text-foreground-muted leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </GlassCard>

          {/* Cards de pricing */}
          <div className="flex flex-col gap-5">
            <GlassCard className="border-brand/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 px-3 py-1 bg-brand text-[#04141c] text-xs font-semibold rounded-bl-xl flex items-center gap-1">
                <Sparkles className="size-3" aria-hidden="true" />
                Mais escolhido
              </div>
              <p className="text-sm text-foreground-muted mb-1">
                Abertura + Contabilidade Mensal
              </p>
              <p className="font-display font-semibold text-4xl text-foreground mb-1">
                R$ {PRICING.openingWithAccounting},00
              </p>
              <p className="text-xs text-foreground-subtle mb-5">
                {PRICING.openingWithAccountingInstallments} na abertura
              </p>
              <a
                href={buildWhatsAppLink(WHATSAPP_MESSAGES.openCompanyWithAccounting)}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="primary" size="md" className="w-full">
                  Quero esse desconto
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
              </a>
            </GlassCard>

            <GlassCard>
              <p className="text-sm text-foreground-muted mb-1">
                Apenas a Abertura de Empresa
              </p>
              <p className="font-display font-semibold text-3xl text-foreground mb-1">
                R$ {PRICING.openingFull},00
              </p>
              <p className="text-xs text-foreground-subtle mb-5">
                {PRICING.openingFullInstallments}
              </p>
              <a
                href={buildWhatsAppLink(WHATSAPP_MESSAGES.openCompanyOnly)}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="outline" size="md" className="w-full">
                  Quero só a abertura
                </Button>
              </a>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
