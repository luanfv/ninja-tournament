import React, { useEffect, useMemo, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

import { Body, HeaderDashboard, HistoricList } from '@src/components';
import { IBattle, IStatusLoading } from '@src/@types';
import { useNavigation } from '@react-navigation/native';
import { IRoutes } from '@src/@types/routes';
import { IHistoric, IMenuItem } from '@src/@types/components';

const Dashboard: React.FC = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<IRoutes, 'dashboard'>>();

  const [historic, setHistoric] = useState<IHistoric[]>([]);
  const [status, setStatus] = useState<IStatusLoading>('loading');

  const menuItems = useMemo<IMenuItem[]>(
    () => [
      {
        type: 'tournament',
        isMain: true,
        onPress: () => navigate('competitors', { length: 8 }),
      },
      {
        type: 'battle',
        isMain: false,
        onPress: () => navigate('competitors', { length: 2 }),
      },
      { type: 'historic', isMain: false, onPress: () => {} },
    ],
    [navigate],
  );

  useEffect(() => {
    firestore()
      .collection('scoreboards')
      .where('userUid', '==', auth().currentUser?.uid)
      .orderBy('createdAt', 'desc')
      .get()
      .then((response) => {
        const data = response.docs.map((doc) => {
          const scoreboard = doc.data();

          return {
            id: doc.id,
            winner: scoreboard.winner.name,
            length: scoreboard.competitors.length,
            onPress: () =>
              navigate(
                'scoreboard',
                JSON.parse(scoreboard.battles) as IBattle[][],
              ),
          } as IHistoric;
        });

        setHistoric(data);
        setStatus('success');
      })
      .catch((err) => console.log('ERRO', err));
  }, [navigate]);

  return (
    <>
      <HeaderDashboard
        text1="Olá, seja bem-vindo(a) ao"
        text2="TORNEIO NINJA"
        menuItems={menuItems}
      />

      <Body>
        <HistoricList items={historic} status={status} />
      </Body>
    </>
  );
};

export { Dashboard };
