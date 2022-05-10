import { IShinobi } from './shinobi';

interface IStorage {
  getShinobis: () => Promise<IShinobi[] | undefined>;
  setShinobis: (item: IShinobi[]) => Promise<void>;
}

export { IStorage };
