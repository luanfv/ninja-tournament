import React, { useMemo } from 'react';

import { shadow } from '@src/settings/styles';
import { Container, Description, Icon, Message, Title } from './styles';

interface ICard {
  isMain?: boolean;
  type: 'tournament' | 'battle' | 'historic';
  onPress: () => void;
}

const Card: React.FC<ICard> = ({ isMain, type, onPress }) => {
  const settings = useMemo(() => {
    switch (type) {
      case 'tournament':
        return {
          icon: 'ios-trophy',
          title: 'Realizar torneio',
          message:
            'Inicie um torneio com 8 ninjas diferentes, o vencedor é o ninja que vencer as 3 fases do torneio.',
        };

      case 'battle':
        return {
          icon: 'ios-people',
          title: 'Realizar duelo',
          message:
            'Inicie um duelo entre 2 ninjas diferentes, o vencedor é definido através do resultado da probabilidade.',
        };

      case 'historic':
        return {
          icon: 'ios-receipt',
          title: 'Histórico global',
          message: 'Visualize o histórico de torneios de outros usuários.',
        };

      default:
        return undefined;
    }
  }, [type]);

  return (
    <Container
      isMain={isMain}
      style={shadow}
      activeOpacity={0.95}
      onPress={onPress}
    >
      {settings && (
        <>
          <Icon name={settings.icon} isMain={isMain} />

          <Description>
            <Title isMain={isMain}>{settings.title}</Title>

            <Message isMain={isMain}>{settings.message}</Message>
          </Description>
        </>
      )}
    </Container>
  );
};

export { Card };
