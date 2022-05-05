import { useCallback } from 'react';

import { IShinobi, IRound, IShinobiCompetitor, IRoundResult } from '../@types';

const useRound = (): IRound => {
  const onStartRound = useCallback(
    (shinobis: IShinobi[], random = Math.floor(Math.random() * 100) + 1) => {
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
      const result: IRoundResult[] = [];

      players1.forEach((_, index) => {
        const player1Points =
          players1[index].chakra +
          players1[index].power +
          players1[index].technique;

        const player2Points =
          players2[index].chakra +
          players2[index].power +
          players2[index].technique;

        const player1WinPercentage =
          (player1Points * 100) / (player1Points + player2Points);
        const player2WinPercentage = 100 - player1WinPercentage;

        const isPlayer1Winner = random <= player1WinPercentage;

        const player1: IShinobiCompetitor = {
          ...players1[index],
          winPercentage: player1WinPercentage,
          winner: isPlayer1Winner,
        };
        const player2: IShinobiCompetitor = {
          ...players2[index],
          winPercentage: player2WinPercentage,
          winner: !isPlayer1Winner,
        };

        formattedPlayers1.push(player1);
        formattedPlayers2.push(player2);

        result.push({
          player1: player1,
          player2: player2,
          winner: isPlayer1Winner ? player1 : player2,
        });
      });

      return result;
    },
    [],
  );

  const onStartAllRounds = useCallback(
    (shinobis: IShinobi[], random = Math.floor(Math.random() * 100) + 1) => {
      let finalists = shinobis;
      let result: IRoundResult[][] = [];
      let length: number = 0;

      do {
        const data = onStartRound(finalists, random);
        const winners = data.map((item) => item.winner);

        result = [...result, data];
        finalists = winners;
        length = length + winners.length;
      } while (length % 2 === 0 && length !== 0);

      return result;
    },
    [onStartRound],
  );

  return { onStartRound, onStartAllRounds };
};

export { useRound };
