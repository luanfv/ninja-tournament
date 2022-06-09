import { ILanguage } from '@src/@types';

const pt_BR: ILanguage = {
  type: 'pt_BR',

  pages: {
    dashboard: {
      welcome: 'Olá, seja bem-vindo(a)',
      appName: 'Ninja Tournament',
      historicTitle: 'Meu histórico',
    },

    competitors: {
      headerTitle: 'Seleção de competidores',
      headerDescription: 'Ninjas selecionados',
      headerDescriptionOf: 'de',
      footerButton: 'Avançar',
    },

    selectedCompetitors: {
      headerTitle: 'Lista de competidores',
      footerButton: 'Iniciar batalhas',
    },

    scoreboard: {
      headerTitle: 'Placares',
      footerButton: 'Voltar para dashboard',
      finalRound: 'Final',
      semifinalRound: 'Semifinal',
      round: 'Rodada',
    },

    historic: {
      header: 'Histórico global',
    },
  },
  components: {
    cardBattle: {
      winner: 'Vencedor',
      percentageToWin: 'Probabilidade',
    },

    menuListItem: {
      tournamentTitle: 'Torneio',
      tournamentMessage:
        'Comece um torneio com 8 ninjas diferentes, o vencedor é o ninja que vencer as três rodadas do torneio.',

      duelTitle: 'duel',
      duelMessage:
        'Inicie um duelo entre dois ninjas diferentes, o vencedor é definido através do resultado da probabilidade.',

      historicTitle: 'Histórico Global',
      historicMessage: 'Visualize o histórico de torneio dos outros usuários.',
    },

    historicListItem: {
      tournamentTitle: 'Torneio',
      tournamentMessage: 'é o vencedor do torneio.',

      duelTitle: 'Duelo',
      duelMessage: 'é o vencedor do duelo.',
    },
  },
};

export { pt_BR };
