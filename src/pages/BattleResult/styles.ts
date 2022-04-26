import styled from 'styled-components/native';

interface IPlayerImage {
  loser?: boolean;
}

interface IPercentageValue {
  winner: boolean;
  value: number;
}

const Player = styled.View`
  align-items: center;
  justify-content: center;
  height: 120px;
`;

const PlayerImage = styled.Image<IPlayerImage>`
  width: 80px;
  height: 80px;
  ${({ loser, theme }) =>
    loser &&
    `
    opacity: 0.6;
    background-color: ${theme.colors.red};
  `}
`;

const PlayerName = styled.Text``;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
`;

const Percentage = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const PercentageValue = styled.View<IPercentageValue>`
  height: 20px;
  background-color: ${({ winner, theme }) =>
    winner ? theme.colors.green : theme.colors.red};
  width: ${({ value }) => value}%;
`;

export { Percentage, PercentageValue, Player, PlayerImage, PlayerName, Row };
