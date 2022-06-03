import { INinja, IBattle } from '@src/@types';

interface IUseBattle {
  onStartBattle: (ninjas: INinja[], random?: number) => IBattle[];
  onStartTournament: (ninjas: INinja[], random?: number) => IBattle[][];
}

export { IUseBattle };
