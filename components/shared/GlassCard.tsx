import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

/**
 * Cartão base com glassmorphism leve, usado em cards de serviços,
 * diferenciais, depoimentos e steps da timeline. `hoverable` ativa
 * elevação e glow de borda sutil no hover (desktop).
 */
export function GlassCard({
  className,
  hoverable = false,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 sm:p-7",
        hoverable &&
          "transition-all duration-300 hover:border-brand/40 hover:-translate-y-1 hover:shadow-[0_0_40px_-12px_var(--brand-glow)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
