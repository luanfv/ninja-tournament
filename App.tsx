import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';

import {getNinjas} from './src/services/firebase';
import {INinja} from './src/@types/ninja';

const App: React.FC = () => {
  const [ninjas, setNinjas] = useState<INinja[]>([]);

  useEffect(() => {
    getNinjas().then(response => setNinjas(response));
  }, []);

  return (
    <ScrollView>
      {ninjas.map(ninja => (
        <View
          key={ninja.id}
          style={{
            marginBottom: 8,
            paddingBottom: 8,
            borderBottomWidth: 1,
            borderColor: '#c3c3c3',
          }}>
          <Text>
            {ninja.id} - {ninja.name}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export {App};
