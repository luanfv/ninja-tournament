interface ILanguage {
  type: 'en_US' | 'pt_BR';
  pages: {
    home: {
      headerTitle: string;
      headerDescription: string;
      headerDescriptionOf: string;
      footerButton: string;
    };
    battle: {
      headerTitle: string;
      footerButton: string;
    };
    battleResult: {
      headerTitle: string;
      footerButton: string;
      finalRound: string;
      semifinalRound: string;
      round: string;
    };
  };
  components: {
    cardBattle: {
      winner: string;
      percentageToWin: string;
    };
  };
}

export { ILanguage };
