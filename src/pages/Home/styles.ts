import { FlatList, FlatListProps } from 'react-native';
import styled from 'styled-components/native';

import { IShinobi } from '../../@types';

const Separator = styled.View`
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray};
`;

const Container = styled.View`
  margin: 20px 0;
`;

const List = styled(
  FlatList as new (props: FlatListProps<IShinobi>) => FlatList<IShinobi>,
)`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Footer = styled.View`
  width: 100%;
  height: 80px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.black};
`;

const Spacing = styled.View`
  margin-bottom: 40px;
`;

export { Separator, List, Container, Footer, Spacing };
