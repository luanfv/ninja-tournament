import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from 'react';

import { INinja } from '../@types';
import { storageNinjas } from '../helpers';
import { serviceNinjas } from '../services';

type IStatus = 'success' | 'fail' | 'loading';

interface INinjas {
  ninjas: INinja[];
  status: IStatus;
  getById: (id: number) => INinja | undefined;
}

const NinjasContext = createContext<INinjas>({} as INinjas);

export const NinjasProvider: React.FC = ({ children }) => {
  const [ninjas, setNinjas] = useState<INinja[]>([]);
  const [status, setStatus] = useState<IStatus>('loading');

  const getById = useCallback(
    (id: number) => ninjas.find((ninja) => ninja.id === id),
    [ninjas],
  );

  const getNinjas = useCallback(async () => {
    try {
      const response = await serviceNinjas.getFirebase();

      if (!response) {
        throw Error();
      }

      await storageNinjas.set(response);

      setNinjas(response);
      setStatus('success');
    } catch {
      const storage = await storageNinjas.get();

      if (storage) {
        setNinjas(storage);
        setStatus('success');

        return;
      }

      setStatus('fail');
    }
  }, []);

  useEffect(() => {
    getNinjas();
  }, [getNinjas]);

  return (
    <NinjasContext.Provider value={{ ninjas, status, getById }}>
      {children}
    </NinjasContext.Provider>
  );
};

export function useNinjas(): INinjas {
  const context = useContext(NinjasContext);

  if (!context) {
    throw new Error('useNinjas must be used within an NinjasProvider');
  }

  return context;
}
