import React, { createContext, useContext } from 'react';

import { IShinobi } from '../@types';
import { useShinobis } from '../hooks';

type IStatus = 'success' | 'fail' | 'loading';

interface IShinobis {
  shinobis: IShinobi[];
  status: IStatus;
  getById: (id: number) => IShinobi | undefined;
}

const ShinobisContext = createContext<IShinobis>({} as IShinobis);

const ShinobisProvider: React.FC = ({ children }) => {
  const shinobis = useShinobis();

  return (
    <ShinobisContext.Provider value={{ ...shinobis }}>
      {children}
    </ShinobisContext.Provider>
  );
};

const useShinobisContext = (): IShinobis => {
  const context = useContext(ShinobisContext);

  if (!context) {
    throw new Error('useShinobis must be used within an ShinobisProvider');
  }

  return context;
};

export { ShinobisProvider, useShinobisContext };
