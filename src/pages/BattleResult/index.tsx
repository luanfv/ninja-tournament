import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { IRoutes } from '../../@types';
import { Footer, Header, Body, Separator } from '../../components';
import {
  Percentage,
  PercentageValue,
  Player,
  PlayerImage,
  PlayerName,
  Row,
} from './styles';
import { useTheme } from 'styled-components/native';

const BattleResult: React.FC = () => {
  const { params } = useRoute<RouteProp<IRoutes, 'battleResult'>>();
  const { goBack, reset } =
    useNavigation<NavigationProp<IRoutes, 'battleResult'>>();
  const { spacing } = useTheme();

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
          <Player>
            <PlayerImage source={{ uri: params[0][0].winner.image }} />
            <PlayerName>{params[0][0].winner.name}</PlayerName>
          </Player>

          {params.map((round, index) => (
            <View key={String(index)}>
              <Separator />

              <Text>Round {params.length - index}</Text>
              {round.map((item, index2) => (
                <Row key={String(index2)}>
                  <Player>
                    <PlayerImage
                      source={{ uri: item.player1.image }}
                      loser={!item.player1.winner}
                    />
                    <Text>{item.player1.name}</Text>
                  </Player>

                  <Percentage>
                    <PercentageValue
                      winner={item.player1.winner}
                      value={item.player1.winPercentage}
                    />
                    <PercentageValue
                      winner={item.player2.winner}
                      value={item.player2.winPercentage}
                    />
                  </Percentage>

                  <Player>
                    <PlayerImage
                      source={{ uri: item.player2.image }}
                      loser={!item.player2.winner}
                    />
                    <Text>{item.player2.name}</Text>
                  </Player>
                </Row>
              ))}
            </View>
          ))}
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
