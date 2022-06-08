import React, { useCallback } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'styled-components/native';

import { IRoutes } from '@src/@types/routes';
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

const Scoreboard: React.FC = () => {
  const { params } = useRoute<RouteProp<IRoutes, 'scoreboard'>>();
  const { goBack, reset } =
    useNavigation<NavigationProp<IRoutes, 'scoreboard'>>();
  const { spacing } = useTheme();

  const { language } = useLanguage();

  const getTitleOfRound = useCallback(
    (value, length) => {
      switch (value) {
        case 0:
          return language.pages.tournamentScore.finalRound;

        case 1:
          return language.pages.tournamentScore.semifinalRound;

        default:
          return `${length - value}ª ${language.pages.tournamentScore.round}`;
      }
    },
    [language],
  );

  return (
    <>
      <Header
        title={language.pages.tournamentScore.headerTitle}
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
          <Champion ninja={params[0][0].winner} />

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
        text={language.pages.tournamentScore.footerButton}
        onPress={() => reset({ index: 0, routes: [{ name: 'dashboard' }] })}
      />
    </>
  );
};

export { Scoreboard };
