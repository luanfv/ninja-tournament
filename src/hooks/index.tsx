import React from 'react';
import { NinjasProvider } from './ninjas';

const AppProvider: React.FC = ({ children }) => {
  return <NinjasProvider>{children}</NinjasProvider>;
};

export default AppProvider;
