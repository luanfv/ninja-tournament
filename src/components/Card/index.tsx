import React from 'react';

import { IShinobi } from '../../@types';
import { Container, Details, Image, Name, Points, Text } from './styles';

interface ICard {
  shinobi: IShinobi;
  isSelected?: boolean;
  onPress: () => void;
}

const Card: React.FC<ICard> = ({ shinobi, isSelected = false, onPress }) => {
  return (
    <Container onPress={onPress} isSelected={isSelected} activeOpacity={0.8}>
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
