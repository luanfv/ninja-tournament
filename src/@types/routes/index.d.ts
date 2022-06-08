import { INinja, IBattle } from '@src/@types';

type IRoutes = {
  dashboard: undefined;
  competitors: { length: 2 | 8 };
  selectedCompetitors: INinja[];
  scoreboard: IBattle[][];
  historic: undefined;
};

export { IRoutes };
