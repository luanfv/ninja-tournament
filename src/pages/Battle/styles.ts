import styled from 'styled-components/native';

const Container = styled.View`
  margin: ${({ theme }) => theme.spacing}px;
`;

const Footer = styled.View`
  width: 100%;
  height: 80px;
  padding: ${({ theme }) => theme.spacing}px;
  background-color: ${({ theme }) => theme.colors.black};
  position: absolute;
  bottom: 0;
`;

const Spacing = styled.View`
  margin: ${({ theme }) => theme.spacing * 2}px;
`;

export { Container, Footer, Spacing };
