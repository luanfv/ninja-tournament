import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

import {
  IServiceScoreboardsGetResponse,
  IServiceScoreboardsPostRequest,
} from '@src/@types/services';

const serviceScoreboards = {
  get: async () => {
    const response = await firestore()
      .collection('scoreboards')
      .where('userUid', '==', auth().currentUser?.uid)
      .orderBy('createdAt', 'desc')
      .get();

    const scoreboards = response.docs.map((doc) => {
      const scoreboard = doc.data();

      return {
        id: doc.id,
        winner: scoreboard.winner.name,
        length: scoreboard.competitors.length,
        battles: JSON.parse(scoreboard.battles),
      };
    }) as IServiceScoreboardsGetResponse[];

    return scoreboards;
  },

  post: async (data: IServiceScoreboardsPostRequest) => {
    const response = await firestore()
      .collection('scoreboards')
      .add({
        ...data,
        userUid: auth().currentUser?.uid,
        createdAt: firestore.FieldValue.serverTimestamp(),
        battles: JSON.stringify(data.battles),
      });

    return response;
  },

  getAll: async () => {
    const response = await firestore()
      .collection('scoreboards')
      .orderBy('createdAt', 'desc')
      .get();

    const scoreboards = response.docs.map((doc) => {
      const scoreboard = doc.data();

      return {
        id: doc.id,
        winner: scoreboard.winner.name,
        length: scoreboard.competitors.length,
        battles: JSON.parse(scoreboard.battles),
      };
    }) as IServiceScoreboardsGetResponse[];

    return scoreboards;
  },
};

export { serviceScoreboards };
