import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";
import { DynamicIcon } from "@/components/shared/DynamicIcon";
import { services } from "@/lib/data/services";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section id="servicos" className="relative py-20 sm:py-28 bg-background-elevated">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Serviços"
          title="Tudo que sua empresa precisa, em um só lugar"
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <GlassCard
              key={service.id}
              hoverable
              className={cn(
                "flex flex-col gap-4",
                service.featured && "border-brand/40 bg-brand/[0.04]"
              )}
            >
              <div className="flex items-center justify-center size-12 rounded-xl bg-brand/10 text-brand">
                <DynamicIcon name={service.icon} className="size-6" aria-hidden="true" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground">
                {service.title}
              </h3>
              <p className="text-sm text-foreground-muted leading-relaxed">
                {service.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
