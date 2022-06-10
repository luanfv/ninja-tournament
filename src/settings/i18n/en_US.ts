import { ILanguage } from '@src/@types';

const en_US: ILanguage = {
  type: 'en_US',

  pages: {
    dashboard: {
      welcome: 'Hello, welcome to',
      appName: 'Ninja Tournament',
      historicTitle: 'My history',
    },

    competitors: {
      headerTitle: 'Selection of competitors',
      headerDescription: 'Selected ninja',
      headerDescriptionOf: 'of',
      footerButton: 'Next',
    },

    selectedCompetitors: {
      headerTitle: 'List of competitors',
      footerButton: 'Start battles',
    },

    scoreboard: {
      headerTitle: 'Scoreboard',
      footerButton: 'Back to dashboard',
      finalRound: 'Final round',
      semifinalRound: 'Semifinal round',
      round: 'Round',
    },

    historic: {
      header: 'Global history',
    },
  },
  components: {
    cardBattle: {
      winner: 'Winner',
      percentageToWin: 'Probability',
    },

    menuListItem: {
      tournamentTitle: 'Tournament',
      tournamentMessage:
        'Start a tournament with 8 different ninjas, the winner is the ninja who wins the three rounds of the tournament.',

      duelTitle: 'Duel',
      duelMessage:
        'Start a duel between two different ninjas, the winner is defined through the probability result.',

      historicTitle: 'Global History',
      historicMessage: 'View other users tournament history.',
    },

    historicListItem: {
      tournamentTitle: 'Tournament',
      tournamentMessage: 'is the tournament winner.',

      duelTitle: 'Duel',
      duelMessage: 'is the winner of the duel.',
    },
  },
};

export { en_US };
