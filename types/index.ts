/**
 * Tipos de domínio compartilhados por toda a aplicação.
 * Mantidos isolados de qualquer componente de UI — isso permite
 * trocar a fonte de dados (hoje: arquivos estáticos em lib/data,
 * amanhã: um CMS) sem tocar em nenhuma camada de apresentação.
 */

export interface JourneyStep {
  id: number;
  title: string;
  description: string;
  /** Nome do ícone do pacote lucide-react */
  icon: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  /** Se true, é destacado visualmente (ex: Abertura de Empresa) */
  featured?: boolean;
}

export interface Specialty {
  id: string;
  title: string;
  icon: string;
}

export interface Differential {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  initials: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}
