import styled from 'styled-components/native';

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
  font-size: ${({ theme }) => theme.fonts.large};
  color: ${({ theme }) => theme.colors.white};
`;

export { Container, Text };
