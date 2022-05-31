import React, { useCallback, useEffect, useRef, useState } from 'react';
import { RefreshControl, View, FlatList } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import firestore from '@react-native-firebase/firestore';

import { IShinobi, IRoutes, IStatus } from '@src/@types';
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
  const [status, setStatus] = useState<IStatus>('loading');
  const [ninjas, setNinjas] = useState<IShinobi[]>([]);
  const [competitors, setCompetitors] = useState<IShinobi[]>([]);
  const [selectedCompetitors, setSelectedCompetitors] = useState<IShinobi[]>(
    [],
  );

  const flatlistRef = useRef<FlatList>(null);

  const { language } = useLanguage();

  const onResetShinobis = useCallback(() => {
    setSelectedCompetitors([]);
    setCompetitors(ninjas);
  }, [ninjas]);

  const handleSelectCompetitor = useCallback((shinobi: IShinobi) => {
    setCompetitors((oldState) =>
      oldState.filter((state) => state.id !== shinobi.id),
    );
    setSelectedCompetitors((oldState) => [...oldState, shinobi]);
  }, []);

  const handleDeselectCompetitor = useCallback((shinobi: IShinobi) => {
    setSelectedCompetitors((oldState) =>
      oldState.filter((state) => state.id !== shinobi.id),
    );
    setCompetitors((oldState) => [...oldState, shinobi]);
  }, []);

  const handleRefresh = useCallback(() => {
    try {
      setIsRefreshing(true);

      onResetShinobis();
    } finally {
      setIsRefreshing(false);
    }
  }, [onResetShinobis]);

  useEffect(() => {
    if (isFocused) {
      onResetShinobis();

      flatlistRef.current?.scrollToOffset({
        offset: 0,
        animated: false,
      });
    }
  }, [isFocused, onResetShinobis]);

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
        }) as IShinobi[];

        if (data.length < 1) {
          throw Error();
        }

        setNinjas(data);
        setStatus('success');
      })
      .catch(() => setStatus('fail'));
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
                      shinobi={competitor}
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
                shinobi={item}
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
        onPress={() => navigate('battle', selectedCompetitors)}
      />
    </>
  );
};

export { Home };
