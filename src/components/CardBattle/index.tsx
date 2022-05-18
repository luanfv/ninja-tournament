import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { IRoundResult } from '@src/@types';
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
  ImageLoading,
} from './styles';
import { useLanguage } from '@src/hooks';

interface ICardBattle {
  competitor: IRoundResult;
}

const CardBattle: React.FC<ICardBattle> = ({ competitor }) => {
  const [isPlayer1ImageLoaded, setIsPlayer1ImageLoaded] = useState(false);
  const [isPlayer2ImageLoaded, setIsPlayer2ImageLoaded] = useState(false);

  const { language } = useLanguage();

  return (
    <Container>
      <Header>
        <HeaderText>
          {language.components.cardBattle.winner}: {competitor.winner.name}
        </HeaderText>
      </Header>

      <Content>
        <Player>
          {!isPlayer1ImageLoaded && (
            <ImageLoading LinearGradient={LinearGradient} />
          )}
          <PlayerImage
            source={{ uri: competitor.player1.image }}
            isLoaded={isPlayer1ImageLoaded}
            onLoadEnd={() => setIsPlayer1ImageLoaded(true)}
          />

          <PlayerName winner={competitor.player1.winner}>
            {competitor.player1.name}
          </PlayerName>

          <PlayerPercent winner={competitor.player1.winner}>
            {language.components.cardBattle.winner}:{' '}
            {competitor.player1.winPercentage.toFixed(2)}%
          </PlayerPercent>
        </Player>

        <Versus>VS</Versus>

        <Player>
          <>
            {!isPlayer2ImageLoaded && (
              <ImageLoading LinearGradient={LinearGradient} />
            )}

            <PlayerImage
              source={{ uri: competitor.player2.image }}
              isLoaded={isPlayer2ImageLoaded}
              onLoadEnd={() => setIsPlayer2ImageLoaded(true)}
            />
          </>

          <PlayerName winner={competitor.player2.winner}>
            {competitor.player2.name}
          </PlayerName>

          <PlayerPercent winner={competitor.player2.winner}>
            {language.components.cardBattle.winner}:{' '}
            {competitor.player2.winPercentage.toFixed(2)}%
          </PlayerPercent>
        </Player>
      </Content>
    </Container>
  );
};

export { CardBattle };
