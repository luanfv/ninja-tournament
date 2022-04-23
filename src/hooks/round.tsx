import { useCallback } from 'react';

import { IShinobi, IRound, IShinobiCompetitor, IRoundFinish } from '../@types';

const useRound = (): IRound => {
  const onStartRound = useCallback((shinobis: IShinobi[]) => {
    if (shinobis.length % 2 !== 0) {
      throw Error(
        'It is necessary to have an even number of competitors to start a round',
      );
    }

    const players1: IShinobi[] = [];
    const players2: IShinobi[] = [];

    shinobis.forEach((movie, index) => {
      if (index % 2 === 0) {
        players1.push(movie);

        return;
      }

      players2.push(movie);
    });

    const formattedPlayers1: IShinobiCompetitor[] = [];
    const formattedPlayers2: IShinobiCompetitor[] = [];
    const winners: IShinobiCompetitor[] = [];
    const losers: IShinobiCompetitor[] = [];
    const test = [];

    players1.map((_, index) => {
      const player1Points =
        players1[index].chakra +
        players1[index].power +
        players1[index].technique;

      const player2Points =
        players2[index].chakra +
        players2[index].power +
        players2[index].technique;

      const random = Math.floor(Math.random() * 100) + 1;

      const player1WinPercentage =
        (player1Points * 100) / (player1Points + player2Points);
      const player2WinPercentage = 100 - player1WinPercentage;

      const isPlayer1Winner = random <= player1WinPercentage;

      const player1: IShinobiCompetitor = {
        ...players1[index],
        winPercentage: player1WinPercentage,
      };
      const player2: IShinobiCompetitor = {
        ...players2[index],
        winPercentage: player2WinPercentage,
      };

      formattedPlayers1.push(player1);
      formattedPlayers2.push(player2);

      if (isPlayer1Winner) {
        winners.push(player1);
        losers.push(player2);
      } else {
        winners.push(player2);
        losers.push(player1);
      }

      test.push({
        player1: player1,
        player2: player2,
        winner: isPlayer1Winner ? player1 : player2,
        loser: !isPlayer1Winner ? player1 : player2,
      });
    });

    return {
      players1: formattedPlayers1,
      players2: formattedPlayers2,
      winners,
      losers,
    };
  }, []);

  const onStartAllRounds = useCallback(
    (shinobis: IShinobi[]) => {
      let length: number = 0;
      let finalists = shinobis;
      const rounds: IRoundFinish[] = [];

      do {
        const data = onStartRound(finalists);

        data.winners.forEach((_, index) => {
          rounds.push({
            player1: data.players1[index],
            player2: data.players2[index],
            winner: data.winners[index],
            loser: data.losers[index],
          });
        });

        finalists = data.winners;
        length = length + data.losers.length;
      } while (length % 2 === 0 && length !== 0);

      return rounds;
    },
    [onStartRound],
  );

  return { onStartRound, onStartAllRounds };
};

export { useRound };
