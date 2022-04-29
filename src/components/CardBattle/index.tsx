import React from 'react';
import { IRoundResult } from '../../@types';
import {
  Container,
  Header,
  HeaderText,
  Content,
  Player,
  PlayerImage,
  PlayerName,
  PlayerPercent,
  Versus,
} from './styles';

interface ICardBattle {
  competitor: IRoundResult;
}

const CardBattle: React.FC<ICardBattle> = ({ competitor }) => {
  return (
    <Container>
      <Header>
        <HeaderText>VENCEDOR: {competitor.winner.name}</HeaderText>
      </Header>

      <Content>
        <Player>
          <PlayerImage source={{ uri: competitor.player1.image }} />
          <PlayerName winner={competitor.player1.winner}>
            {competitor.player1.name}
          </PlayerName>
          <PlayerPercent winner={competitor.player1.winner}>
            chances de vitória: {competitor.player1.winPercentage.toFixed(2)}%
          </PlayerPercent>
        </Player>

        <Versus>VS</Versus>

        <Player>
          <PlayerImage source={{ uri: competitor.player2.image }} />
          <PlayerName winner={competitor.player2.winner}>
            {competitor.player2.name}
          </PlayerName>
          <PlayerPercent winner={competitor.player2.winner}>
            chances de vitória: {competitor.player2.winPercentage.toFixed(2)}%
          </PlayerPercent>
        </Player>
      </Content>
    </Container>
  );
};

export { CardBattle };
