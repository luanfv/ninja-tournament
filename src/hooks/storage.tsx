import { useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { IShinobi, IStorage } from '../@types';

type IStorageType = 'shinobis';

const host = '@NarutoShuriken';

const useStorage = (): IStorage => {
  const getStorage = useCallback(async (value: IStorageType) => {
    const response = await AsyncStorage.getItem(`${host}/${value}`);

    return response;
  }, []);

  const setStorage = useCallback(async (value: IStorageType, item: any) => {
    await AsyncStorage.setItem(`${host}/${value}`, JSON.stringify(item));
  }, []);

  const getShinobis = useCallback(async () => {
    const response = await getStorage('shinobis');

    if (!response) {
      return undefined;
    }

    const shinobis = JSON.parse(response) as IShinobi[];

    return shinobis;
  }, [getStorage]);

  const setShinobis = useCallback(
    async (item: IShinobi[]) => {
      await setStorage('shinobis', item);
    },
    [setStorage],
  );

  return { getShinobis, setShinobis };
};

export { useStorage };
