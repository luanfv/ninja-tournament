import { collection, getDocs } from 'firebase/firestore/lite';

import { firebase } from '../settings';
import { INinja } from '../@types/ninja';

const serviceNinjas = {
  getFirebase: async (): Promise<INinja[]> => {
    const data = collection(firebase, 'ninjas');
    const snapshot = await getDocs(data);
    const ninjas = snapshot.docs.map((doc) => doc.data()) as INinja[];

    return ninjas;
  },
};

export { serviceNinjas };
