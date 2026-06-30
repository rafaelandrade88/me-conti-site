import { SectionHeading } from "@/components/shared/SectionHeading";
import { DynamicIcon } from "@/components/shared/DynamicIcon";
import { differentials } from "@/lib/data/differentials";

/**
 * Esta seção carrega o peso argumentativo de justificar o preço da
 * abertura de empresa — cada item aqui responde, implicitamente, à
 * objeção "por que pagar por isso se a Junta Comercial é de graça".
 */
export function Differentials() {
  return (
    <section id="diferenciais" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Por que vale a pena"
          title="O que está por trás do seu contrato social"
          description="Não é burocracia genérica. É proteção jurídica desenhada para o seu caso específico."
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item) => (
            <div key={item.id} className="flex flex-col gap-3">
              <div className="flex items-center justify-center size-11 rounded-xl bg-brand/10 text-brand">
                <DynamicIcon name={item.icon} className="size-5" aria-hidden="true" />
              </div>
              <h3 className="font-display font-semibold text-base text-foreground">
                {item.title}
              </h3>
              <p className="text-sm text-foreground-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
