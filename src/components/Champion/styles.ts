import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import styled from 'styled-components/native';

interface IPlayerImage {
  isLoaded?: boolean;
}

const Container = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing * 2}px;
  flex-direction: row;
`;

const Player = styled.View`
  align-items: center;
  justify-content: center;
`;

const PlayerImage = styled.Image<IPlayerImage>`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  ${({ isLoaded }) => !isLoaded && 'width: 0px; height: 0px;'}
`;

const ImageLoading = styled(ShimmerPlaceholder)`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

const PlayerName = styled.Text`
  font-size: ${({ theme }) => theme.fonts.large};
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  margin-top: ${({ theme }) => theme.spacing}px;
`;

const Grinalda = styled.View`
  position: absolute;
  bottom: -45px;
  right: -35px;
`;

const GrinaldaImage = styled.Image`
  width: 190px;
  height: 190px;
`;

export {
  Container,
  Grinalda,
  GrinaldaImage,
  ImageLoading,
  Player,
  PlayerImage,
  PlayerName,
};
