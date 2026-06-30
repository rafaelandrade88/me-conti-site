import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Cabeçalho padrão de seção: eyebrow (rótulo pequeno) + título display
 * + descrição opcional. Reutilizado em todas as sections para manter
 * consistência tipográfica e de espaçamento vertical.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 max-w-2xl",
        align === "center" && "items-center text-center mx-auto",
        align === "left" && "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-brand">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-foreground-muted leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
