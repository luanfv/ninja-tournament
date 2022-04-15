import { useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback, useEffect, useState } from 'react';
import { Text, FlatList, RefreshControl, View } from 'react-native';

import { IShinobi, IRoutes } from '../../@types';
import { Button, Card, Header } from '../../components';
import { useShinobis } from '../../hooks/shinobis';
import { Footer, Separator } from './styles';

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
        title="Naruto Shuriken"
        isDescriptionError={shinobisToBattle.length !== 8}
        description={`shinobis do torneio: ${shinobisToBattle.length} de 8`}
      />

      {shinobisContext.status === 'loading' && <Text>Carregando...</Text>}

      {shinobisContext.status === 'fail' && (
        <Text>Falha ao buscar os shinobis</Text>
      )}

      {shinobisContext.status === 'success' && (
        <FlatList
          style={{ padding: 20 }}
          data={shinobis}
          ListHeaderComponent={() =>
            shinobisToBattle.length > 0 ? (
              <>
                {shinobisToBattle.map((shinobi, index) => (
                  <View key={index} style={{ marginVertical: 10 }}>
                    <Card
                      shinobi={shinobi}
                      onPress={() => handleARemoveNinjaToBattle(shinobi)}
                      isSelected
                    />
                  </View>
                ))}

                <Separator />
              </>
            ) : (
              <View />
            )
          }
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <View style={{ marginVertical: 10 }}>
              <Card
                shinobi={item}
                onPress={() => handleAddNinjaToBattle(item)}
              />
            </View>
          )}
          ListFooterComponent={() => <View style={{ marginBottom: 40 }} />}
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
            text="Iniciar"
            disabled={shinobisToBattle.length !== 8}
            onPress={() => navigate('battle', shinobisToBattle)}
          />
        </Footer>
      )}
    </>
  );
};

export { Home };
