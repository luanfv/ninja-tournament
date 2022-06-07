import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

const Body = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Separator = styled.View`
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray};
`;

const Title = styled.Text`
  font-size: ${({ theme }) => RFValue(theme.fonts.large)}px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;

const Spacing = styled.View`
  margin: ${({ theme }) => RFValue(theme.spacing)}px;
`;

export { Body, Separator, Title, Spacing };
