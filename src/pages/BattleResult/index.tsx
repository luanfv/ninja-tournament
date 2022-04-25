import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
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
          ListHeaderComponent={() => (
            <View style={{ alignItems: 'center', justifyContent: 'center', height: 120 }}>
              <Image
                source={{ uri: params[0].winner.image }}
                style={{ width: 80, height: 80 }}
              />
              <Text>{params[0].winner.name}</Text>
            </View>
          )}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'center',
              }}
            >
              <View style={{ alignItems: 'center', justifyContent: 'center', height: 120 }}>
                <Image
                  source={{ uri: item.player1.image }}
                  style={{ width: 80, height: 80 }}
                />
                <Text>{item.player1.name}</Text>
              </View>

              <View style={{ alignItems: 'center', justifyContent: 'center', height: 120 }}>
                <Image
                  source={{ uri: item.player2.image }}
                  style={{ width: 80, height: 80 }}
                />
                <Text>{item.player2.name}</Text>
              </View>

              <View
                style={{
                  position: 'absolute',
                  height: 120,
                  width: `${item.player1.winPercentage}%`,
                  zIndex: -1,
                  justifyContent: 'center',
                  alignContent: 'center',
                }}
              >
                <View
                  style={{ height: 20, width: '100%', backgroundColor: 'blue' }}
                >
                  <Text style={{ color: '#fff', textAlign: 'left', marginLeft: 90 }}>{item.player1.winPercentage.toFixed(2)}%</Text>
                </View>
              </View>

              <View
                style={{
                  position: 'absolute',
                  height: 120,
                  width: '100%',
                  zIndex: -2,
                  justifyContent: 'center',
                  alignContent: 'center',
                }}
              >
                <View
                  style={{ height: 20, width: '100%', backgroundColor: 'red' }}
                >
                  <Text style={{ color: '#fff', textAlign: 'right', marginRight: 90 }}>{item.player2.winPercentage.toFixed(2)}%</Text>
                </View>
              </View>
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
