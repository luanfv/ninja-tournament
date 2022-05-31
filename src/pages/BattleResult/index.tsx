import React, { useCallback, useEffect } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'styled-components/native';

import { IRoutes, IShinobi } from '@src/@types';
import {
  Footer,
  Header,
  Body,
  Separator,
  CardBattle,
  Champion,
  Title,
} from '@src/components';
import { useLanguage } from '@src/hooks';

const BattleResult: React.FC = () => {
  const { params } = useRoute<RouteProp<IRoutes, 'battleResult'>>();
  const { goBack, reset } =
    useNavigation<NavigationProp<IRoutes, 'battleResult'>>();
  const { spacing } = useTheme();

  const { language } = useLanguage();

  const getTitleOfRound = useCallback(
    (value, length) => {
      switch (value) {
        case 0:
          return language.pages.battleResult.finalRound;

        case 1:
          return language.pages.battleResult.semifinalRound;

        default:
          return `${length - value}ª ${language.pages.battleResult.round}`;
      }
    },
    [language],
  );

  useEffect(() => {
    if (params) {
      const competitors: IShinobi[] = [];

      competitors.push(params[0][0].winner);

      params.forEach((battles) => {
        battles.forEach((competitor) => {
          competitors.push(
            competitor.winner === competitor.player1
              ? competitor.player2
              : competitor.player1,
          );
        });
      });

      firestore()
        .collection('tournaments')
        .add({
          competitors,
          createdAt: firestore.FieldValue.serverTimestamp(),
        })
        .catch((err) => console.log(err));
    }
  }, [params]);

  return (
    <>
      <Header
        title={language.pages.battleResult.headerTitle}
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
          <Champion shinobi={params[0][0].winner} />

          {params.map((round, index) => {
            return (
              <View key={String(index)}>
                <Separator />

                <Title>{getTitleOfRound(index, params.length)}</Title>

                {round.map((item, index2) => (
                  <CardBattle key={index2} competitor={item} />
                ))}
              </View>
            );
          })}
        </ScrollView>
      </Body>

      <Footer
        text={language.pages.battleResult.footerButton}
        onPress={() => reset({ index: 1, routes: [{ name: 'home' }] })}
      />
    </>
  );
};

export { BattleResult };
