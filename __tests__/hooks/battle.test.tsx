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

describe('Hook: useBattle (src/hooks/battle.tsx)', () => {
  describe('onStartBattle', () => {
    it('Should return a list with information about the battle if it has an even number of competitors', () => {
      const { result } = renderHook(() => useBattle());
      const response = result.current.onStartBattle(ninjas);
      const length = response.length;

      expect(length).toBe(2);
    });

    it('Must fail if it has an odd number of competitors for the battle', () => {
      const { result } = renderHook(() => useBattle());
      const [player1] = ninjas;

      expect(() => result.current.onStartBattle([player1])).toThrow();
    });

    it('Should return the win percentage of player 1 = 70.37 and player 2 = 29.63', () => {
      const { result } = renderHook(() => useBattle());
      const [player1, player2] = ninjas;

      const [response] = result.current.onStartBattle([player1, player2]);

      expect(response.player1.winPercentage.toFixed(2)).toBe('70.37');
      expect(response.player2.winPercentage.toFixed(2)).toBe('29.63');
    });

    it('Must return player 1 as the winner', () => {
      const { result } = renderHook(() => useBattle());
      const [player1, player2] = ninjas;

      const [player2Winner] = result.current.onStartBattle(
        [player1, player2],
        90,
      );
      expect(player2Winner.winner.id).toBe(player2.id);
    });

    it('Must return player 2 as the winner', () => {
      const { result } = renderHook(() => useBattle());
      const [player1, player2] = ninjas;

      const [player2Winner] = result.current.onStartBattle(
        [player1, player2],
        90,
      );
      expect(player2Winner.winner.id).toBe(player2.id);
    });
  });

  describe('onStartTournament', () => {
    it('Should return a 2 row array, where the first row has 2 columns and the second row has 1 column', () => {
      const { result } = renderHook(() => useBattle());
      const [player1] = ninjas;

      const response = result.current.onStartTournament(ninjas);
      const rows = 2;
      const column1 = 2;
      const column2 = 1;

      expect(response.length).toBe(rows);
      expect(response[0].length).toBe(column1);
      expect(response[1].length).toBe(column2);

      expect(() => result.current.onStartTournament([player1])).toThrow();
    });

    it('Must fail if there are an odd number of competitors for the tournament', () => {
      const { result } = renderHook(() => useBattle());
      const [player1] = ninjas;

      expect(() => result.current.onStartTournament([player1])).toThrow();
    });

    it('Tournament with 4 players, the battles must be player 1 against player 2 and player 3 against player 4. Player 1 and player 3 qualify for the final where player 1 wins', () => {
      const { result } = renderHook(() => useBattle());

      const fiftyPercent = result.current.onStartTournament(ninjas, 50);

      expect(fiftyPercent[0][0].winner.id).toBe(ninjas[0].id);
      expect(fiftyPercent[0][1].winner.id).toBe(ninjas[2].id);
      expect(fiftyPercent[1][0].winner.id).toBe(ninjas[0].id);
    });
  });
});
