import React from 'react';

import { IHeader } from '../../@types';
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
        <DynamicComponent>{leftComponent}</DynamicComponent>
        <Title>{title}</Title>
        <DynamicComponent>{rightComponent}</DynamicComponent>
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
