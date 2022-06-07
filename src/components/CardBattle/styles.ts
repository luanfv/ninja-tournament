import { RFValue } from 'react-native-responsive-fontsize';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import styled, { css } from 'styled-components/native';

interface IPlayer {
  winner?: boolean;
  isLoaded?: boolean;
}

const Container = styled.View`
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.secondary};
  margin-top: ${({ theme }) => RFValue(theme.spacing)}px;
  margin-bottom: ${({ theme }) => RFValue(theme.spacing)}px;
  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 40px;
  overflow: hidden;
`;

const Header = styled.View`
  padding: ${({ theme }) =>
    css`
      ${RFValue(theme.spacing / 2)}px ${RFValue(theme.spacing)}px
    `};
  margin-bottom: ${({ theme }) => RFValue(theme.spacing / 2)}px;
  background-color: ${({ theme }) => theme.colors.secondary};
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
  padding: ${({ theme }) => css`
    ${RFValue(theme.spacing / 2)}px ${RFValue(theme.spacing)}px
  `};
`;

const Player = styled.View`
  align-items: center;
  justify-content: center;
`;

const PlayerImage = styled.Image<IPlayer>`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  ${({ isLoaded }) =>
    !isLoaded &&
    css`
      width: 0px;
      height: 0px;
    `}
`;

const ImageLoading = styled(ShimmerPlaceholder)`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;
const PlayerName = styled.Text<IPlayer>`
  font-size: ${({ theme }) => RFValue(theme.fonts.medium)}px;
  color: ${({ winner, theme }) =>
    winner ? theme.colors.secondary : theme.colors.gray};
  font-weight: bold;
`;

const PlayerPercent = styled.Text<IPlayer>`
  font-size: ${({ theme }) => RFValue(theme.fonts.small)}px;
  color: ${({ winner, theme }) =>
    winner ? theme.colors.secondary : theme.colors.gray};
`;

const Versus = styled.Text`
  font-size: ${({ theme }) => RFValue(theme.fonts.large)}px;
  color: ${({ theme }) => theme.colors.secondary};
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
