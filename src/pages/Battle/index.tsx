import React, { useCallback, useState } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import DraggableFlatList, {
  ScaleDecorator,
} from 'react-native-draggable-flatlist';
import Icon from 'react-native-vector-icons/Ionicons';

import { IShinobi, IRoutes } from '../../@types';
import { useRound } from '../../hooks';
import { Card, Footer, Header, Body } from '../../components';

const Battle: React.FC = () => {
  const { params } = useRoute<RouteProp<IRoutes, 'battle'>>();
  const { onStartRound } = useRound();
  const { goBack } = useNavigation<NavigationProp<IRoutes, 'battle'>>();

  const [shinobis, setShinobis] = useState<IShinobi[]>(params as IShinobi[]);

  const handleRandomShinobis = useCallback(() => {
    const positions: number[] = [];

    do {
      const number = Math.floor(Math.random() * 8);

      const numberExists = positions.find((value) => value === number);

      if (numberExists === undefined) {
        positions.push(number);
      }
    } while (positions.length !== 8);

    setShinobis((oldState) => positions.map((item) => oldState[item]));
  }, []);

  return (
    <>
      <Header
        title="TORNEIO"
        leftComponent={
          <TouchableOpacity onPress={goBack} activeOpacity={0.8}>
            <Icon name="arrow-back" size={20} color="#fff" />
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity onPress={handleRandomShinobis} activeOpacity={0.8}>
            <Icon name="reload" size={20} color="#fff" />
          </TouchableOpacity>
        }
      />

      <Body>
        <DraggableFlatList
          showsVerticalScrollIndicator={false}
          data={shinobis}
          onDragEnd={({ data }) => setShinobis(data)}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ drag, isActive, item, index }) => (
            <ScaleDecorator>
              <Card
                shinobi={item}
                onLongPress={drag}
                disabled={isActive}
                margin={1}
                position={Number(index) + 1}
              />
            </ScaleDecorator>
          )}
        />
      </Body>

      <Footer
        text="Iniciar torneio"
        onPress={() => {
          const winner1 = onStartRound(shinobis).winners;
          const winner2 = onStartRound(winner1).winners;
          const winner = onStartRound(winner2).winners[0];

          Alert.alert('VENCEDOR', `Vencedor(a) do torneio é ${winner.name}!`);
        }}
      />
    </>
  );
};

export { Battle };
