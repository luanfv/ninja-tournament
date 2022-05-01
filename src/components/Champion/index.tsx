import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import { IShinobi } from '../../@types';
import {
  Container,
  ImageLoading,
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
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <Container>
      <Player>
        {!isImageLoaded && <ImageLoading LinearGradient={LinearGradient} />}
        <PlayerImage
          source={{ uri: shinobi.image }}
          isLoaded={isImageLoaded}
          onLoadEnd={() => setIsImageLoaded(true)}
        />

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
