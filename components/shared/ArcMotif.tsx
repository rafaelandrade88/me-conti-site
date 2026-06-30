import { cn } from "@/lib/utils";

interface ArcMotifProps {
  className?: string;
  variant?: "corner" | "centered";
}

/**
 * SIGNATURE ELEMENT do design system.
 *
 * Os arcos concêntricos parciais replicam o motivo gráfico já presente
 * no ícone da marca Me Conti+ e nas artes de Jornada do Cliente
 * (círculos/arcos em volta dos números). Em vez de um gradiente
 * genérico de blob, este elemento reforça a identidade visual que a
 * empresa já construiu — é decorativo, mas não arbitrário.
 *
 * Renderizado como SVG puro (sem dependência de imagem), com baixa
 * opacidade, funcionando como atmosfera de fundo sem competir com o
 * conteúdo textual.
 */
export function ArcMotif({ className, variant = "corner" }: ArcMotifProps) {
  if (variant === "centered") {
    return (
      <svg
        viewBox="0 0 600 600"
        fill="none"
        aria-hidden="true"
        className={cn("pointer-events-none", className)}
      >
        <circle
          cx="300"
          cy="300"
          r="280"
          stroke="var(--brand)"
          strokeOpacity="0.12"
          strokeWidth="1.5"
          strokeDasharray="4 14"
        />
        <circle
          cx="300"
          cy="300"
          r="220"
          stroke="var(--brand)"
          strokeOpacity="0.18"
          strokeWidth="1.5"
        />
        <path
          d="M300 60 A240 240 0 0 1 540 300"
          stroke="var(--brand)"
          strokeOpacity="0.4"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M120 470 A240 240 0 0 1 80 230"
          stroke="var(--brand)"
          strokeOpacity="0.3"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
      className={cn("pointer-events-none", className)}
    >
      <circle
        cx="0"
        cy="0"
        r="360"
        stroke="var(--brand)"
        strokeOpacity="0.15"
        strokeWidth="1.5"
        strokeDasharray="3 12"
      />
      <path
        d="M0 -300 A300 300 0 0 1 212 -212"
        stroke="var(--brand)"
        strokeOpacity="0.45"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle
        cx="0"
        cy="0"
        r="260"
        stroke="var(--brand)"
        strokeOpacity="0.22"
        strokeWidth="1.5"
      />
    </svg>
  );
}
