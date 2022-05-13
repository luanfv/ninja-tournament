import { renderHook } from '@testing-library/react-hooks';

import { useShinobis } from '@src/hooks/shinobis';
import { serviceShinobis } from '@src/services/shinobis';

const mockShinobi = {
  chakra: 10,
  id: 7,
  image: '',
  name: 'Kakashi',
  power: 10,
  technique: 18,
};

const mockShinobis = [mockShinobi];

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(() => {
    return new Promise((_, reject) => {
      setTimeout(() => reject(), 100);
    });
  }),
}));

jest.mock('../../src/services/shinobis');

const mockSerivce = serviceShinobis as any;

describe('Hook: useStorage', () => {
  beforeEach(() => {
    // Limpa a implementação do mock em cada "it"
    mockSerivce.getFirebase.mockClear();
  });

  describe('Firebase', () => {
    it('Should return a list of competitors', async () => {
      mockSerivce.getFirebase.mockImplementation(() => mockShinobis);

      const { result, waitForNextUpdate } = renderHook(() => useShinobis());

      expect(result.current.shinobis).toEqual([]);
      expect(result.current.status).toEqual('loading');

      await waitForNextUpdate();

      expect(result.current.shinobis).toEqual(mockShinobis);
      expect(result.current.status).toEqual('success');
    });

    it('Must filter the competitor', async () => {
      mockSerivce.getFirebase.mockImplementation(() => mockShinobis);

      const { result, waitForNextUpdate } = renderHook(() => useShinobis());

      await waitForNextUpdate();

      expect(result.current.getById(7)).toEqual(mockShinobi);
    });
  });

  describe('No connection', () => {
    it('Should return an empty list', async () => {
      mockSerivce.getFirebase.mockImplementation(() => undefined);

      const { result, waitForNextUpdate } = renderHook(() => useShinobis());

      await waitForNextUpdate();

      expect(result.current.shinobis).toEqual([]);
    });

    it('Should return "undefined" when it doesn\'t find the search competitor', async () => {
      mockSerivce.getFirebase.mockImplementation(() => undefined);

      const { result, waitForNextUpdate } = renderHook(() => useShinobis());

      await waitForNextUpdate();

      expect(result.current.getById(7)).toBeFalsy();
    });
  });
});
