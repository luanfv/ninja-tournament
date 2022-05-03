import React from 'react';
import { ShinobisProvider } from './shinobis';

const Providers: React.FC = ({ children }) => {
  return <ShinobisProvider>{children}</ShinobisProvider>;
};

export { Providers };
