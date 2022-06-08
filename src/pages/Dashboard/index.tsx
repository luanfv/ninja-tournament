import React, { useEffect, useMemo, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

import { Body, HeaderDashboard, HistoricList } from '@src/components';
import { IStatusLoading } from '@src/@types';
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
      { type: 'tournament', isMain: true, onPress: () => navigate('home') },
      { type: 'battle', isMain: false, onPress: () => {} },
      { type: 'historic', isMain: false, onPress: () => {} },
    ],
    [navigate],
  );

  useEffect(() => {
    firestore()
      .collection('tournaments')
      .where('user_uid', '==', auth().currentUser?.uid)
      .orderBy('createdAt', 'desc')
      .get()
      .then((response) => {
        const data = response.docs.map((doc) => {
          return {
            id: doc.id,
            winner: doc.data().winner.name,
            length: doc.data().competitors.length,
          } as IHistoric;
        });

        setHistoric(data);
        setStatus('success');
      })
      .catch((err) => console.log('ERRO', err));
  }, []);

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
