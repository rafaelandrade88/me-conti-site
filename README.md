# Me Conti+ Contabilidade — Site Institucional

Site institucional estático, focado em conversão para abertura de empresa,
construído em Next.js 16 (App Router, export estático) para hospedagem em
GitHub Pages, com migração futura prevista para o domínio próprio
`meconti.com.br`.

## Stack

| Camada | Tecnologia | Observação |
|---|---|---|
| Framework | Next.js 16 (App Router) | `output: "export"` — sem servidor, 100% estático |
| Linguagem | TypeScript | Tipagem completa em todo o domínio de dados |
| Estilo | Tailwind CSS v4 | Configuração CSS-first (`@theme inline`), sem `tailwind.config.ts` |
| Componentes | Radix UI (Accordion) + CVA | Base do padrão shadcn/ui, sem dependência do CLI |
| Ícones | lucide-react | Resolvidos dinamicamente a partir de dados tipados |
| Fontes | next/font/local | WOFF2 com subsetting Latin, sem dependência de rede em build |
| Animação | CSS puro (`@keyframes`, `transition`) + IntersectionObserver | Ver nota de decisão abaixo |

### Nota de decisão: Framer Motion e GSAP não foram incluídos no bundle final

O briefing original solicitava Framer Motion e GSAP na stack. Durante a
implementação, todas as necessidades reais de animação da página (fade-up de
entrada, hover, glow, transições de estado) foram resolvidas inteiramente
com CSS nativo (`@keyframes` definidos em `globals.css`) e um hook próprio
baseado em `IntersectionObserver` (`hooks/useScrollReveal.ts`).

Como nenhuma animação da página exige timeline complexa, easing customizado
por frame ou manipulação de SVG path morphing (os casos de uso reais dessas
bibliotecas), mantê-las instaladas significaria adicionar peso ao bundle
JavaScript sem benefício funcional — o que vai diretamente contra a meta de
Lighthouse 95+ do próprio briefing. As dependências foram removidas do
`package.json`.

**Se uma necessidade futura justificar o uso real de uma dessas bibliotecas**
(por exemplo, uma calculadora interativa de economia tributária com
transições complexas, ou uma seção com scroll-driven storytelling
elaborado), basta reinstalar (`npm install framer-motion` ou
`npm install gsap`) — a arquitetura de componentes não impõe nenhuma
restrição contra isso.

## Estrutura do projeto

```
app/                    Rotas Next.js (App Router)
├── layout.tsx          Layout raiz: fontes, metadata, JSON-LD, Header/Footer
├── page.tsx            Composição da home a partir das sections
├── globals.css         Design tokens (Tailwind v4 @theme inline)
├── sitemap.ts          Geração de sitemap.xml em build
└── robots.ts           Geração de robots.txt em build

components/
├── ui/                 Primitivas reutilizáveis e agnósticas de contexto
│   ├── button.tsx       (padrão shadcn/CVA)
│   └── accordion.tsx     (Radix UI)
├── layout/             Header, Footer, botão flutuante de WhatsApp
└── shared/             SectionHeading, GlassCard, ArcMotif, DynamicIcon

sections/               Composições de página específicas do negócio
├── Hero.tsx
├── CompanyOpening.tsx   (seção de maior prioridade de conversão)
├── ClientJourney.tsx    (timeline interativa das 12 etapas)
├── Specialties.tsx
├── Services.tsx
├── Differentials.tsx
├── Testimonials.tsx     (depoimentos placeholder, ver seção abaixo)
├── FAQ.tsx
└── FinalCTA.tsx

hooks/
└── useScrollReveal.ts   Animação de entrada via IntersectionObserver,
                          com fallback que garante visibilidade mesmo
                          sem JavaScript (ver comentário no arquivo)

lib/
├── constants.ts         WhatsApp, link da Área do Cliente, preços
├── whatsapp.ts           Builder de links wa.me com mensagens por CTA
├── seo.ts                Metadata base + JSON-LD (schema.org)
├── utils.ts              cn() — merge de classes Tailwind
└── data/                 Fonte de dados tipada (services, journey,
                           differentials, faq, testimonials, specialties)

types/
└── index.ts              Interfaces compartilhadas de domínio

assets/fonts/             Fontes WOFF2 com subsetting (não públicas,
                           consumidas via next/font/local)
```

### Por que essa separação

