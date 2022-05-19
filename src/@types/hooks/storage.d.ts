import { IShinobi } from '@src/@types/shinobi';

interface IUseStorage {
  getShinobis: () => Promise<IShinobi[]>;
  setShinobis: (item: IShinobi[]) => Promise<boolean>;
}

export { IUseStorage };
