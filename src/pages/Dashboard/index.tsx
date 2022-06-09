import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Body, HeaderDashboard, HistoricList, Loading } from '@src/components';
import { IStatusLoading } from '@src/@types';
import { useNavigation } from '@react-navigation/native';
import { IRoutes } from '@src/@types/routes';
import { IHistoric, IMenuItem } from '@src/@types/components';
import { serviceScoreboards } from '@src/services';
import { IServiceScoreboardsLastResponse } from '@src/@types/services';

const Dashboard: React.FC = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<IRoutes, 'dashboard'>>();

  const [historic, setHistoric] = useState<IHistoric[]>([]);
  const [status, setStatus] = useState<IStatusLoading>('loading');

  const [isLoadingHistoric, setIsLoadingHistoric] = useState(false);
  const [hasStopRequest, setHasStopRequest] = useState(false);
  const [lastResponse, setLastResponse] =
    useState<IServiceScoreboardsLastResponse>(undefined);

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

  const handleGetHistoric = useCallback(() => {
    if (hasStopRequest) {
      return;
    }

    setIsLoadingHistoric(true);

    serviceScoreboards
      .get(lastResponse, 10)
      .then((response) => {
        const data = response.data.map((item) => ({
          ...item,
          onPress: () => navigate('scoreboard', item.battles),
        })) as IHistoric[];

        setHistoric((oldState) => [...oldState, ...data]);
        setStatus('success');
        setLastResponse(response.lastDoc);
      })
      .catch((err) => {
        console.log('ERRO', err);
        setHasStopRequest(true);
      })
      .finally(() => setIsLoadingHistoric(false));
  }, [hasStopRequest, lastResponse, navigate]);

  useEffect(() => {
    handleGetHistoric();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HeaderDashboard
        text1="Olá, seja bem-vindo(a) ao"
        text2="TORNEIO NINJA"
        menuItems={menuItems}
      />

      <Body>
        <HistoricList
          items={historic}
          status={status}
          title="Meu histórico"
          onEndReached={handleGetHistoric}
          ListFooterComponent={
            isLoadingHistoric ? <Loading margin={20} width={20} /> : <></>
          }
        />
      </Body>
    </>
  );
};

export { Dashboard };
