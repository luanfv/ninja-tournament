import React from 'react';
import { useTheme } from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';

import { IShinobi } from '../../@types';
import {
  Container,
  Player,
  PlayerImage,
  PlayerName,
  Trophy,
  TrophyText,
} from './styles';

interface IChampion {
  shinobi: IShinobi;
}

const Champion: React.FC<IChampion> = ({ shinobi }) => {
  const { colors } = useTheme();

  return (
    <Container>
      <Player>
        <PlayerImage source={{ uri: shinobi.image }} />
        <PlayerName>{shinobi.name}</PlayerName>
      </Player>
      <Trophy>
        <Icon name="trophy-sharp" size={50} color={colors.secondary} />
        <TrophyText>CAMPEÃ(O)</TrophyText>
      </Trophy>
    </Container>
  );
};

export { Champion };
