import styled from 'styled-components/native';

const Container = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing * 2}px;
`;

const Player = styled.View`
  align-items: center;
  justify-content: center;
`;

const PlayerImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

const PlayerName = styled.Text`
  font-size: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.black};
`;

const Trophy = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing / 2}px;
`;

const TrophyText = styled.Text`
  color: ${({ theme }) => theme.colors.gold};
  font-size: ${({ theme }) => theme.fonts.large};
`;

export { Container, Player, PlayerImage, PlayerName, Trophy, TrophyText };
