import styled from 'styled-components/native';

interface IDescription {
  hasError?: boolean;
}

const Container = styled.View`
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.black};
`;

const Title = styled.Text`
  font-size: ${({ theme }) => theme.fonts.large};
  color: ${({ theme }) => theme.colors.white};
`;

const Description = styled.View<IDescription>`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 8px;
  ${({ hasError, theme }) =>
    hasError &&
    `
    border-top-width: 1px;
    border-top-color: ${theme.colors.red};
  `}
`;

const Text = styled.Text`
  font-size: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;

export { Container, Title, Description, Text };
