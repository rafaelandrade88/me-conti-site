import { SectionHeading } from "@/components/shared/SectionHeading";
import { DynamicIcon } from "@/components/shared/DynamicIcon";
import { specialties } from "@/lib/data/specialties";

export function Specialties() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Para quem"
          title="Especialistas em quem presta serviço"
          description="Conhecemos as particularidades fiscais e societárias de cada uma dessas atividades."
          className="mb-14"
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {specialties.map((specialty) => (
            <div
              key={specialty.id}
              className="glass rounded-2xl p-6 flex flex-col items-center text-center gap-3 transition-all duration-300 hover:border-brand/40 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center size-12 rounded-xl bg-brand/10 text-brand">
                <DynamicIcon name={specialty.icon} className="size-6" aria-hidden="true" />
              </div>
              <span className="text-sm font-medium text-foreground leading-snug">
                {specialty.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
