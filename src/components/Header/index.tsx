import React from 'react';

import { IHeader } from '@src/@types/components';
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
        <Title>{title.toUpperCase()}</Title>
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
