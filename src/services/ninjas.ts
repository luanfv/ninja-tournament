import firestore from '@react-native-firebase/firestore';

import { INinja } from '@src/@types';

const serviceNinjas = {
  get: async () => {
    const response = await firestore().collection('ninjas').orderBy('id').get();

    const ninjas = response.docs.map((doc) => {
      return {
        ...doc.data(),
      };
    }) as INinja[];

    return ninjas;
  },
};

export { serviceNinjas };
