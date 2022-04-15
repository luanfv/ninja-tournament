import React from 'react';

import { INinja } from '../../@types';
import { Container, Details, Image, Name, Points, Text } from './styles';

interface ICard {
  ninja: INinja;
  isSelected?: boolean;
  onPress: () => void;
}

const Card: React.FC<ICard> = ({ ninja, isSelected = false, onPress }) => {
  return (
    <Container onPress={onPress} isSelected={isSelected} activeOpacity={0.8}>
      {ninja.image && (
        <Image source={{ uri: ninja.image }} isSelected={isSelected} />
      )}

      <Details>
        <Name isSelected={isSelected}>{ninja.name}</Name>

        <Points>
          <Text>Chakra: {ninja.chakra}</Text>
          <Text>Poder: {ninja.power}</Text>
          <Text>Técnica: {ninja.technique}</Text>
        </Points>
      </Details>
    </Container>
  );
};

export { Card };
