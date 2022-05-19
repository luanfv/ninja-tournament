import { IShinobi } from '@src/@types/shinobi';

interface IStorage {
  getShinobis: () => Promise<IShinobi[]>;
  setShinobis: (item: IShinobi[]) => Promise<boolean>;
}

export { IStorage };
