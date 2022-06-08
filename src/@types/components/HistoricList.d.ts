import { IStatusLoading } from '@src/@types/statusLoading';

interface IHistoric {
  id: string;
  winner: string;
  length: number;
}

interface IHistoricList {
  items: IHistoric[];
  status: IStatusLoading;
}

export { IHistoricList, IHistoric };
