import React, { createContext, useState, useContext, useCallback } from 'react';
import { useQuery } from 'react-query';

import { IShinobi } from '../@types';
import { serviceShinobis } from '../services';
import { useStorage } from './storage';

type IStatus = 'success' | 'fail' | 'loading';

interface IShinobis {
  shinobis: IShinobi[];
  status: IStatus;
  getById: (id: number) => IShinobi | undefined;
}

const ShinobisContext = createContext<IShinobis>({} as IShinobis);

const ShinobisProvider: React.FC = ({ children }) => {
  const storage = useStorage();

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

      await storage.setShinobis(response);

      setShinobis(response);
      setStatus('success');
    } catch {
      const response = await storage.getShinobis();

      if (response.length === 0) {
        setStatus('fail');

        return;
      }

      setShinobis(response);
      setStatus('success');
    }
  }, [storage]);

  useQuery('shinobis', getShinobis);

  return (
    <ShinobisContext.Provider value={{ shinobis, status, getById }}>
      {children}
    </ShinobisContext.Provider>
  );
};

const useShinobis = (): IShinobis => {
  const context = useContext(ShinobisContext);

  if (!context) {
    throw new Error('useShinobis must be used within an ShinobisProvider');
  }

  return context;
};

export { ShinobisProvider, useShinobis };
