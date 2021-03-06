import React, { useCallback, useEffect, useRef, useState } from 'react';
import { RefreshControl, FlatList } from 'react-native';
import {
  RouteProp,
  useIsFocused,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

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
import { serviceNinjas } from '@src/services';

const Competitors: React.FC = () => {
  const isFocused = useIsFocused();
  const { params } = useRoute<RouteProp<IRoutes, 'competitors'>>();
  const { navigate, goBack } =
    useNavigation<NativeStackNavigationProp<IRoutes, 'competitors'>>();

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
    serviceNinjas
      .get()
      .then((response) => {
        if (response.length < 1) {
          throw Error();
        }

        setNinjas(response);
        setStatus('success');
      })
      .catch(() => setStatus('failure'));
  }, []);

  return (
    <>
      <Header
        title={language.pages.competitors.headerTitle}
        isDescriptionError={selectedCompetitors.length !== params.length}
        description={`${language.pages.competitors.headerDescription}: ${selectedCompetitors.length} ${language.pages.competitors.headerDescriptionOf} ${params.length}`}
        leftComponent={
          <TouchableOpacity onPress={goBack} activeOpacity={0.8}>
            <Icon name="arrow-back" size={20} color="#fff" />
          </TouchableOpacity>
        }
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
                <></>
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
        text={language.pages.competitors.footerButton}
        disabled={selectedCompetitors.length !== params.length}
        onPress={() => navigate('selectedCompetitors', selectedCompetitors)}
      />
    </>
  );
};

export { Competitors };
