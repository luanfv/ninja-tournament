import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from 'react';

import { IShinobi } from '../@types';
import { storageShinobis } from '../helpers';
import { serviceShinobis } from '../services';

type IStatus = 'success' | 'fail' | 'loading';

interface IShinobis {
  shinobis: IShinobi[];
  status: IStatus;
  getById: (id: number) => IShinobi | undefined;
}

const ShinobisContext = createContext<IShinobis>({} as IShinobis);

export const ShinobisProvider: React.FC = ({ children }) => {
  const [shinobis, setShinobis] = useState<IShinobi[]>([]);
  const [status, setStatus] = useState<IStatus>('loading');

  const getById = useCallback(
    (id: number) => shinobis.find((shinobi) => shinobi.id === id),
    [shinobis],
  );

  const getShinobis = useCallback(async () => {
    try {
      const response = await serviceShinobis.getFirebase();

      if (!response) {
        throw Error();
      }

      await storageShinobis.set(response);

      setShinobis(response);
      setStatus('success');
    } catch {
      const storage = await storageShinobis.get();

      if (storage) {
        setShinobis(storage);
        setStatus('success');

        return;
      }

      setStatus('fail');
    }
  }, []);

  useEffect(() => {
    getShinobis();
  }, [getShinobis]);

  return (
    <ShinobisContext.Provider value={{ shinobis, status, getById }}>
      {children}
    </ShinobisContext.Provider>
  );
};

export function useShinobis(): IShinobis {
  const context = useContext(ShinobisContext);

  if (!context) {
    throw new Error('useShinobis must be used within an ShinobisProvider');
  }

  return context;
}
