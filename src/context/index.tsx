import React from 'react';
import { ShinobisProvider, useShinobisContext } from './shinobis';

const Providers: React.FC = ({ children }) => {
  return <ShinobisProvider>{children}</ShinobisProvider>;
};

export { Providers, useShinobisContext };
