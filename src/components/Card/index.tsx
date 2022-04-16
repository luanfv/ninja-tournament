import React from 'react';

import { ICard } from '../../@types';
import { Container, Details, Image, Name, Points, Text } from './styles';

const Card: React.FC<ICard> = ({
  shinobi,
  isSelected = false,
  disabled,
  margin,
  onPress,
  onLongPress,
}) => {
  return (
    <Container
      onPress={onPress}
      onLongPress={onLongPress}
      isSelected={isSelected}
      activeOpacity={0.8}
      disabled={disabled}
      margin={margin}
    >
      {shinobi.image && (
        <Image source={{ uri: shinobi.image }} isSelected={isSelected} />
      )}

      <Details>
        <Name isSelected={isSelected}>{shinobi.name}</Name>

        <Points>
          <Text>Chakra: {shinobi.chakra}</Text>
          <Text>Poder: {shinobi.power}</Text>
          <Text>Técnica: {shinobi.technique}</Text>
        </Points>
      </Details>
    </Container>
  );
};

export { Card };
