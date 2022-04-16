import React from 'react';

import { IFooter } from '../../@types';
import { Button } from '../Button';
import { Container } from './styles';

const Footer: React.FC<IFooter> = ({ ...rest }) => {
  return (
    <Container>
      <Button {...rest} />
    </Container>
  );
};

export { Footer };
