import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

import { getNinjas } from '../../services/firebase';
import { INinja } from '../../@types';
import { Separator } from './styles';

const Home: React.FC = () => {
  const [ninjas, setNinjas] = useState<INinja[]>([]);

  useEffect(() => {
    getNinjas().then((response) => setNinjas(response));
  }, []);

  return (
    <FlatList
      data={ninjas}
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
