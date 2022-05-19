import { IShinobi, IRoundResult } from '@src/@types';

interface IUseRound {
  onStartRound: (shinobis: IShinobi[], random?: number) => IRoundResult[];
  onStartAllRounds: (shinobis: IShinobi[], random?: number) => IRoundResult[][];
}

export { IUseRound };
