import React, { useMemo, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';

import { ICard } from '../../@types';
import {
  Container,
  Details,
  Image,
  ImageLoading,
  Name,
  Point,
  Points,
  Row,
  Text,
} from './styles';

const Card: React.FC<ICard> = ({
  shinobi,
  isSelected = false,
  disabled,
  margin,
  onPress,
  onLongPress,
}) => {
  const { colors } = useTheme();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const color = useMemo(
    () => (isSelected ? colors.secondary : colors.primary),
    [colors.primary, colors.secondary, isSelected],
  );

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <Container
        isSelected={isSelected}
        margin={margin}
        colors={[color, color, colors.white]}
      >
        <Row>
          <>
            {!isImageLoaded && <ImageLoading LinearGradient={LinearGradient} />}

            <Image
              source={{ uri: shinobi.image }}
              isSelected={isSelected}
              isLoaded={isImageLoaded}
              onLoadEnd={() => setIsImageLoaded(true)}
            />
          </>

          <Details>
            <Name>{shinobi.name}</Name>

            <Points>
              <Point>
                <Icon name="md-fitness" size={20} color={colors.white} />
                <Text>{shinobi.power}</Text>
              </Point>

              <Point>
                <Icon name="md-flame" size={20} color={colors.white} />
                <Text>{shinobi.technique}</Text>
              </Point>

              <Point>
                <Icon name="md-flash" size={20} color={colors.white} />
                <Text>{shinobi.chakra}</Text>
              </Point>
            </Points>
          </Details>
        </Row>
      </Container>
    </TouchableOpacity>
  );
};

export { Card };
