import React, { useEffect, useMemo, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Body, HeaderDashboard, HistoricList } from '@src/components';
import { IStatusLoading } from '@src/@types';
import { useNavigation } from '@react-navigation/native';
import { IRoutes } from '@src/@types/routes';
import { IHistoric, IMenuItem } from '@src/@types/components';
import { serviceScoreboards } from '@src/services';

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
      { type: 'historic', isMain: false, onPress: () => navigate('historic') },
    ],
    [navigate],
  );

  useEffect(() => {
    serviceScoreboards
      .get()
      .then((response) => {
        const data = response.map((item) => ({
          ...item,
          onPress: () => navigate('scoreboard', item.battles),
        })) as IHistoric[];

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
        <HistoricList items={historic} status={status} title="Meu histórico" />
      </Body>
    </>
  );
};

export { Dashboard };
