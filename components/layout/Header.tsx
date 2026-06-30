"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ExternalLink, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CLIENT_AREA_URL } from "@/lib/constants";
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import type { NavLink } from "@/types";

const navLinks: NavLink[] = [
  { label: "Abertura de Empresa", href: "#abertura" },
  { label: "Jornada", href: "#jornada" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "FAQ", href: "#faq" },
];

/**
 * Header fixo com fundo que ganha glassmorphism ao rolar a página
 * (transparente no topo do hero, sólido translúcido depois).
 * O botão "Área do Cliente" é mantido sempre visível, conforme
 * requisito explícito do briefing — é um ponto de retenção de
 * clientes já ativos, não apenas de aquisição.
 */
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trava o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        isScrolled
          ? "header-glass shadow-[0_4px_30px_-10px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between py-3">
        <Link href="#top" className="flex items-center shrink-0" aria-label="Me Conti+ Contabilidade — página inicial">
          <Image
            src="/images/logo.png"
            alt="Me Conti+ Contabilidade"
            width={170}
            height={42}
            priority
            loading="eager"
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-foreground-muted hover:text-foreground transition-colors rounded-full hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={CLIENT_AREA_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="sm">
              Área do Cliente
              <ExternalLink className="size-3.5" aria-hidden="true" />
            </Button>
          </a>
          <a
            href={buildWhatsAppLink(WHATSAPP_MESSAGES.openCompany)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" size="sm">
              Abrir minha empresa
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Button>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center size-10 rounded-full text-foreground hover:bg-white/5"
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="size-6" aria-hidden="true" />
          ) : (
            <Menu className="size-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] bottom-0 z-40 bg-background overflow-y-auto">
          <div className="px-4 py-6 flex flex-col gap-1 min-h-full">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-medium text-foreground-muted hover:text-foreground rounded-xl hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-3 pt-4 border-t border-surface-border">
              <a href={CLIENT_AREA_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="md" className="w-full">
                  Área do Cliente
                  <ExternalLink className="size-4" aria-hidden="true" />
                </Button>
              </a>
              <a
                href={buildWhatsAppLink(WHATSAPP_MESSAGES.openCompany)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="md" className="w-full">
                  Abrir minha empresa
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
