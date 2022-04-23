import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { IRoutes } from '../../@types';
import { Footer, Header, Body, Separator } from '../../components';
import { FlatList } from 'react-native-gesture-handler';

const BattleResult: React.FC = () => {
  const { params } = useRoute<RouteProp<IRoutes, 'battleResult'>>();
  const { goBack, reset } =
    useNavigation<NavigationProp<IRoutes, 'battleResult'>>();

  console.log(params);

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
        <FlatList
          data={params}
          keyExtractor={(_, index) => String(index)}
          renderItem={({ item }) => (
            <View>
              <Text>
                {item.player1.name} ({item.player1.winPercentage.toFixed(2)}%)
                vs {item.player2.name} ({item.player2.winPercentage.toFixed(2)}
                %)
              </Text>

              <Text>VENCEDOR: {item.winner.name}</Text>
            </View>
          )}
          ItemSeparatorComponent={() => <Separator />}
        />
      </Body>

      <Footer
        text="Voltar para home"
        onPress={() => reset({ index: 1, routes: [{ name: 'home' }] })}
      />
    </>
  );
};

export { BattleResult };
