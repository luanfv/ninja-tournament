import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import styled from 'styled-components/native';

interface IPlayerImage {
  isLoaded?: boolean;
}

const Container = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing * 2}px;
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
  font-size: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;

const Trophy = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing / 2}px;
`;

const TrophyText = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fonts.large};
  font-weight: bold;
`;

export {
  Container,
  Player,
  PlayerImage,
  PlayerName,
  Trophy,
  TrophyText,
  ImageLoading,
};
