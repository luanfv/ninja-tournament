import AsyncStorage from '@react-native-async-storage/async-storage';
import { IShinobi } from '../@types';

const base = '@Naruto-Shuriken';

const storageShinobis = {
  get: async (): Promise<IShinobi[] | undefined> => {
    try {
      const response = await AsyncStorage.getItem(`${base}/shinobis`);

      if (!response) {
        throw Error();
      }

      const data = JSON.parse(response) as IShinobi[];

      return data;
    } catch {
      return undefined;
    }
  },

  set: async (data: IShinobi[]): Promise<boolean> => {
    try {
      await AsyncStorage.setItem(`${base}/shinobis`, JSON.stringify(data));

      return true;
    } catch {
      return false;
    }
  },
};

export { storageShinobis };
