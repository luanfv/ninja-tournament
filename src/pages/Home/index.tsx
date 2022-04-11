import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useQuery } from 'react-query';

import { firebaseNinjas } from '../../services/firebase';
import { storageNinjas } from '../../helpers/storage';
import { Separator } from './styles';

const Home: React.FC = () => {
  const ninjas = useQuery('ninjas', async () => {
    try {
      const response = await firebaseNinjas.get();

      if (!response) {
        throw Error();
      }

      await storageNinjas.set(response);

      return response;
    } catch {
      const storage = storageNinjas.get();

      if (storage) {
        return storage;
      }

      return [];
    }
  });

  return (
    <FlatList
      data={ninjas.data ? ninjas.data : []}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <View>
          <Text>
            {item.id} - {item.name}
          </Text>
        </View>
      )}
      ItemSeparatorComponent={() => <Separator />}
    />
  );
};

export { Home };
