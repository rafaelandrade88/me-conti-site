import * as Icons from "lucide-react";
import type { LucideIcon, LucideProps } from "lucide-react";

/**
 * Os dados de domínio (services.ts, differentials.ts, journey.ts) guardam
 * o nome do ícone como string para manter a camada de dados livre de
 * imports de componentes React. Este resolvedor faz a ponte em runtime.
 *
 * Fallback para um ícone neutro evita crash caso um nome seja digitado
 * incorretamente em algum arquivo de dados — falha de forma visível
 * (ícone genérico) em vez de quebrar a renderização da página inteira.
 */
export function DynamicIcon({
  name,
  ...props
}: { name: string } & LucideProps) {
  const IconComponent = (Icons as unknown as Record<string, LucideIcon>)[
    name
  ];

  if (!IconComponent) {
    const Fallback = Icons.HelpCircle;
    return <Fallback {...props} />;
  }

  return <IconComponent {...props} />;
}
