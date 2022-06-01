import { INinja } from './ninja';

interface INinjaCompetitor extends INinja {
  winPercentage: number;
  winner: boolean;
}

interface IBattle {
  player1: INinjaCompetitor;
  player2: INinjaCompetitor;
  winner: INinjaCompetitor;
}

export { IBattle, INinjaCompetitor };
