import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface IWelcomeText {
  bold?: boolean;
}

const Container = styled.View`
  width: 100%;
  height: ${RFValue(215)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${RFValue(50)}px;
`;

const Options = styled.View`
  position: absolute;
  top: ${RFValue(90)}px;
`;

const Welcome = styled.View`
  width: 100%;
  height: ${RFValue(80)}px;
  padding: ${({ theme }) => RFValue(theme.spacing)}px;
`;

const WelcomeText = styled.Text<IWelcomeText>`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => RFValue(theme.fonts.large)}px;
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `};
`;

export { Container, Options, Welcome, WelcomeText };
