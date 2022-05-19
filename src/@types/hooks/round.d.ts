import { IShinobi, IRoundResult } from '@src/@types';

interface IRound {
  onStartRound: (shinobis: IShinobi[], random?: number) => IRoundResult[];
  onStartAllRounds: (shinobis: IShinobi[], random?: number) => IRoundResult[][];
}

export { IRound };
