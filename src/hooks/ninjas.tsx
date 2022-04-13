import React, { createContext, useState, useContext, useEffect } from 'react';

import { INinja } from '../@types';
import { storageNinjas } from '../helpers/storage';
import { firebaseNinjas } from '../services/firebase';

type IStatus = 'success' | 'fail' | 'loading';

interface INinjas {
  ninjas: INinja[];
  status: IStatus;
}

const NinjasContext = createContext<INinjas>({} as INinjas);

export const NinjasProvider: React.FC = ({ children }) => {
  const [ninjas, setNinjas] = useState<INinja[]>([]);
  const [status, setStatus] = useState<IStatus>('loading');

  useEffect(() => {
    const getNinjas = async () => {
      try {
        const response = await firebaseNinjas.get();

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
        }

        setStatus('fail');
      }
    };

    getNinjas();
  }, []);

  return (
    <NinjasContext.Provider value={{ ninjas, status }}>
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