`sections/` conhece o negócio (preços, textos, ofertas); `components/`
não conhece nada além de props. `lib/data/` é a fonte única da verdade
para conteúdo dinâmico — trocar para um CMS no futuro significa substituir
o conteúdo desses arquivos por chamadas de API, sem tocar em nenhum
componente visual.

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:3000`.

## Build de produção (export estático)

```bash
npm run build
```

Gera a pasta `out/` com HTML/CSS/JS puros, prontos para qualquer hosting
estático (GitHub Pages, Cloudflare Pages, Vercel, S3, etc).

Para testar o build localmente antes de publicar:

```bash
npx serve out
```

## Deploy no GitHub Pages

O workflow `.github/workflows/deploy.yml` já está configurado para build e
deploy automático a cada push na branch `main`.

**Passos para ativar pela primeira vez:**

1. No repositório do GitHub, ir em **Settings → Pages**.
2. Em "Build and deployment", selecionar **Source: GitHub Actions**.
3. Fazer push para `main` — o workflow builda e publica automaticamente.

O site ficará disponível em `https://<usuario>.github.io/<nome-do-repo>/`.

### Migração futura para domínio próprio (meconti.com.br)

Quando migrar para o domínio próprio, dois ajustes são necessários:

1. No workflow `.github/workflows/deploy.yml`, mudar
   `NEXT_PUBLIC_BASE_PATH` de `"/${{ github.event.repository.name }}"`
   para `""` (string vazia) — o domínio próprio serve da raiz, não de um
   subpath.
2. Adicionar um arquivo `public/CNAME` contendo `meconti.com.br`, e
   configurar o DNS do domínio para apontar para o GitHub Pages (registro
   `A` para os IPs do GitHub Pages, ou `CNAME` para
   `<usuario>.github.io`, conforme a documentação oficial do GitHub sobre
   domínio customizado em GitHub Pages).

Se a decisão for migrar para Vercel ou Cloudflare Pages em vez de manter
GitHub Pages com domínio customizado, o projeto já está pronto: ambas as
plataformas suportam Next.js nativamente (inclusive com SSR/ISR, caso o
projeto evolua para precisar de backend no futuro) — não seria necessário
nem manter `output: "export"`.

## Conteúdo que precisa de atenção antes do go-live

### Depoimentos (placeholder)

O arquivo `lib/data/testimonials.ts` contém depoimentos fictícios,
claramente sinalizados como placeholder no próprio código. Não publicar
em produção sem substituir por depoimentos reais e autorizados — usar
depoimentos fabricados atribuídos a "clientes" é risco de reputação e
pode configurar prática vedada pelo Código de Defesa do Consumidor.

### Verificação de preços e condições comerciais

Os valores em `lib/constants.ts` (`PRICING`) foram extraídos do site atual
(`meconti.com.br`) no momento da construção deste projeto. Caso a Me Conti+
tenha atualizado valores ou condições desde então, atualizar esse arquivo
antes do deploy — é a única fonte de verdade para os preços exibidos em
toda a página.

### Jornada do Cliente

A timeline em `lib/data/journey.ts` segue a versão de 12 etapas do material
oficial de onboarding (confirmada como a versão vigente). Caso o processo
interno mude, esse é o único arquivo que precisa ser atualizado.

## Performance

Build de produção gera aproximadamente 3.1MB no total (incluindo todas as
fontes, imagens e JavaScript), com os principais bundles JS comprimidos
(gzip) somando cerca de 366KB. Fontes foram convertidas de TTF para WOFF2
com subsetting Latin (redução de ~85% no peso combinado das três famílias
tipográficas).

Recomenda-se rodar uma auditoria Lighthouse real após o primeiro deploy em
produção (o ambiente de desenvolvimento usado na construção deste projeto
não permitiu rodar o Lighthouse CLI completo por restrição de rede do
sandbox) para confirmar a meta de 95+ em todas as categorias, e ajustar
conforme necessário — em especial Largest Contentful Paint, que depende
também da latência real do CDN do GitHub Pages.

## Acessibilidade

- Navegação por teclado funcional em toda a página (menu mobile, accordion
  do FAQ, timeline da Jornada do Cliente).
- `:focus-visible` customizado com contraste adequado contra o fundo escuro.
- `prefers-reduced-motion` respeitado: todas as animações são desativadas
  para usuários que configuraram essa preferência no sistema operacional.
- Texto alternativo (`alt`) em todas as imagens; ícones decorativos marcados
  com `aria-hidden`.
- Conteúdo nunca depende de JavaScript para estar presente ou visível no
  HTML — ver nota de arquitetura em `hooks/useScrollReveal.ts`.

## SEO

- Metadata completo (title template, description, Open Graph, Twitter Card)
  centralizado em `lib/seo.ts`.
- JSON-LD (`schema.org/AccountingService`) injetado no `<head>` via
  `app/layout.tsx`.
- `sitemap.xml` e `robots.txt` gerados automaticamente em build
  (`app/sitemap.ts`, `app/robots.ts`).
- Heading hierárquico correto: um único `<h1>` no Hero, `<h2>` por seção.
