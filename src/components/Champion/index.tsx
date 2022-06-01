import React, { useState } from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { IChampion } from '@src/@types/components';
import {
  Container,
  Grinalda,
  GrinaldaImage,
  ImageLoading,
  Player,
  PlayerImage,
  PlayerName,
} from './styles';

const Champion: React.FC<IChampion> = ({ ninja }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <Container>
      <Player>
        <View>
          {!isImageLoaded && <ImageLoading LinearGradient={LinearGradient} />}

          <PlayerImage
            source={{ uri: ninja.image }}
            isLoaded={isImageLoaded}
            onLoadEnd={() => setIsImageLoaded(true)}
          />

          <Grinalda>
            <GrinaldaImage source={require('@src/assets/grinalda.png')} />
          </Grinalda>
        </View>

        <PlayerName>{ninja.name}</PlayerName>
      </Player>
    </Container>
  );
};

export { Champion };
