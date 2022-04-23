import { IShinobi } from './shinobi';

interface IShinobiCompetitor extends IShinobi {
  winPercentage: number;
}

interface IRoundResult {
  players1: IShinobiCompetitor[];
  players2: IShinobiCompetitor[];
  winners: IShinobiCompetitor[];
  losers: IShinobiCompetitor[];
}

interface IRoundFinish {
  player1: IShinobiCompetitor;
  player2: IShinobiCompetitor;
  winner: IShinobiCompetitor;
  loser: IShinobiCompetitor;
}

interface IRound {
  onStartRound: (shinobis: IShinobi[]) => IRoundResult;
  onStartAllRounds: (shinobis: IShinobi[]) => IRoundFinish[];
}

export { IShinobiCompetitor, IRoundResult, IRoundFinish, IRound };
