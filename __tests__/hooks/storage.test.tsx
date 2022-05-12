import AsyncStorage from '@react-native-async-storage/async-storage';
import { renderHook } from '@testing-library/react-hooks';

import { IShinobi } from '../../src/@types';
import { useStorage } from '../../src/hooks/storage';

const mockItems: IShinobi[] = [];

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
  setItem: jest.fn((item, value) => {
    return new Promise((resolve, _) => {
      mockItems[item] = value;

      setTimeout(() => resolve(value), 100);
    });
  }),
  getItem: jest.fn((item) => {
    return new Promise((resolve, _) => {
      setTimeout(() => resolve(mockItems[item]), 100);
    });
  }),
}));

describe('Hook: useStorage', () => {
  const { result } = renderHook(() => useStorage());

  it('Should fetch the shinobi stored in storage and return an empty array', async () => {
    const shinobis = await result.current.getShinobis();

    expect(shinobis).toEqual([]);
    expect(AsyncStorage.getItem).toBeCalledWith('@NarutoShuriken/shinobis');
  });

  it('Must add a array of shinobi in the storage and check if it was saved', async () => {
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
