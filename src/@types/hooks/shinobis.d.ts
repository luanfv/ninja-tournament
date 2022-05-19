import { IShinobi } from '@src/@types/shinobi';

type IStatus = 'success' | 'fail' | 'loading';

interface IShinobis {
  shinobis: IShinobi[];
  status: IStatus;
  getById: (id: number) => IShinobi | undefined;
}

export { IShinobis, IStatus };
