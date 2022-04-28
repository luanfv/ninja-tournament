import { IShinobi } from './shinobi';

interface IShinobiCompetitor extends IShinobi {
  winPercentage: number;
  winner: boolean;
}

interface IRoundResult {
  player1: IShinobiCompetitor;
  player2: IShinobiCompetitor;
  winner: IShinobiCompetitor;
}

interface IRound {
  onStartRound: (shinobis: IShinobi[]) => IRoundResult[];
  onStartAllRounds: (shinobis: IShinobi[]) => IRoundResult[][];
}

export { IShinobiCompetitor, IRoundResult, IRound };
