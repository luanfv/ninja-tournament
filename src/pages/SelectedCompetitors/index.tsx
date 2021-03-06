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
import LottieView from 'lottie-react-native';

import { IBattle, INinja, INinjaCompetitor } from '@src/@types';
import { IRoutes } from '@src/@types/routes';
import { useLanguage, useBattle } from '@src/hooks';
import { Card, Footer, Header, Body } from '@src/components';
import { randomArrayPosition } from '@src/helpers';
import { serviceScoreboards } from '@src/services';

const SelectedCompetitors: React.FC = () => {
  const { params } = useRoute<RouteProp<IRoutes, 'selectedCompetitors'>>();
  const { onStartTournament } = useBattle();
  const { goBack, navigate } =
    useNavigation<NavigationProp<IRoutes, 'selectedCompetitors'>>();

  const [ninjas, setNinjas] = useState<INinja[]>(params as INinja[]);
  const [isInitTournament, setIsInitTournament] = useState(false);

  const { language } = useLanguage();

  const handleRandomNinjas = useCallback(() => {
    setNinjas((oldState) => {
      const positions = randomArrayPosition(oldState.length);

      return positions.map((item) => oldState[item]);
    });
  }, []);

  const submitTournament = useCallback((tournament: IBattle[][]) => {
    const competitors: INinjaCompetitor[] = [];
    competitors.push(tournament[0][0].winner);

    tournament.forEach((battles) => {
      battles.forEach((competitor) => {
        competitors.push(
          competitor.winner === competitor.player1
            ? competitor.player2
            : competitor.player1,
        );
      });
    });

    serviceScoreboards
      .post({
        competitors,
        winner: tournament[0][0].winner,
        battles: tournament,
      })
      .catch((err) => console.log(err));
  }, []);

  const handleStartTournament = useCallback(() => {
    setIsInitTournament(true);

    const tournamentResult = onStartTournament(ninjas).reverse();

    submitTournament(tournamentResult);

    setTimeout(() => {
      navigate('scoreboard', tournamentResult);
    }, 1000 * 2);

    setTimeout(() => {
      setIsInitTournament(false);
    }, 1000 * 3);
  }, [navigate, ninjas, onStartTournament, submitTournament]);

  return (
    <>
      <Header
        title={language.pages.selectedCompetitors.headerTitle}
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

      {isInitTournament ? (
        <LottieView
          source={require('@src/assets/animations/battle.json')}
          autoPlay
          loop={false}
        />
      ) : (
        <>
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
            text={language.pages.selectedCompetitors.footerButton}
            onPress={handleStartTournament}
          />
        </>
      )}
    </>
  );
};

export { SelectedCompetitors };
