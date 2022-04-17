import { Platform } from 'react-native';
import styled from 'styled-components/native';

const iOS = Platform.OS === 'ios';

const Container = styled.View`
  width: 100%;
  height: ${({ theme }) => (iOS ? theme.spacing * 5.5 : theme.spacing * 4)}px;
  padding: ${({ theme }) => theme.spacing}px;
  background-color: ${({ theme }) => theme.colors.black};

  ${({ theme }) => iOS && `padding-bottom: ${theme.spacing * 2.5}px;`}
`;

export { Container };
