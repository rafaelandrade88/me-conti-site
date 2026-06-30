import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  return (
    <section className="relative py-20 sm:py-28 bg-background-elevated">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Quem confia na Me Conti+"
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <GlassCard key={testimonial.id} className="flex flex-col gap-5">
              <p className="text-sm text-foreground-muted leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-surface-border">
                <div className="flex items-center justify-center size-10 rounded-full bg-brand/15 text-brand font-mono text-xs font-semibold shrink-0">
                  {testimonial.initials}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">
                    {testimonial.name}
                  </span>
                  <span className="text-xs text-foreground-subtle">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
