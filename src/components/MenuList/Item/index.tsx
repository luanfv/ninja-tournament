import React, { useMemo } from 'react';

import { shadow } from '@src/settings/styles';
import { IMenuItem } from '@src/@types/components';
import { useLanguage } from '@src/hooks';
import { Container, Description, Icon, Message, Title } from './styles';

const MenuItem: React.FC<IMenuItem> = ({ isMain, type, onPress }) => {
  const { language } = useLanguage();

  const settings = useMemo(() => {
    switch (type) {
      case 'tournament':
        return {
          icon: 'ios-trophy',
          title: language.components.menuListItem.tournamentTitle,
          message: language.components.menuListItem.tournamentMessage,
        };

      case 'battle':
        return {
          icon: 'ios-people',
          title: language.components.menuListItem.duelTitle,
          message: language.components.menuListItem.duelMessage,
        };

      case 'historic':
        return {
          icon: 'ios-receipt',
          title: language.components.menuListItem.historicTitle,
          message: language.components.menuListItem.historicMessage,
        };

      default:
        return undefined;
    }
  }, [
    language.components.menuListItem.duelMessage,
    language.components.menuListItem.duelTitle,
    language.components.menuListItem.historicMessage,
    language.components.menuListItem.historicTitle,
    language.components.menuListItem.tournamentMessage,
    language.components.menuListItem.tournamentTitle,
    type,
  ]);

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

export { MenuItem };
