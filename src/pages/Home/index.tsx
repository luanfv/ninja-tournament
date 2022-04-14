import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback, useEffect, useState } from 'react';
import {
  Text,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  Image,
} from 'react-native';

import { INinja, IRoutes } from '../../@types';
import { Header } from '../../components';
import { useNinjas } from '../../hooks/ninjas';
import { Separator } from './styles';

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

  const handleRefresh = useCallback(async () => {
    try {
      setIsRefreshing(true);

      setNinjas(ninjasContext.ninjas);
      setNinjasToBattle([]);
    } finally {
      setIsRefreshing(false);
    }
  }, [ninjasContext.ninjas]);

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
          data={ninjas}
          ListHeaderComponent={() => (
            <>
              {ninjasToBattle.length > 0 && (
                <>
                  <Text>Ninjas do torneio:</Text>

                  {ninjasToBattle.map((ninja, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => handleARemoveNinjaToBattle(ninja)}
                    >
                      {ninja.image && (
                        <Image
                          source={{ uri: ninja.image }}
                          style={{ width: 100, height: 100 }}
                        />
                      )}
                      <Text>
                        {ninja.id} - {ninja.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </>
              )}

              <Text>Ninjas:</Text>
            </>
          )}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleAddNinjaToBattle(item)}>
              {item.image && (
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 100, height: 100 }}
                />
              )}
              <Text>
                {item.id} - {item.name}
              </Text>
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <Separator />}
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
