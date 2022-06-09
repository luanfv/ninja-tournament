import React, { useCallback, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { IRoutes } from '@src/@types/routes';
import { Header, Body, HistoricList, Loading } from '@src/components';
import { serviceScoreboards } from '@src/services';
import { IHistoric } from '@src/@types/components';
import { IStatusLoading } from '@src/@types';
import { IServiceScoreboardsLastResponse } from '@src/@types/services';

const Historic: React.FC = () => {
  const { goBack, navigate } =
    useNavigation<NavigationProp<IRoutes, 'historic'>>();

  const [historic, setHistoric] = useState<IHistoric[]>([]);
  const [status, setStatus] = useState<IStatusLoading>('loading');

  const [isLoadingHistoric, setIsLoadingHistoric] = useState(false);
  const [hasStopRequest, setHasStopRequest] = useState(false);
  const [lastResponse, setLastResponse] =
    useState<IServiceScoreboardsLastResponse>(undefined);

  const handleGetHistoric = useCallback(() => {
    if (hasStopRequest) {
      return;
    }

    setIsLoadingHistoric(true);

    serviceScoreboards
      .getAll(lastResponse, 7)
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
      <Header
        title="Histórico global"
        leftComponent={
          <TouchableOpacity onPress={goBack} activeOpacity={0.8}>
            <Icon name="arrow-back" size={20} color="#fff" />
          </TouchableOpacity>
        }
      />

      <Body>
        <HistoricList
          items={historic}
          status={status}
          onEndReached={handleGetHistoric}
          ListFooterComponent={
            isLoadingHistoric ? <Loading margin={20} width={20} /> : <></>
          }
        />
      </Body>
    </>
  );
};

export { Historic };
