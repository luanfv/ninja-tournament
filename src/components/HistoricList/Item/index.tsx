import React, { useMemo } from 'react';

import { IHistoric } from '@src/@types/components';
import { useLanguage } from '@src/hooks';
import { Container, Description, Icon, Message, Title } from './styles';

const HistoricItem: React.FC<IHistoric> = ({ length, winner, onPress }) => {
  const { language } = useLanguage();

  const settings = useMemo(() => {
    if (length > 2) {
      return {
        icon: 'ios-trophy',
        title: language.components.historicListItem.tournamentTitle,
        message: `${winner} ${language.components.historicListItem.tournamentMessage}`,
      };
    }

    if (length === 2) {
      return {
        icon: 'ios-people',
        title: language.components.historicListItem.duelTitle,
        message: `${winner} ${language.components.historicListItem.duelMessage}`,
      };
    }

    return undefined;
  }, [
    language.components.historicListItem.duelMessage,
    language.components.historicListItem.duelTitle,
    language.components.historicListItem.tournamentMessage,
    language.components.historicListItem.tournamentTitle,
    length,
    winner,
  ]);

  return (
    <Container activeOpacity={0.8} onPress={onPress}>
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

export { HistoricItem };
