import styled from 'styled-components/native';

const Container = styled.View`
  width: 100%;
  height: 80px;
  padding: ${({ theme }) => theme.spacing}px;
  background-color: ${({ theme }) => theme.colors.black};
`;

export { Container };
