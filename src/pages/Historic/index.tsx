import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { IRoutes } from '@src/@types/routes';
import { Header, Body, HistoricList } from '@src/components';
import { serviceScoreboards } from '@src/services';
import { IHistoric } from '@src/@types/components';
import { IStatusLoading } from '@src/@types';

const Historic: React.FC = () => {
  const { goBack, navigate } =
    useNavigation<NavigationProp<IRoutes, 'historic'>>();

  const [historic, setHistoric] = useState<IHistoric[]>([]);
  const [status, setStatus] = useState<IStatusLoading>('loading');

  useEffect(() => {
    serviceScoreboards
      .getAll()
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
      <Header
        title="Histórico global"
        leftComponent={
          <TouchableOpacity onPress={goBack} activeOpacity={0.8}>
            <Icon name="arrow-back" size={20} color="#fff" />
          </TouchableOpacity>
        }
      />

      <Body>
        <HistoricList items={historic} status={status} />
      </Body>
    </>
  );
};

export { Historic };
