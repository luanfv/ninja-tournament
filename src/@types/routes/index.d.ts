import { INinja, IBattle } from '@src/@types';

type IRoutes = {
  dashboard: undefined;
  competitors: undefined;
  selectedCompetitors: INinja[];
  scoreboard: IBattle[][];
};

export { IRoutes };
