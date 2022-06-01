interface ILanguage {
  type: 'en_US' | 'pt_BR';
  pages: {
    home: {
      headerTitle: string;
      headerDescription: string;
      headerDescriptionOf: string;
      footerButton: string;
    };
    tournament: {
      headerTitle: string;
      footerButton: string;
    };
    tournamentScore: {
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
