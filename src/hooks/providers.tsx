import React from 'react';
import { NinjasProvider } from './ninjas';

const Providers: React.FC = ({ children }) => {
  return <NinjasProvider>{children}</NinjasProvider>;
};

export { Providers };
