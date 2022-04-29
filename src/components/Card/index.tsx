import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { ICard } from '../../@types';
import {
  Container,
  Details,
  Header,
  Image,
  ImageLoading,
  Name,
  Points,
  Row,
  Text,
} from './styles';

const Card: React.FC<ICard> = ({
  shinobi,
  isSelected = false,
  disabled,
  margin,
  position,
  onPress,
  onLongPress,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <Container
      onPress={onPress}
      onLongPress={onLongPress}
      isSelected={isSelected}
      activeOpacity={0.8}
      disabled={disabled}
      margin={margin}
    >
      {position && (
        <Header>
          <Text color="white">{position}</Text>
        </Header>
      )}

      <Row>
        {!isImageLoaded && <ImageLoading LinearGradient={LinearGradient} />}
        <Image
          source={{ uri: shinobi.image }}
          isSelected={isSelected}
          isLoaded={isImageLoaded}
          onLoadEnd={() => setIsImageLoaded(true)}
        />

        <Details>
          <Name isSelected={isSelected}>{shinobi.name}</Name>

          <Points>
            <Text>Chakra: {shinobi.chakra}</Text>
            <Text>Poder: {shinobi.power}</Text>
            <Text>Técnica: {shinobi.technique}</Text>
          </Points>
        </Details>
      </Row>
    </Container>
  );
};

export { Card };
