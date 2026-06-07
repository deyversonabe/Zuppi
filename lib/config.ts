export const siteConfig = {
  name: 'Zuppi',
  slogan: 'Conecta ideias. Gera soluções.',
  thesis:
    'Uma plataforma de economia do conhecimento que transforma problemas reais em desafios pagos, conecta alunos, mentores e empresas por match inteligente, gera renda e mede impacto.',
  cycle: [
    'Problema real',
    'Desafio pago',
    'Match inteligente',
    'Projeto guiado',
    'Renda',
    'Impacto',
  ],
  split: [
    { label: 'aluno',      percent: 60 },
    { label: 'mentor',     percent: 20 },
    { label: 'plataforma', percent: 15 },
    { label: 'impacto',    percent: 5  },
  ],
  /**
   * Navegação principal da aplicação.
   *
   * A partir da versão atual, mostramos apenas um único item de navegação
   * responsável por levar o usuário à área de autenticação/portal. Os
   * demais itens de navegação foram removidos para simplificar o menu
   * principal e direcionar o fluxo de acesso através de login. Caso
   * precise adicionar novos links no futuro, inclua novos objetos
   * neste array com as propriedades `href` e `label`.
   */
  nav: [
    { href: '/portal', label: 'Acessar plataforma' },
  ],
};
