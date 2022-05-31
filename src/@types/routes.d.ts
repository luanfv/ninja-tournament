import { IRoundResult } from './round';
import { IShinobi } from './shinobi';

type IRoutes = {
  home: undefined;
  battle: IShinobi[];
  battleResult: IRoundResult[][];
};

export { IRoutes };
