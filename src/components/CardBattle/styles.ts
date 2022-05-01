import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import styled from 'styled-components/native';

interface IPlayer {
  winner?: boolean;
  isLoaded?: boolean;
}

const Container = styled.View`
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  margin-top: ${({ theme }) => theme.spacing}px;
  margin-bottom: ${({ theme }) => theme.spacing}px;
  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 40px;
  overflow: hidden;
`;

const Header = styled.View`
  padding: ${({ theme }) => `${theme.spacing / 2}px ${theme.spacing}px`};
  margin-bottom: ${({ theme }) => theme.spacing / 2}px;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

const HeaderText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;

const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing / 2}px ${theme.spacing}px`};
`;

const Player = styled.View`
  align-items: center;
  justify-content: center;
`;

const PlayerImage = styled.Image<IPlayer>`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  ${({ isLoaded }) => !isLoaded && 'width: 0px; height: 0px;'}
`;

const ImageLoading = styled(ShimmerPlaceholder)`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;
const PlayerName = styled.Text<IPlayer>`
  font-size: ${({ theme }) => theme.fonts.medium};
  color: ${({ winner, theme }) =>
    winner ? theme.colors.primary : theme.colors.gray};
  font-weight: bold;
`;

const PlayerPercent = styled.Text<IPlayer>`
  font-size: ${({ theme }) => theme.fonts.small};
  color: ${({ winner, theme }) =>
    winner ? theme.colors.primary : theme.colors.gray};
`;

const Versus = styled.Text`
  font-size: ${({ theme }) => theme.fonts.large};
  color: ${({ theme }) => theme.colors.primary};
`;

export {
  Container,
  Header,
  HeaderText,
  Content,
  Player,
  PlayerImage,
  ImageLoading,
  PlayerName,
  PlayerPercent,
  Versus,
};
