import styled from 'styled-components/native';

const Separator = styled.View`
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray};
`;

const Footer = styled.View`
  width: 100%;
  height: 80px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.black};
`;

export { Separator, Footer };
