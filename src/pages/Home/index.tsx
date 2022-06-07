import React, { useCallback, useEffect, useRef, useState } from 'react';
import { RefreshControl, View, FlatList } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import firestore from '@react-native-firebase/firestore';

import { INinja, IStatusLoading } from '@src/@types';
import { IRoutes } from '@src/@types/routes';
import {
  Footer,
  Card,
  Header,
  Body,
  Separator,
  Loading,
} from '@src/components';
import { Spacing } from '@src/components/styles';
import { useLanguage } from '@src/hooks';

const Home: React.FC = () => {
  const isFocused = useIsFocused();
  const { navigate } =
    useNavigation<NativeStackNavigationProp<IRoutes, 'home'>>();

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [status, setStatus] = useState<IStatusLoading>('loading');
  const [ninjas, setNinjas] = useState<INinja[]>([]);
  const [competitors, setCompetitors] = useState<INinja[]>([]);
  const [selectedCompetitors, setSelectedCompetitors] = useState<INinja[]>([]);

  const flatlistRef = useRef<FlatList>(null);

  const { language } = useLanguage();

  const onResetNinjas = useCallback(() => {
    setSelectedCompetitors([]);
    setCompetitors(ninjas);
  }, [ninjas]);

  const handleSelectCompetitor = useCallback((ninja: INinja) => {
    setCompetitors((oldState) =>
      oldState.filter((state) => state.id !== ninja.id),
    );
    setSelectedCompetitors((oldState) => [...oldState, ninja]);
  }, []);

  const handleDeselectCompetitor = useCallback((ninja: INinja) => {
    setSelectedCompetitors((oldState) =>
      oldState.filter((state) => state.id !== ninja.id),
    );
    setCompetitors((oldState) => [...oldState, ninja]);
  }, []);

  const handleRefresh = useCallback(() => {
    try {
      setIsRefreshing(true);

      onResetNinjas();
    } finally {
      setIsRefreshing(false);
    }
  }, [onResetNinjas]);

  useEffect(() => {
    if (isFocused) {
      onResetNinjas();

      flatlistRef.current?.scrollToOffset({
        offset: 0,
        animated: false,
      });
    }
  }, [isFocused, onResetNinjas]);

  useEffect(() => {
    firestore()
      .collection('ninjas')
      .orderBy('id')
      .get()
      .then((response) => {
        const data = response.docs.map((doc) => {
          return {
            ...doc.data(),
          };
        }) as INinja[];

        if (data.length < 1) {
          throw Error();
        }

        setNinjas(data);
        setStatus('success');
      })
      .catch(() => setStatus('failure'));

    // firestore()
    //   .collection('tournaments')
    //   .where('user_uid', '==', auth().currentUser?.uid)
    //   .get()
    //   .then((response) => {
    //     const data = response.docs.map((doc) => {
    //       return {
    //         ...doc.data(),
    //       };
    //     });

    //     navigate('tournamentScore', JSON.parse(data[0].tournament));
    //   })
    //   .catch((err) => console.log('ERRO', err));
  }, []);

  return (
    <>
      <Header
        title={language.pages.home.headerTitle}
        isDescriptionError={selectedCompetitors.length !== 8}
        description={`${language.pages.home.headerDescription}: ${selectedCompetitors.length} ${language.pages.home.headerDescriptionOf} 8`}
      />

      <Body>
        {status === 'loading' && <Loading />}

        {status === 'success' && (
          <FlatList
            ref={flatlistRef}
            data={competitors}
            ListHeaderComponent={() =>
              selectedCompetitors.length > 0 ? (
                <>
                  {selectedCompetitors.map((competitor) => (
                    <Card
                      key={String(competitor.id)}
                      ninja={competitor}
                      onPress={() => handleDeselectCompetitor(competitor)}
                      isSelected
                      margin={1}
                    />
                  ))}

                  <Spacing>
                    <Separator />
                  </Spacing>
                </>
              ) : (
                <View />
              )
            }
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <Card
                ninja={item}
                onPress={() => handleSelectCompetitor(item)}
                margin={1}
              />
            )}
            refreshControl={
              <RefreshControl
                refreshing={isRefreshing}
                onRefresh={handleRefresh}
              />
            }
          />
        )}
      </Body>

      <Footer
        text={language.pages.home.footerButton}
        disabled={selectedCompetitors.length !== 8}
        onPress={() => navigate('tournament', selectedCompetitors)}
      />
    </>
  );
};

export { Home };
