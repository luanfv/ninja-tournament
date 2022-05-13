import React from 'react';

import { IHeader } from '@src/@types';
import {
  Container,
  Description,
  DynamicComponent,
  Text,
  Title,
} from './styles';

const Header: React.FC<IHeader> = ({
  title,
  description,
  isDescriptionError,
  leftComponent,
  rightComponent,
}) => {
  return (
    <>
      <Container>
        <DynamicComponent aligm="left">{leftComponent}</DynamicComponent>
        <Title>{title}</Title>
        <DynamicComponent aligm="right">{rightComponent}</DynamicComponent>
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
