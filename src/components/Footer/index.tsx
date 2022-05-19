import React from 'react';

import { IFooter } from '@src/@types/components';
import { Button } from '@src/components';
import { Container } from './styles';

const Footer: React.FC<IFooter> = ({ ...rest }) => {
  return (
    <Container>
      <Button {...rest} />
    </Container>
  );
};

export { Footer };
