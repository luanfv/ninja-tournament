import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

import { IShinobi, IRoutes } from '../../@types';
import { useRound } from '../../hooks';

const Battle: React.FC = () => {
  const { params } = useRoute<RouteProp<IRoutes, 'battle'>>();
  const { onStartRound } = useRound();

  const [winner, setWinner] = useState<IShinobi | undefined>();

  useEffect(() => {
    if (params.length > 0) {
      const winner1 = onStartRound(params as IShinobi[]).winners;
      const winner2 = onStartRound(winner1 as IShinobi[]).winners;
      const winner3 = onStartRound(winner2 as IShinobi[]).winners;

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
