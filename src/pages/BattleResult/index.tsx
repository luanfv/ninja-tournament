import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { IRoutes } from '../../@types';
import { Footer, Header, Body } from '../../components';

const BattleResult: React.FC = () => {
  const { params } = useRoute<RouteProp<IRoutes, 'battleResult'>>();
  const { goBack, reset } =
    useNavigation<NavigationProp<IRoutes, 'battleResult'>>();

  console.log(params);

  return (
    <>
      <Header
        title="RESULTADO"
        leftComponent={
          <TouchableOpacity onPress={goBack} activeOpacity={0.8}>
            <Icon name="arrow-back" size={20} color="#fff" />
          </TouchableOpacity>
        }
      />

      <Body />

      <Footer
        text="Voltar para home"
        onPress={() => reset({ index: 1, routes: [{ name: 'home' }] })}
      />
    </>
  );
};

export { BattleResult };
