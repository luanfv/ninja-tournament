import { useCallback } from 'react';

import { INinja, INinjaCompetitor, IBattle } from '@src/@types';
import { IUseBattle } from '@src/@types/hooks';
import { randomNumberFrom1To100 } from '@src/helpers';

const useBattle = (): IUseBattle => {
  const onStartBattle = useCallback(
    (ninjas: INinja[], random = randomNumberFrom1To100()) => {
      if (ninjas.length % 2 !== 0) {
        throw Error(
          'It is necessary to have an even number of competitors to start a round',
        );
      }

      const players1: INinja[] = [];
      const players2: INinja[] = [];

      ninjas.forEach((movie, index) => {
        if (index % 2 === 0) {
          players1.push(movie);

          return;
        }

        players2.push(movie);
      });

      const formattedPlayers1: INinjaCompetitor[] = [];
      const formattedPlayers2: INinjaCompetitor[] = [];
      const result: IBattle[] = [];

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

        const player1: INinjaCompetitor = {
          ...players1[index],
          winPercentage: player1WinPercentage,
          winner: isPlayer1Winner,
        };
        const player2: INinjaCompetitor = {
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

  const onStartTournament = useCallback(
    (ninjas: INinja[], random = randomNumberFrom1To100()) => {
      let finalists = ninjas;
      let result: IBattle[][] = [];
      let length: number = 0;

      do {
        const data = onStartBattle(finalists, random);
        const winners = data.map((item) => item.winner);

        result = [...result, data];
        finalists = winners.map((winner) => ({
          id: winner.id,
          chakra: winner.chakra,
          image: winner.image,
          name: winner.name,
          power: winner.power,
          technique: winner.technique,
        }));
        length = length + winners.length;
      } while (length % 2 === 0 && length !== 0);

      return result;
    },
    [onStartBattle],
  );

  return { onStartBattle, onStartTournament };
};

export { useBattle };
