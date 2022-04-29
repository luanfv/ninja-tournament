import styled from 'styled-components/native';

interface IPlayer {
  winner?: boolean;
}

const Container = styled.View`
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.black};
  border-radius: 4px;
  margin-top: ${({ theme }) => theme.spacing / 2}px;
  margin-bottom: ${({ theme }) => theme.spacing / 2}px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Header = styled.View`
  padding: ${({ theme }) => theme.spacing / 2}px;
  margin-bottom: ${({ theme }) => theme.spacing / 2}px;
  background-color: ${({ theme }) => theme.colors.black};
`;

const HeaderText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
`;

const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`;

const Player = styled.View`
  align-items: center;
  justify-content: center;
`;

const PlayerImage = styled.Image<IPlayer>`
  width: 80px;
  height: 80px;
  border-radius: 2px;
`;

const PlayerName = styled.Text<IPlayer>`
  font-size: ${({ theme }) => theme.fonts.medium};
  color: ${({ winner, theme }) =>
    winner ? theme.colors.black : theme.colors.grayDark};
`;

const PlayerPercent = styled.Text<IPlayer>`
  font-size: ${({ theme }) => theme.fonts.small};
  color: ${({ winner, theme }) =>
    winner ? theme.colors.black : theme.colors.grayDark};
`;

const Versus = styled.Text`
  font-size: ${({ theme }) => theme.fonts.large};
  color: ${({ theme }) => theme.colors.black};
`;

export {
  Container,
  Header,
  HeaderText,
  Content,
  Player,
  PlayerImage,
  PlayerName,
  PlayerPercent,
  Versus,
};
