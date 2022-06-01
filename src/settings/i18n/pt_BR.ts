import { ILanguage } from '@src/@types';

const pt_BR: ILanguage = {
  type: 'pt_BR',
  pages: {
    home: {
      headerTitle: 'seleção de competidores',
      headerDescription: 'ninjas selecionados',
      headerDescriptionOf: 'de',
      footerButton: 'avançar',
    },
    battle: {
      headerTitle: 'torneio',
      footerButton: 'iniciar torneio',
    },
    battleResult: {
      headerTitle: 'resultado',
      footerButton: 'voltar para home',
      finalRound: 'final',
      semifinalRound: 'semifinal',
      round: 'rodada',
    },
  },
  components: {
    cardBattle: {
      winner: 'vencedor',
      percentageToWin: 'chance de vitória',
    },
  },
};

export { pt_BR };
