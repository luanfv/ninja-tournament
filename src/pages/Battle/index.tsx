import React, { useCallback, useState } from 'react';
import { TouchableOpacity } from 'react-native';
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

import { IShinobi, IRoutes } from '@src/@types';
import { useRound } from '@src/hooks';
import { Card, Footer, Header, Body } from '@src/components';

const Battle: React.FC = () => {
  const { params } = useRoute<RouteProp<IRoutes, 'battle'>>();
  const { onStartAllRounds } = useRound();
  const { goBack, navigate } =
    useNavigation<NavigationProp<IRoutes, 'battle'>>();

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
          renderItem={({ drag, isActive, item }) => (
            <ScaleDecorator>
              <Card
                shinobi={item}
                onLongPress={drag}
                disabled={isActive}
                margin={1}
              />
            </ScaleDecorator>
          )}
        />
      </Body>

      <Footer
        text="Iniciar torneio"
        onPress={() =>
          navigate('battleResult', onStartAllRounds(shinobis).reverse())
        }
      />
    </>
  );
};

export { Battle };
