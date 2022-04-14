import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback, useEffect, useState } from 'react';
import { Text, FlatList, RefreshControl, View } from 'react-native';

import { INinja, IRoutes } from '../../@types';
import { Card, Header } from '../../components';
import { useNinjas } from '../../hooks/ninjas';

const Home: React.FC = () => {
  const ninjasContext = useNinjas();
  const { navigate } =
    useNavigation<NativeStackNavigationProp<IRoutes, 'home'>>();

  const [ninjas, setNinjas] = useState<INinja[]>([]);
  const [ninjasToBattle, setNinjasToBattle] = useState<INinja[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleAddNinjaToBattle = useCallback((ninja: INinja) => {
    setNinjas((oldState) => oldState.filter((state) => state.id !== ninja.id));
    setNinjasToBattle((oldState) => [...oldState, ninja]);
  }, []);

  const handleARemoveNinjaToBattle = useCallback((ninja: INinja) => {
    setNinjasToBattle((oldState) =>
      oldState.filter((state) => state.id !== ninja.id),
    );
    setNinjas((oldState) => [...oldState, ninja]);
  }, []);

  const handleRefresh = useCallback(() => {
    try {
      setIsRefreshing(true);

      ninjasContext.getNinjas().then(() => setNinjasToBattle([]));
    } finally {
      setIsRefreshing(false);
    }
  }, [ninjasContext]);

  useEffect(() => {
    setNinjas(ninjasContext.ninjas);
  }, [ninjasContext]);

  useEffect(() => {
    if (ninjasToBattle.length === 8) {
      navigate('battle', ninjasToBattle);
    }
  }, [navigate, ninjasToBattle]);

  return (
    <>
      <Header
        title="Naruto Shuriken"
        isDescriptionError={ninjasToBattle.length !== 8}
        description={`Ninjas do torneio: ${ninjasToBattle.length} de 8`}
      />

      {ninjasContext.status === 'loading' && <Text>Carregando...</Text>}

      {ninjasContext.status === 'fail' && (
        <Text>Falha ao buscar os ninjas</Text>
      )}

      {ninjasContext.status === 'success' && (
        <FlatList
          style={{ padding: 20 }}
          data={ninjas}
          ListHeaderComponent={() => (
            <>
              {ninjasToBattle.length > 0 && (
                <>
                  <Text>Ninjas do torneio:</Text>

                  {ninjasToBattle.map((ninja, index) => (
                    <View key={index} style={{ marginVertical: 10 }}>
                      <Card
                        ninja={ninja}
                        onPress={() => handleARemoveNinjaToBattle(ninja)}
                      />
                    </View>
                  ))}
                </>
              )}

              <Text>Ninjas:</Text>
            </>
          )}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <View style={{ marginVertical: 10 }}>
              <Card ninja={item} onPress={() => handleAddNinjaToBattle(item)} />
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
    </>
  );
};

export { Home };
