import { renderHook } from '@testing-library/react-hooks';

import { useRound } from './round';

const shinobis = [
  {
    chakra: 10,
    id: 7,
    image:
      'https://firebasestorage.googleapis.com/v0/b/naruto-shuriken.appspot.com/o/kakashi.png?alt=media&token=95d4e2b7-28b9-43cc-bfd9-eb0402cdedab',
    name: 'Kakashi',
    power: 10,
    technique: 18,
  },
  {
    chakra: 4,
    id: 11,
    image:
      'https://firebasestorage.googleapis.com/v0/b/naruto-shuriken.appspot.com/o/ino.webp?alt=media&token=05e85fe5-9ef9-443b-af65-a9535411187a',
    name: 'Ino',
    power: 2,
    technique: 10,
  },
  {
    chakra: 16,
    id: 1,
    image:
      'https://firebasestorage.googleapis.com/v0/b/naruto-shuriken.appspot.com/o/naruto.jpeg?alt=media&token=08633011-2f85-4df1-a2a5-d6ee015ac98a',
    name: 'Naruto',
    power: 8,
    technique: 6,
  },
  {
    chakra: 6,
    id: 12,
    image:
      'https://firebasestorage.googleapis.com/v0/b/naruto-shuriken.appspot.com/o/neji.png?alt=media&token=1e848729-f44d-43ad-9375-fde6fae6e69b',
    name: 'Neji',
    power: 8,
    technique: 12,
  },
];

describe('Hook: useRound', () => {
  const [player1, player2] = shinobis;
  const { result } = renderHook(() => useRound());

  test('onStartRound: Response length', () => {
    expect(result.current.onStartRound(shinobis).length).toBe(2);
    expect(() => result.current.onStartRound([player1])).toThrow();
  });

  test('onStartRound: Percentage', () => {
    const player1Points = player1.power + player1.chakra + player1.technique;
    const player2Points = player2.power + player2.chakra + player2.technique;

    const player1WinPercentage =
      (player1Points * 100) / (player1Points + player2Points);

    const [response] = result.current.onStartRound([player1, player2]);
    expect(response.player1.winPercentage).toBe(player1WinPercentage);
    expect(response.player2.winPercentage).toBe(100 - player1WinPercentage);
  });

  test('onStartRound: Champion', () => {
    const [player1Winner] = result.current.onStartRound([player1, player2], 50);
    expect(player1Winner.winner.id).toBe(player1.id);

    const [player2Winner] = result.current.onStartRound([player1, player2], 90);
    expect(player2Winner.winner.id).toBe(player2.id);
  });

  test('onStartAllRounds: Response length', () => {
    const response = result.current.onStartAllRounds(shinobis);
    const length1 = 2;
    const length1x1 = 2;
    const length1x2 = 1;

    expect(response.length).toBe(length1);
    expect(response[0].length).toBe(length1x1);
    expect(response[1].length).toBe(length1x2);

    expect(() => result.current.onStartAllRounds([player1])).toThrow();
  });

  test('onStartAllRounds: Champion', () => {
    const [kakashi, ino, naruto, neji] = shinobis;

    const fiftyPercent = result.current.onStartAllRounds(shinobis, 50);

    expect(fiftyPercent[0][0].winner.id).toBe(kakashi.id);
    expect(fiftyPercent[0][1].winner.id).toBe(naruto.id);
    expect(fiftyPercent[1][0].winner.id).toBe(kakashi.id);

    const twentyPercent = result.current.onStartAllRounds(shinobis, 80);

    expect(twentyPercent[0][0].winner.id).toBe(ino.id);
    expect(twentyPercent[0][1].winner.id).toBe(neji.id);
    expect(twentyPercent[1][0].winner.id).toBe(neji.id);
  });
});
