import { IShinobi } from './shinobi';

interface IOnStartRound {
  players1: IShinobi[];
  players2: IShinobi[];
  winners: IShinobi[];
  losers: IShinobi[];
}

interface IRound {
  onStartRound: (shinobis: IShinobi[]) => IOnStartRound;
  onStartAllRounds: (shinobis: IShinobi[]) => IOnStartRound[];
}

export { IRound, IOnStartRound };
