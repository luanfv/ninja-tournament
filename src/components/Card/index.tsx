import React from 'react';

import { ICard } from '../../@types';
import {
  Container,
  Details,
  Header,
  Image,
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
      </Row>
    </Container>
  );
};

export { Card };
