import React from 'react';

import { INinja } from '../../@types';
import { Container, Details, Image, Name, Points, Text } from './styles';

interface ICard {
  ninja: INinja;
  onPress: () => void;
}

const Card: React.FC<ICard> = ({ ninja, onPress }) => {
  return (
    <Container onPress={onPress}>
      {ninja.image && <Image source={{ uri: ninja.image }} />}

      <Details>
        <Name>{ninja.name}</Name>

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
