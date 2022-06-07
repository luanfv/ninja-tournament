import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface IDescription {
  hasError?: boolean;
}

interface IDynamicComponent {
  aligm: 'left' | 'right';
}

const Container = styled.View`
  width: 100%;
  padding: ${({ theme }) => RFValue(theme.spacing)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  flex-direction: row;
  justify-content: space-between;

  ${({ theme }) =>
    Platform.OS === 'ios' && `padding-top: ${theme.spacing * 2.5}px;`}
`;

const DynamicComponent = styled.View<IDynamicComponent>`
  width: 50px;
  align-items: ${({ aligm }) => (aligm === 'left' ? 'flex-start' : 'flex-end')};
`;

const Title = styled.Text`
  font-size: ${({ theme }) => RFValue(theme.fonts.large)}px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;

const Description = styled.View<IDescription>`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 8px;
  ${({ hasError, theme }) =>
    hasError &&
    css`
      border-top-width: 1px;
      border-top-color: ${theme.colors.red};
    `}
`;

const Text = styled.Text`
  font-size: ${({ theme }) => RFValue(theme.fonts.medium)}px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;

export { Container, DynamicComponent, Title, Description, Text };
