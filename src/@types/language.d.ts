interface ILanguage {
  type: 'en_US' | 'pt_BR';

  pages: {
    dashboard: {
      welcome: string;
      appName: string;
      historicTitle: string;
    };

    competitors: {
      headerTitle: string;
      headerDescription: string;
      headerDescriptionOf: string;
      footerButton: string;
    };

    selectedCompetitors: {
      headerTitle: string;
      footerButton: string;
    };

    scoreboard: {
      headerTitle: string;
      footerButton: string;
      finalRound: string;
      semifinalRound: string;
      round: string;
    };

    historic: {
      header: string;
    };
  };

  components: {
    cardBattle: {
      winner: string;
      percentageToWin: string;
    };

    historicListItem: {
      tournamentTitle: string;
      tournamentMessage: string;

      duelTitle: string;
      duelMessage: string;
    };

    menuListItem: {
      tournamentTitle: string;
      tournamentMessage: string;

      duelTitle: string;
      duelMessage: string;

      historicTitle: string;
      historicMessage: string;
    };
  };
}

export { ILanguage };
