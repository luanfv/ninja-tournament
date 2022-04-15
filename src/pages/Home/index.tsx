import { useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback, useEffect, useState } from 'react';
import { Text, RefreshControl, View } from 'react-native';

import { IShinobi, IRoutes } from '../../@types';
import { Button, Card, Header } from '../../components';
import { useShinobis } from '../../hooks/shinobis';
import { Container, Footer, List, Separator, Spacing } from './styles';

const Home: React.FC = () => {
  const shinobisContext = useShinobis();
  const isFocused = useIsFocused();
  const { navigate } =
    useNavigation<NativeStackNavigationProp<IRoutes, 'home'>>();

  const [shinobis, setShinobis] = useState<IShinobi[]>([]);
  const [shinobisToBattle, setShinobisToBattle] = useState<IShinobi[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onResetShinobis = useCallback((allShinobis: IShinobi[]) => {
    setShinobisToBattle([]);
    setShinobis(allShinobis);
  }, []);

  const handleAddNinjaToBattle = useCallback((shinobi: IShinobi) => {
    setShinobis((oldState) =>
      oldState.filter((state) => state.id !== shinobi.id),
    );
    setShinobisToBattle((oldState) => [...oldState, shinobi]);
  }, []);

  const handleARemoveNinjaToBattle = useCallback((shinobi: IShinobi) => {
    setShinobisToBattle((oldState) =>
      oldState.filter((state) => state.id !== shinobi.id),
    );
    setShinobis((oldState) => [...oldState, shinobi]);
  }, []);

  const handleRefresh = useCallback(() => {
    try {
      setIsRefreshing(true);

      onResetShinobis(shinobisContext.shinobis);
    } finally {
      setIsRefreshing(false);
    }
  }, [shinobisContext.shinobis, onResetShinobis]);

  useEffect(() => {
    if (isFocused) {
      onResetShinobis(shinobisContext.shinobis);
    }
  }, [isFocused, shinobisContext, onResetShinobis]);

  return (
    <>
      <Header
        title="TORNEIO SHINOBI"
        isDescriptionError={shinobisToBattle.length !== 8}
        description={`Shinobis do torneio: ${shinobisToBattle.length} de 8`}
      />

      {shinobisContext.status === 'loading' && <Text>Carregando...</Text>}

      {shinobisContext.status === 'fail' && (
        <Text>Falha ao buscar os shinobis</Text>
      )}

      {shinobisContext.status === 'success' && (
        <List
          data={shinobis}
          ListHeaderComponent={() =>
            shinobisToBattle.length > 0 ? (
              <>
                {shinobisToBattle.map((shinobi, index) => (
                  <Container key={index}>
                    <Card
                      shinobi={shinobi}
                      onPress={() => handleARemoveNinjaToBattle(shinobi)}
                      isSelected
                    />
                  </Container>
                ))}

                <Separator />
              </>
            ) : (
              <View />
            )
          }
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Container>
              <Card
                shinobi={item}
                onPress={() => handleAddNinjaToBattle(item)}
              />
            </Container>
          )}
          ListFooterComponent={() => <Spacing />}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
            />
          }
        />
      )}

      {shinobisContext.status === 'success' && (
        <Footer>
          <Button
            text="Avançar"
            disabled={shinobisToBattle.length !== 8}
            onPress={() => navigate('battle', shinobisToBattle)}
          />
        </Footer>
      )}
    </>
  );
};

export { Home };
