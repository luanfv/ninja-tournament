import React from 'react';

import { IButton } from '@src/@types';
import { Container, Text } from './styles';

const Button: React.FC<IButton> = ({ text, disabled = false, onPress }) => {
  return (
    <Container
      onPress={() => !disabled && onPress()}
      disabled={disabled}
      activeOpacity={disabled ? 1 : 0.8}
    >
      <Text>{text}</Text>
    </Container>
  );
};

export { Button };
