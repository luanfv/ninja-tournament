import React, { useState } from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { IShinobi } from '@src/@types';
import {
  Container,
  Grinalda,
  GrinaldaImage,
  ImageLoading,
  Player,
  PlayerImage,
  PlayerName,
} from './styles';

interface IChampion {
  shinobi: IShinobi;
}

const Champion: React.FC<IChampion> = ({ shinobi }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <Container>
      <Player>
        <View>
          {!isImageLoaded && <ImageLoading LinearGradient={LinearGradient} />}

          <PlayerImage
            source={{ uri: shinobi.image }}
            isLoaded={isImageLoaded}
            onLoadEnd={() => setIsImageLoaded(true)}
          />

          <Grinalda>
            <GrinaldaImage source={require('@src/assets/grinalda.png')} />
          </Grinalda>
        </View>

        <PlayerName>{shinobi.name}</PlayerName>
      </Player>
    </Container>
  );
};

export { Champion };
