import { INinja, IBattle } from '@src/@types';

type IRoutes = {
  dashboard: undefined;
  home: undefined;
  tournament: INinja[];
  tournamentScore: IBattle[][];
};

export { IRoutes };
