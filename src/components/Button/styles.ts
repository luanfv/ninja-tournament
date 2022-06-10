import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface IContainer {
  disabled: boolean;
}

const Container = styled.TouchableOpacity<IContainer>`
  flex: 1;
  padding: 8px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray : theme.colors.secondary};
`;

const Text = styled.Text`
  font-size: ${({ theme }) => RFValue(theme.fonts.large)}px;
  color: ${({ theme }) => theme.colors.white};
`;

export { Container, Text };
