import AsyncStorage from '@react-native-async-storage/async-storage';
import { renderHook } from '@testing-library/react-hooks';

import { useStorage } from '@src/hooks/storage';

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
  setItem: jest.fn(),
  getItem: jest.fn(),
}));

const mockAsyncStorage = AsyncStorage as jest.Mocked<typeof AsyncStorage>;

const mockAsyncStorageGetItem = (): Promise<string> => {
  return new Promise((resolve, _) => {
    setTimeout(() => resolve(JSON.stringify(mockShinobis)), 100);
  });
};

describe('Hook: useStorage', () => {
  it('Should fetch the shinobi stored in storage and return an empty array', async () => {
    const { result } = renderHook(() => useStorage());
    const shinobis = await result.current.getShinobis();

    expect(shinobis).toEqual([]);
    expect(AsyncStorage.getItem).toBeCalledWith('@NarutoShuriken/shinobis');
  });

  it('Must add a array of shinobi in the storage and check if it was saved', async () => {
    mockAsyncStorage.getItem.mockImplementation(() =>
      mockAsyncStorageGetItem(),
    );

    const { result } = renderHook(() => useStorage());
    const response = await result.current.setShinobis(mockShinobis);

    expect(response).toBeTruthy();
    expect(AsyncStorage.setItem).toBeCalledWith(
      '@NarutoShuriken/shinobis',
      JSON.stringify(mockShinobis),
    );

    const shinobis = await result.current.getShinobis();

    expect(shinobis).toEqual(mockShinobis);
    expect(AsyncStorage.getItem).toBeCalledWith('@NarutoShuriken/shinobis');
  });
});
