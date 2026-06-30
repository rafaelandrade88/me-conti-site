import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina classes condicionais (clsx) e resolve conflitos de
 * utilitários Tailwind (twMerge) — padrão usado em todo o projeto
 * para evitar classes duplicadas/contraditórias em componentes
 * que recebem className via props.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
