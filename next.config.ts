import type { NextConfig } from "next";

/**
 * Configuração de export estático para GitHub Pages.
 *
 * - output: 'export' gera HTML/CSS/JS puros em /out, sem necessidade
 *   de servidor Node — requisito do GitHub Pages.
 * - images.unoptimized: o otimizador de imagens do Next roda em
 *   runtime de servidor, que não existe aqui; desligamos para evitar
 *   erro de build e fazemos otimização de assets manualmente.
 * - basePath/assetPrefix: GitHub Pages de projeto serve a partir de
 *   "/<nome-do-repositorio>/", não da raiz. Configurável via env var
 *   para não exigir alteração de código quando migrar para domínio
 *   próprio (meconti.com.br), onde basePath deve ser vazio.
 */
const repoBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoBasePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
