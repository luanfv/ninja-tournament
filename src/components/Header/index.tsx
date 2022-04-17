import React from 'react';
import { View } from 'react-native';

import { IHeader } from '../../@types';
import { Container, Description, Text, Title } from './styles';

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
        <View>{leftComponent}</View>
        <Title>{title}</Title>
        <View>{rightComponent}</View>
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
