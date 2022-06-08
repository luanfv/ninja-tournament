import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

import { Body, Loading, Separator } from '@src/components';
import { Card } from './components/Card';
import { HistoricCard } from './components/HistoricCard';
import {
  Header,
  CardList,
  Welcome,
  WelcomeText,
  Title,
  NotFound,
  NotFoundAnimation,
} from './styles';
import { IStatusLoading } from '@src/@types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IRoutes } from '@src/@types/routes';

interface IHistoric {
  id: string;
  winner: string;
  length: number;
}

const Dashboard: React.FC = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<IRoutes, 'dashboard'>>();

  const [historic, setHistoric] = useState<IHistoric[]>([]);
  const [status, setStatus] = useState<IStatusLoading>('loading');

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
    <Body>
      <Header>
        <Welcome>
          <WelcomeText>Olá, seja bem-vindo(a) ao</WelcomeText>
          <WelcomeText bold>TORNEIO NINJA</WelcomeText>
        </Welcome>

        <CardList>
          <Card isMain type="tournament" onPress={() => navigate('home')} />
          <Card type="battle" onPress={() => {}} />
          <Card type="historic" onPress={() => {}} />
        </CardList>
      </Header>

      {status === 'loading' && <Loading />}

      {status !== 'loading' && historic.length === 0 && (
        <>
          <Title>Meu histórico</Title>

          <NotFound>
            <NotFoundAnimation
              source={require('@src/assets/animations/not_found.json')}
              autoPlay
              loop={false}
            />
          </NotFound>
        </>
      )}

      {status === 'success' && (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={historic}
          ListHeaderComponent={() => (
            <>
              <Title>Meu histórico</Title>

              <Separator />
            </>
          )}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <HistoricCard winner={item.winner} length={item.length} />
          )}
          ItemSeparatorComponent={() => <Separator />}
        />
      )}
    </Body>
  );
};

export { Dashboard };
