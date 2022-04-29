import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

import { Container } from './styles';

const Loading: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <ActivityIndicator color={colors.primary} size="large" />
    </Container>
  );
};

export { Loading };
