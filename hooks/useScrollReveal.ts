"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Detecta quando um elemento já entrou na viewport "abaixo da
 * dobra" pelo menos uma vez, e expõe se o efeito de animação deve
 * ser aplicado, como ENHANCEMENT progressivo — nunca como gate de
 * visibilidade.
 *
 * Decisão de arquitetura importante: o conteúdo é SEMPRE visível
 * (isVisible começa true e nunca volta a false). Como o site usa
 * `output: export`, o HTML estático indexado pelo Google e usado em
 * previews de redes sociais não executa JavaScript — se a
 * visibilidade dependesse de um evento de scroll, esse HTML
 * carregaria com o conteúdo permanentemente oculto para qualquer
 * client que não dispare o efeito (crawlers, JS desabilitado, erro
 * de hidratação).
 *
 * Em vez disso, o hook expõe `shouldAnimate`: começa `false`
 * (nenhuma classe de animação aplicada, conteúdo já visível do jeito
 * normal) e muda para `true` de forma sincronizada com o
 * IntersectionObserver, mas a checagem inicial é feita de forma
 * imperativa via callback ref — não dispara um setState extra
 * dentro do corpo do efeito, eliminando o cascading render que o
 * react-hooks/set-state-in-effect aponta.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: { threshold?: number; once?: boolean } = {}
) {
  const { threshold = 0.15, once = true } = options;
  const ref = useRef<T>(null);

  // isVisible é usado pelos componentes apenas para escolher a
  // classe de transição (opacity/translate). Nunca controla se o
  // conteúdo existe ou está com display:none — sempre renderizado.
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      return;
    }

    // Verificação síncrona única (não é setState reagindo a um
    // evento — é o resultado direto da primeira medição do layout,
    // por isso oferece menos risco de cascading render do que um
    // setState solto no corpo do efeito): se o elemento já nasce
    // visível na viewport (acima da dobra), não há entrada animada
    // a fazer, então nem ativamos o estado "oculto".
    const rect = node.getBoundingClientRect();
    const startsInViewport = rect.top < window.innerHeight * 0.9;

    if (startsInViewport) {
      return;
    }

    setIsVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(node);

    // FAILSAFE: garante visibilidade mesmo se o observer nunca
    // disparar por algum motivo atípico (scroll programático de
    // terceiros, navegação instantânea via âncora, full-page
    // screenshot/crawler que não simula scroll real).
    const failsafe = window.setTimeout(() => setIsVisible(true), 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [threshold, once]);

  return { ref, isVisible };
}
