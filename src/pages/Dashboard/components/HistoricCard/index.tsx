import React, { useMemo } from 'react';

import { Container, Description, Icon, Message, Title } from './styles';

interface IHistoricCard {
  length: number;
  winner: string;
}

const HistoricCard: React.FC<IHistoricCard> = ({ length, winner }) => {
  const settings = useMemo(() => {
    if (length > 2) {
      return {
        icon: 'ios-trophy',
        title: 'Torneio',
        message: `${winner} é o vencedor do torneio que possuia ${length} competidores.`,
      };
    }

    if (length === 2) {
      return {
        icon: 'ios-people',
        title: 'Duelo',
        message: `${winner} é o vencedor do duelo.`,
      };
    }

    return undefined;
  }, [length, winner]);

  return (
    <Container activeOpacity={0.8}>
      {settings && (
        <>
          <Icon name={settings.icon} />

          <Description>
            <Title>{settings.title}</Title>

            <Message>{settings.message}</Message>
          </Description>
        </>
      )}
    </Container>
  );
};

export { HistoricCard };
