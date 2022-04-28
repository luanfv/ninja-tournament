import styled from 'styled-components/native';

interface IPlayer {
  winner?: boolean;
  champion?: boolean;
}

const Card = styled.View`
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.black};
  border-radius: 4px;
  margin-top: ${({ theme }) => theme.spacing / 2}px;
  margin-bottom: ${({ theme }) => theme.spacing / 2}px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const CardHeader = styled.View`
  padding: ${({ theme }) => theme.spacing / 2}px;
  margin-bottom: ${({ theme }) => theme.spacing / 2}px;
  background-color: ${({ theme }) => theme.colors.black};
`;

const CardHeaderText = styled.Text`
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

  ${({ champion }) =>
    champion &&
    `
    width: 120px;
    height: 120px;
    border-radius: 60px;
  `}
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

const Title = styled.Text`
  font-size: ${({ theme }) => theme.fonts.large};
  color: ${({ theme }) => theme.colors.black};
`;

const ChampionContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing * 2}px;
`;

const Champion = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing / 2}px;
`;

const ChampionText = styled.Text`
  color: ${({ theme }) => theme.colors.gold};
  font-size: ${({ theme }) => theme.fonts.large};
`;

export {
  Card,
  CardHeader,
  CardHeaderText,
  Content,
  Player,
  PlayerImage,
  PlayerName,
  PlayerPercent,
  Title,
  Champion,
  ChampionContainer,
  ChampionText,
};
