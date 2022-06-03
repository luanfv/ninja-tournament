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

import { INinja } from '@src/@types';
import { IRoutes } from '@src/@types/routes';
import { useLanguage, useBattle } from '@src/hooks';
import { Card, Footer, Header, Body } from '@src/components';
import { randomArrayPosition } from '@src/helpers';

const Tournament: React.FC = () => {
  const { params } = useRoute<RouteProp<IRoutes, 'tournament'>>();
  const { onStartTournament } = useBattle();
  const { goBack, navigate } =
    useNavigation<NavigationProp<IRoutes, 'tournament'>>();

  const [ninjas, setNinjas] = useState<INinja[]>(params as INinja[]);

  const { language } = useLanguage();

  const handleRandomNinjas = useCallback(() => {
    setNinjas((oldState) => {
      const positions = randomArrayPosition(oldState.length);

      return positions.map((item) => oldState[item]);
    });
  }, []);

  return (
    <>
      <Header
        title={language.pages.tournament.headerTitle}
        leftComponent={
          <TouchableOpacity onPress={goBack} activeOpacity={0.8}>
            <Icon name="arrow-back" size={20} color="#fff" />
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity onPress={handleRandomNinjas} activeOpacity={0.8}>
            <Icon name="reload" size={20} color="#fff" />
          </TouchableOpacity>
        }
      />

      <Body>
        <DraggableFlatList
          showsVerticalScrollIndicator={false}
          data={ninjas}
          onDragEnd={({ data }) => setNinjas(data)}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ drag, isActive, item }) => (
            <ScaleDecorator>
              <Card
                ninja={item}
                onLongPress={drag}
                disabled={isActive}
                margin={1}
              />
            </ScaleDecorator>
          )}
        />
      </Body>

      <Footer
        text={language.pages.tournament.footerButton}
        onPress={() =>
          navigate('tournamentScore', onStartTournament(ninjas).reverse())
        }
      />
    </>
  );
};

export { Tournament };
