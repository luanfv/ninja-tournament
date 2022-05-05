import { renderHook } from '@testing-library/react-hooks';

import { useRound } from './round';

const shinobis = [
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
    chakra: 10,
    id: 3,
    image:
      'https://firebasestorage.googleapis.com/v0/b/naruto-shuriken.appspot.com/o/sasuke.jpeg?alt=media&token=196d8ac9-fd65-48cd-b3ed-6e2eb88213db',
    name: 'Sasuke',
    power: 8,
    technique: 12,
  },
  {
    chakra: 4,
    id: 5,
    image:
      'https://firebasestorage.googleapis.com/v0/b/naruto-shuriken.appspot.com/o/sakura.jpeg?alt=media&token=ef017010-ebff-464b-92f9-e5b1c38a49be',
    name: 'Sakura',
    power: 2,
    technique: 12,
  },
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
    id: 9,
    image:
      'https://firebasestorage.googleapis.com/v0/b/naruto-shuriken.appspot.com/o/shikamaru.webp?alt=media&token=cb48a1ca-74b3-4772-9456-21b10c760bb7',
    name: 'Shikamaru',
    power: 4,
    technique: 18,
  },
  {
    chakra: 4,
    id: 10,
    image:
      'https://firebasestorage.googleapis.com/v0/b/naruto-shuriken.appspot.com/o/choji.webp?alt=media&token=caa58d3e-5e79-4a03-95a9-917f8535cf04',
    name: 'Choji',
    power: 12,
    technique: 2,
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
  const { result } = renderHook(() => useRound());

  test('onStartRound: Response length', () => {
    const [player1, player2] = shinobis;

    expect(result.current.onStartRound([player1, player2]).length).toBe(1);
    expect(() => result.current.onStartRound([player1])).toThrow();
  });

  test('onStartRound: Percentage', () => {
    const kakashi = {
      chakra: 10,
      id: 7,
      image:
        'https://firebasestorage.googleapis.com/v0/b/naruto-shuriken.appspot.com/o/kakashi.png?alt=media&token=95d4e2b7-28b9-43cc-bfd9-eb0402cdedab',
      name: 'Kakashi',
      power: 10,
      technique: 18,
    };
    const ino = {
      chakra: 4,
      id: 11,
      image:
        'https://firebasestorage.googleapis.com/v0/b/naruto-shuriken.appspot.com/o/ino.webp?alt=media&token=05e85fe5-9ef9-443b-af65-a9535411187a',
      name: 'Ino',
      power: 2,
      technique: 10,
    };

    const kakashiPoints = kakashi.power + kakashi.chakra + kakashi.technique;
    const inoPoints = ino.power + ino.chakra + ino.technique;

    const kakashiWinPercentage =
      (kakashiPoints * 100) / (kakashiPoints + inoPoints);

    const response = result.current.onStartRound([kakashi, ino]);

    expect(response[0].player1.winPercentage).toBe(kakashiWinPercentage);
    expect(response[0].player2.winPercentage).toBe(100 - kakashiWinPercentage);
  });
});
