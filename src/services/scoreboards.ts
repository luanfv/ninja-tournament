import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

import {
  IServiceScoreboardsGetResponse,
  IServiceScoreboardsLastResponse,
  IServiceScoreboardsPostRequest,
} from '@src/@types/services';

const serviceScoreboards = {
  get: async (
    start: IServiceScoreboardsLastResponse = undefined,
    limit = 20,
  ) => {
    const response = start
      ? await firestore()
          .collection('scoreboards')
          .where('userUid', '==', auth().currentUser?.uid)
          .orderBy('createdAt', 'desc')
          .startAfter(start)
          .limit(limit)
          .get()
      : await firestore()
          .collection('scoreboards')
          .where('userUid', '==', auth().currentUser?.uid)
          .orderBy('createdAt', 'desc')
          .limit(limit)
          .get();

    if (start === undefined && response.docs.length === 0) {
      return {
        data: [],
        lastDoc: undefined,
      };
    }

    const lastDoc = response.docs[response.docs.length - 1];

    if (lastDoc.id === start?.id) {
      throw Error('Has no more items to list.');
    }

    const scoreboards = response.docs.map((doc) => {
      const scoreboard = doc.data();

      return {
        id: doc.id,
        winner: scoreboard.winner.name,
        length: scoreboard.competitors.length,
        battles: JSON.parse(scoreboard.battles),
      };
    }) as IServiceScoreboardsGetResponse[];

    return {
      data: scoreboards,
      lastDoc: lastDoc,
    };
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

  getAll: async (
    start: IServiceScoreboardsLastResponse = undefined,
    limit = 20,
  ) => {
    const response = start
      ? await firestore()
          .collection('scoreboards')
          .orderBy('createdAt', 'desc')
          .startAfter(start)
          .limit(limit)
          .get()
      : await firestore()
          .collection('scoreboards')
          .orderBy('createdAt', 'desc')
          .limit(limit)
          .get();

    if (start === undefined && response.docs.length === 0) {
      return {
        data: [],
        lastDoc: undefined,
      };
    }

    const lastDoc = response.docs[response.docs.length - 1];

    if (lastDoc.id === start?.id) {
      throw Error('Has no more items to list.');
    }

    const scoreboards = response.docs.map((doc) => {
      const scoreboard = doc.data();

      return {
        id: doc.id,
        winner: scoreboard.winner.name,
        length: scoreboard.competitors.length,
        battles: JSON.parse(scoreboard.battles),
      };
    }) as IServiceScoreboardsGetResponse[];

    return {
      data: scoreboards,
      lastDoc: lastDoc,
    };
  },
};

export { serviceScoreboards };
