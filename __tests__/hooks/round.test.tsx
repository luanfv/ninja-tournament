import { renderHook } from '@testing-library/react-hooks';

import { useBattle } from '@src/hooks/battle';

const ninjas = [
  {
    chakra: 10,
    id: 7,
    image: '',
    name: 'Kakashi',
    power: 10,
    technique: 18,
  },
  {
    chakra: 4,
    id: 11,
    image: '',
    name: 'Ino',
    power: 2,
    technique: 10,
  },
  {
    chakra: 16,
    id: 1,
    image: '',
    name: 'Naruto',
    power: 8,
    technique: 6,
  },
  {
    chakra: 6,
    id: 12,
    image: '',
    name: 'Neji',
    power: 8,
    technique: 12,
  },
];

describe('Hook: useBattle', () => {
  it('onStartRound: Should return a list with round information if it has a number for competitors', () => {
    const { result } = renderHook(() => useBattle());
    const response = result.current.onStartRound(ninjas);
    const length = response.length;

    expect(length).toBe(2);
  });

  it('onStartRound: Must fail if it has an odd number of competitors for the round', () => {
    const { result } = renderHook(() => useBattle());
    const [player1] = ninjas;

    expect(() => result.current.onStartRound([player1])).toThrow();
  });

  it('onStartRound: Must know the winning percentage of the two competitors in the round', () => {
    const { result } = renderHook(() => useBattle());
    const [player1, player2] = ninjas;

    const [response] = result.current.onStartRound([player1, player2]);

    expect(response.player1.winPercentage.toFixed(2)).toBe('70.37');
    expect(response.player2.winPercentage.toFixed(2)).toBe('29.63');
  });

  it('onStartRound: Must return round information and validate that the correct competitor has won', () => {
    const { result } = renderHook(() => useBattle());
    const [player1, player2] = ninjas;

    const [player1Winner] = result.current.onStartRound([player1, player2], 50);
    expect(player1Winner.winner.id).toBe(player1.id);

    const [player2Winner] = result.current.onStartRound([player1, player2], 90);
    expect(player2Winner.winner.id).toBe(player2.id);
  });

  it('onStartAllRounds: Must hold a tournament and validate if the size of the array returned is correct', () => {
    const { result } = renderHook(() => useBattle());
    const [player1] = ninjas;

    const response = result.current.onStartAllRounds(ninjas);
    const length1 = 2;
    const length1x1 = 2;
    const length1x2 = 1;

    expect(response.length).toBe(length1);
    expect(response[0].length).toBe(length1x1);
    expect(response[1].length).toBe(length1x2);

    expect(() => result.current.onStartAllRounds([player1])).toThrow();
  });

  it('onStartAllRounds: Must fail if there are an odd number of competitors for the tournament', () => {
    const { result } = renderHook(() => useBattle());
    const [player1] = ninjas;

    expect(() => result.current.onStartAllRounds([player1])).toThrow();
  });

  it('onStartAllRounds: Must return tournament information and validate that the correct competitor has won', () => {
    const { result } = renderHook(() => useBattle());

    const [kakashi, ino, naruto, neji] = ninjas;

    const fiftyPercent = result.current.onStartAllRounds(ninjas, 50);

    expect(fiftyPercent[0][0].winner.id).toBe(kakashi.id);
    expect(fiftyPercent[0][1].winner.id).toBe(naruto.id);
    expect(fiftyPercent[1][0].winner.id).toBe(kakashi.id);

    const twentyPercent = result.current.onStartAllRounds(ninjas, 80);

    expect(twentyPercent[0][0].winner.id).toBe(ino.id);
    expect(twentyPercent[0][1].winner.id).toBe(neji.id);
    expect(twentyPercent[1][0].winner.id).toBe(neji.id);
  });
});
