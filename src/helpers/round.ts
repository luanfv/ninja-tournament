import { INinja, IRoundBattles } from './../@types';

const roundBattles = (ninjas: INinja[]): IRoundBattles => {
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

  const winners: INinja[] = [];
  const losers: INinja[] = [];

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

    if (player1WinPercentage <= random) {
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
};

export { roundBattles };
