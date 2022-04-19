import { useCallback } from 'react';
import { IShinobi, IRound } from '../@types';

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

    const winners: IShinobi[] = [];
    const losers: IShinobi[] = [];

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

      if (
        players1[index].name === 'hinata' ||
        players2[index].name === 'hinata'
      ) {
        console.log(players1[index].name, player1WinPercentage);
        console.log(
          players2[index].name,
          player1Points + player2Points - player1WinPercentage,
        );
        console.log('random:', random);
      }

      if (random <= player1WinPercentage) {
        winners.push(players1[index]);
        losers.push(players2[index]);
      } else {
        winners.push(players2[index]);
        losers.push(players1[index]);
      }
    });

    return {
      players1,
      players2,
      winners,
      losers,
    };
  }, []);

  const onStartAllRounds = useCallback(
    (shinobis: IShinobi[]) => {
      let competitors: IShinobi[] = [];
      let finalists = shinobis;

      do {
        const { losers, winners } = onStartRound(finalists);

        finalists = winners;
        competitors = [...competitors, ...losers];
      } while (competitors.length % 2 === 0 && competitors.length !== 0);

      return [...competitors, finalists[0]];
    },
    [onStartRound],
  );

  return { onStartAllRounds, onStartRound };
};

export { useRound };
