import { ILanguage } from '@src/@types/index';

const en_US: ILanguage = {
  type: 'en_US',
  pages: {
    home: {
      headerTitle: 'selection of competitors',
      headerDescription: 'selected shinobi',
      headerDescriptionOf: 'of',
      footerButton: 'next',
    },
    battle: {
      headerTitle: 'tournament',
      footerButton: 'start tournament',
    },
    battleResult: {
      headerTitle: 'result',
      footerButton: 'back to home',
      finalRound: 'final',
      semifinalRound: 'semifinal',
      round: 'round',
    },
  },
  components: {
    cardBattle: {
      winner: 'winner',
      percentageToWin: 'chance of victory',
    },
  },
};

export { en_US };
