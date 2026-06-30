import type { JourneyStep } from "@/types";

/**
 * Jornada do Cliente — 12 etapas.
 * Fonte: material oficial de onboarding da Me Conti+ (versão de 12 etapas,
 * que inclui a etapa de "Pesquisa de débitos anteriores" antes da reunião
 * de onboard). Manter sincronizado com qualquer atualização do material
 * de marketing original.
 */
export const journeySteps: JourneyStep[] = [
  {
    id: 1,
    title: "Preenchimento do forms cadastral",
    description:
      "Você preenche um formulário simples com os dados iniciais da sua empresa ou do seu projeto de abertura.",
    icon: "FileEdit",
  },
  {
    id: 2,
    title: "Contrato de Prestação de Serviços",
    description:
      "Formalizamos a relação com um contrato claro, sem cláusulas escondidas e sem fidelidade obrigatória.",
    icon: "FileSignature",
  },
  {
    id: 3,
    title: "Envio do 1º boleto",
    description:
      "Enviamos o primeiro boleto, com vencimento apenas no mês seguinte. O processo de onboarding segue normalmente, sem depender desse pagamento.",
    icon: "CircleDollarSign",
  },
  {
    id: 4,
    title: "Criação de procuração no e-CAC",
    description:
      "Providenciamos o acesso digital necessário junto à Receita Federal para atuar em nome da sua empresa.",
    icon: "KeyRound",
  },
  {
    id: 5,
    title: "Compartilhamento de acessos a sistemas",
    description:
      "Você compartilha conosco as credenciais de acesso aos sistemas de emissão de notas, para que tanto você quanto nossa equipe possam acompanhar todas as notas fiscais emitidas.",
    icon: "FileKey2",
  },
  {
    id: 6,
    title: "Cadastro no Portal do Cliente",
    description:
      "Seu acesso ao portal é criado, centralizando documentos, status e comunicação em um só lugar.",
    icon: "Monitor",
  },
  {
    id: 7,
    title: "Pesquisa de débitos anteriores",
    description:
      "Fazemos um levantamento completo de pendências anteriores para começar sua operação sem surpresas.",
    icon: "Search",
  },
  {
    id: 8,
    title: "Reunião de Onboard",
    description:
      "Orientamos os sócios sobre as responsabilidades e cuidados que devem ter à frente de uma empresa, e sobre os documentos que precisarão nos enviar mensalmente.",
    icon: "Users",
  },
  {
    id: 9,
    title: "Envio de documentos contábeis",
    description:
      "Organizamos e solicitamos a documentação necessária para manter sua contabilidade sempre em dia.",
    icon: "FileUp",
  },
  {
    id: 10,
    title: "Cadastro na Contabilidade Digital",
    description:
      "Sua empresa passa a operar dentro da nossa plataforma digital, com rotinas automatizadas e rastreáveis.",
    icon: "CloudCog",
  },
  {
    id: 11,
    title: "1º fechamento contábil na Me Conti+",
    description:
      "Entregamos o primeiro fechamento contábil sob nossa responsabilidade, com clareza total dos números.",
    icon: "TrendingUp",
  },
  {
    id: 12,
    title: "2ª Reunião de alinhamento, se necessário",
    description:
      "Caso haja qualquer ajuste a fazer, alinhamos juntos para que sua operação siga redonda dali em diante.",
    icon: "CalendarCheck2",
  },
];