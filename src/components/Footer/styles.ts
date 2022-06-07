import { Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

const iOS = Platform.OS === 'ios';

const Container = styled.View`
  width: 100%;
  height: ${({ theme }) => (iOS ? theme.spacing * 5.5 : theme.spacing * 4)}px;
  padding: ${({ theme }) => RFValue(theme.spacing)}px;
  background-color: ${({ theme }) => theme.colors.primary};

  ${({ theme }) => iOS && `padding-bottom: ${theme.spacing * 2.5}px;`}
`;

export { Container };
