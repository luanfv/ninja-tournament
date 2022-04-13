import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

import { INinja, IRoutes } from '../../@types';
import { useRound } from '../../hooks';

const Battle: React.FC = () => {
  const { params } = useRoute<RouteProp<IRoutes, 'battle'>>();
  const { onStartRound } = useRound();

  const [winner, setWinner] = useState<INinja | undefined>();

  useEffect(() => {
    if (params.length > 0) {
      const winner1 = onStartRound(params as INinja[]).winners;
      const winner2 = onStartRound(winner1 as INinja[]).winners;
      const winner3 = onStartRound(winner2 as INinja[]).winners;

      setWinner(winner3[0]);
    }
  }, [onStartRound, params]);

  return (
    <View>
      <Text>Vencedor é {winner?.name}</Text>
    </View>
  );
};

export { Battle };
