import React, { useEffect, useState } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import DraggableFlatList, {
  ScaleDecorator,
} from 'react-native-draggable-flatlist';

import { IShinobi, IRoutes } from '../../@types';
import { useRound } from '../../hooks';
import { Button, Card } from '../../components';
import { Container, Footer, Spacing } from './styles';
import { Alert } from 'react-native';

const Battle: React.FC = () => {
  const { params } = useRoute<RouteProp<IRoutes, 'battle'>>();
  const { onStartRound } = useRound();
  const [shinobis, setShinobis] = useState<IShinobi[]>([]);

  useEffect(() => {
    setShinobis(params as IShinobi[]);

    if (params.length > 0) {
      const winner1 = onStartRound(params as IShinobi[]).winners;
      const winner2 = onStartRound(winner1 as IShinobi[]).winners;
      onStartRound(winner2 as IShinobi[]).winners;
    }
  }, [onStartRound, params]);

  return (
    <>
      <DraggableFlatList
        showsVerticalScrollIndicator={false}
        data={shinobis}
        onDragEnd={({ data }) => setShinobis(data)}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ drag, isActive, item }) => (
          <ScaleDecorator>
            <Container>
              <Card shinobi={item} onLongPress={drag} disabled={isActive} />
            </Container>
          </ScaleDecorator>
        )}
        ListFooterComponent={() => <Spacing />}
      />

      <Footer>
        <Button
          text="Iniciar torneio"
          onPress={() => {
            const winner1 = onStartRound(shinobis).winners;
            const winner2 = onStartRound(winner1).winners;
            const winner = onStartRound(winner2 as IShinobi[]).winners[0];

            Alert.alert('VENCEDOR', `Vencedor(a) do torneio é ${winner.name}!`);
          }}
        />
      </Footer>
    </>
  );
};

export { Battle };
