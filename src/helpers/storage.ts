import AsyncStorage from '@react-native-async-storage/async-storage';
import { INinja } from '../@types';

const base = '@Naruto-Shuriken';

const storageNinjas = {
  get: async (): Promise<INinja[] | undefined> => {
    try {
      const response = await AsyncStorage.getItem(`${base}/ninjas`);

      if (!response) {
        throw Error();
      }

      const data = JSON.parse(response) as INinja[];

      return data;
    } catch {
      return undefined;
    }
  },

  set: async (data: INinja[]): Promise<boolean> => {
    try {
      await AsyncStorage.setItem(`${base}/ninjas`, JSON.stringify(data));

      return true;
    } catch {
      return false;
    }
  },
};

export { storageNinjas };
