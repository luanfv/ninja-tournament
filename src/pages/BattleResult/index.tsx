import React, { useCallback } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { IRoutes } from '../../@types';
import { Footer, Header, Body, Separator } from '../../components';
import { useTheme } from 'styled-components/native';
import {
  Card,
  CardHeader,
  CardHeaderText,
  Champion,
  ChampionContainer,
  ChampionText,
  Content,
  Player,
  PlayerImage,
  PlayerName,
  PlayerPercent,
  Title,
} from './styles';

const BattleResult: React.FC = () => {
  const { params } = useRoute<RouteProp<IRoutes, 'battleResult'>>();
  const { goBack, reset } =
    useNavigation<NavigationProp<IRoutes, 'battleResult'>>();
  const { spacing, colors } = useTheme();

  const getTitleOfRound = useCallback((value, length) => {
    switch (value) {
      case 0:
        return 'Final';

      case 1:
        return 'Semifinal';

      default:
        return `${length - value}ª Rodada`;
    }
  }, []);

  return (
    <>
      <Header
        title="RESULTADO"
        leftComponent={
          <TouchableOpacity onPress={goBack} activeOpacity={0.8}>
            <Icon name="arrow-back" size={20} color="#fff" />
          </TouchableOpacity>
        }
      />

      <Body>
        <ScrollView
          contentContainerStyle={{
            padding: spacing,
          }}
        >
          <ChampionContainer>
            <Player>
              <PlayerImage
                source={{ uri: params[0][0].winner.image }}
                champion
              />
              <PlayerName winner>{params[0][0].winner.name}</PlayerName>
            </Player>
            <Champion>
              <Icon name="trophy-sharp" size={50} color={colors.gold} />
              <ChampionText>CAMPEÃ(O)</ChampionText>
            </Champion>
          </ChampionContainer>

          {params.map((round, index) => {
            return (
              <View key={String(index)}>
                <Separator />

                <Title>{getTitleOfRound(index, params.length)}</Title>
                {round.map((item, index2) => (
                  <Card key={String(index2)}>
                    <CardHeader>
                      <CardHeaderText>
                        VENCEDOR: {item.winner.name}
                      </CardHeaderText>
                    </CardHeader>

                    <Content>
                      <Player>
                        <PlayerImage source={{ uri: item.player1.image }} />
                        <PlayerName winner={item.player1.winner}>
                          {item.player1.name}
                        </PlayerName>
                        <PlayerPercent winner={item.player1.winner}>
                          chances de vitória:{' '}
                          {item.player1.winPercentage.toFixed(2)}%
                        </PlayerPercent>
                      </Player>

                      <Title>VS</Title>

                      <Player>
                        <PlayerImage source={{ uri: item.player2.image }} />
                        <PlayerName winner={item.player2.winner}>
                          {item.player2.name}
                        </PlayerName>
                        <PlayerPercent winner={item.player2.winner}>
                          chances de vitória:{' '}
                          {item.player2.winPercentage.toFixed(2)}%
                        </PlayerPercent>
                      </Player>
                    </Content>
                  </Card>
                ))}
              </View>
            );
          })}
        </ScrollView>
      </Body>

      <Footer
        text="Voltar para home"
        onPress={() => reset({ index: 1, routes: [{ name: 'home' }] })}
      />
    </>
  );
};

export { BattleResult };
