import React from 'react';

import { IHeader } from '../../@types';
import { Container, Description, Text, Title } from './styles';

const Header: React.FC<IHeader> = ({
  title,
  description,
  isDescriptionError,
}) => {
  return (
    <>
      <Container>
        <Title>{title}</Title>
      </Container>

      {description && (
        <Description hasError={isDescriptionError}>
          <Text>{description}</Text>
        </Description>
      )}
    </>
  );
};

export { Header };
