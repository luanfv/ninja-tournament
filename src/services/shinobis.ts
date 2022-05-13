import { collection, getDocs } from 'firebase/firestore/lite';

import { firebase } from '@src/settings';
import { IShinobi } from '@src/@types/shinobi';
import { sortObjects } from '@src/helpers';

const serviceShinobis = {
  getFirebase: async (): Promise<IShinobi[]> => {
    const data = collection(firebase, 'ninjas');
    const snapshot = await getDocs(data);
    const shinobis = snapshot.docs.map((doc) => doc.data()) as IShinobi[];

    return sortObjects(shinobis, 'id');
  },
};

export { serviceShinobis };
