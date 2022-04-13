import React, { useCallback, useState } from 'react';
import { Text, FlatList, TouchableOpacity } from 'react-native';
import { useQuery } from 'react-query';

import { firebaseNinjas } from '../../services/firebase';
import { storageNinjas } from '../../helpers/storage';
import { INinja } from '../../@types';
import { Header } from '../../components';
import { Separator } from './styles';

const Home: React.FC = () => {
  const [ninjasToBattle, setNinjasToBattle] = useState<INinja[]>([]);
  const [ninjas, setNinjas] = useState<INinja[]>([]);

  useQuery('ninjas', async () => {
    try {
      const response = await firebaseNinjas.get();

      if (!response) {
        throw Error();
      }

      await storageNinjas.set(response);

      setNinjas(response);

      return response;
    } catch {
      const storage = await storageNinjas.get();

      if (storage) {
        setNinjas(storage);

        return storage;
      }

      return [];
    }
  });

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

  return (
    <>
      <Header />

      <FlatList
        data={ninjas}
        ListHeaderComponent={() => (
          <>
            {ninjasToBattle.length > 0 && (
              <>
                <Text>Ninjas do torneio:</Text>

                {ninjasToBattle.map((ninja) => (
                  <TouchableOpacity
                    key={ninja.id}
                    onPress={() => handleARemoveNinjaToBattle(ninja)}
                  >
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
            <Text>
              {item.id} - {item.name}
            </Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
    </>
  );
};

export { Home };
