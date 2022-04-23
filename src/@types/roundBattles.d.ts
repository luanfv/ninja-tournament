import { IShinobi } from './shinobi';

interface IShinobiCompetitor extends IShinobi {
  winPercentage: number;
}

interface IOnStartRound {
  players1: IShinobiCompetitor[];
  players2: IShinobiCompetitor[];
  winners: IShinobiCompetitor[];
  losers: IShinobiCompetitor[];
}

interface IRound {
  onStartRound: (shinobis: IShinobi[]) => IOnStartRound;
  onStartAllRounds: (shinobis: IShinobi[]) => IOnStartRound[];
}

export { IRound, IOnStartRound, IShinobiCompetitor };
