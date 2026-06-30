"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { DynamicIcon } from "@/components/shared/DynamicIcon";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { journeySteps } from "@/lib/data/journey";
import { cn } from "@/lib/utils";

/**
 * Reinterpretação interativa do material original de "Jornada do
 * Cliente" (12 etapas). Em vez de reproduzir o infográfico estático,
 * a timeline aqui é navegável: o usuário seleciona uma etapa e vê o
 * detalhe, reduzindo carga cognitiva em relação a ler 12 blocos de
 * texto simultaneamente — relevante porque esta é justamente a
 * seção que existe para reduzir ansiedade pós-contratação.
 */
export function ClientJourney() {
  const [activeStep, setActiveStep] = useState(1);
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const current = journeySteps.find((s) => s.id === activeStep) ?? journeySteps[0];

  return (
    <section id="jornada" className="relative py-20 sm:py-28 bg-background-elevated">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Onboarding"
          title="Sua jornada, do contrato ao primeiro fechamento"
          description="Acompanhamento claro em cada uma das 12 etapas do seu processo de entrada, direto pelo Portal do Cliente."
          className="mb-14"
        />

        <div
          ref={ref}
          className={cn(
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          {/* Trilha numérica de navegação */}
          <div className="flex overflow-x-auto gap-2 pb-4 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center scrollbar-none">
            {journeySteps.map((step) => (
              <button
                key={step.id}
                type="button"
                onClick={() => setActiveStep(step.id)}
                aria-pressed={activeStep === step.id}
                aria-label={`Etapa ${step.id}: ${step.title}`}
                className={cn(
                  "shrink-0 flex items-center justify-center size-11 sm:size-12 rounded-full font-mono text-sm font-medium border transition-all duration-200",
                  activeStep === step.id
                    ? "bg-brand text-[#04141c] border-brand shadow-[0_0_24px_-4px_var(--brand-glow)] scale-110"
                    : "border-surface-border text-foreground-muted hover:border-brand/50 hover:text-brand"
                )}
              >
                {String(step.id).padStart(2, "0")}
              </button>
            ))}
          </div>

          {/* Painel de detalhe da etapa ativa */}
          <div className="glass rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row items-start gap-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center size-16 rounded-2xl bg-brand/10 text-brand shrink-0">
              <DynamicIcon name={current.icon} className="size-8" aria-hidden="true" />
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-brand">
                Etapa {String(current.id).padStart(2, "0")} de {journeySteps.length}
              </span>
              <h3 className="font-display font-semibold text-2xl sm:text-3xl text-foreground leading-tight">
                {current.title}
              </h3>
              <p className="text-base text-foreground-muted leading-relaxed">
                {current.description}
              </p>
            </div>
          </div>

          {/* Navegação prev/next para mobile e acessibilidade via teclado */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={() => setActiveStep((s) => Math.max(1, s - 1))}
              disabled={activeStep === 1}
              className="text-sm font-medium text-foreground-muted hover:text-brand disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              ← Etapa anterior
            </button>
            <span className="text-foreground-subtle" aria-hidden="true">
              •
            </span>
            <button
              type="button"
              onClick={() =>
                setActiveStep((s) => Math.min(journeySteps.length, s + 1))
              }
              disabled={activeStep === journeySteps.length}
              className="text-sm font-medium text-foreground-muted hover:text-brand disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              Próxima etapa →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
