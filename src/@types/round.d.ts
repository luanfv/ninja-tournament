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

export { IRoundResult, IShinobiCompetitor };
