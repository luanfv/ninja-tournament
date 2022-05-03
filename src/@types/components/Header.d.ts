import { ReactNode } from 'react';

interface IHeader {
  title: string;
  description?: string;
  isDescriptionError?: boolean;
  leftComponent?: ReactNode;
  rightComponent?: ReactNode;
}

export { IHeader };
