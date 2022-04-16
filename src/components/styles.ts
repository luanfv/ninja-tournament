import styled from 'styled-components/native';

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

export { Body, Separator };
