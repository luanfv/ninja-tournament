import { INinja, IBattle } from '@src/@types';

interface IUseBattle {
  onStartRound: (ninjas: INinja[], random?: number) => IBattle[];
  onStartAllRounds: (ninjas: INinja[], random?: number) => IBattle[][];
}

export { IUseBattle };
