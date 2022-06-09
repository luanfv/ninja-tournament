import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

interface IServiceScoreboardsGetResponse {
  id: string;
  winner: string;
  length: number;
  battles: IBattle[][];
}

interface IServiceScoreboardsPostRequest {
  competitors: INinjaCompetitor[];
  winner: INinjaCompetitor;
  battles: IBattle[][];
}

type IServiceScoreboardsLastResponse =
  | FirebaseFirestoreTypes.DocumentData
  | undefined;

export {
  IServiceScoreboardsGetResponse,
  IServiceScoreboardsPostRequest,
  IServiceScoreboardsLastResponse,
};
