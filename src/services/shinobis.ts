import { collection, getDocs } from 'firebase/firestore/lite';

import { firebase } from '../settings';
import { IShinobi } from '../@types/shinobi';
import { sortObjects } from '../helpers';

const serviceShinobis = {
  getFirebase: async (): Promise<IShinobi[]> => {
    const data = collection(firebase, 'ninjas');
    const snapshot = await getDocs(data);
    const shinobis = snapshot.docs.map((doc) => doc.data()) as IShinobi[];

    return sortObjects(shinobis, 'id');
  },
};

export { serviceShinobis };
