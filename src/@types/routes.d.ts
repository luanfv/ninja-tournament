import { IRoundFinish } from './roundBattles';
import { IShinobi } from './shinobi';

type IRoutes = {
  home: undefined;
  battle: IShinobi[];
  battleResult: IRoundFinish[];
};

export { IRoutes };
