import React from 'react';

import { Container, Text } from './styles';

interface IButton {
  text: string;
  disabled?: boolean;
  onPress: () => void;
}

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
