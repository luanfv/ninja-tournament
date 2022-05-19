import { IShinobi } from '@src/@types/shinobi';

type IStatus = 'success' | 'fail' | 'loading';

interface IUseShinobis {
  shinobis: IShinobi[];
  status: IStatus;
  getById: (id: number) => IShinobi | undefined;
}

export { IUseShinobis, IStatus };
