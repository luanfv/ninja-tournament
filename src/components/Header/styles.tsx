import styled from 'styled-components/native';

const Container = styled.View`
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.black};
`;

const Text = styled.Text`
  font-size: ${({ theme }) => theme.fonts.large};
  color: ${({ theme }) => theme.colors.white};
`;

export { Container, Text };
