import { IShinobi } from './shinobi';

interface IStorage {
  getShinobis: () => Promise<IShinobi[]>;
  setShinobis: (item: IShinobi[]) => Promise<boolean>;
}

export { IStorage };
