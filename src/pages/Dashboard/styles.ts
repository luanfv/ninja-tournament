import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import LottieView from 'lottie-react-native';

interface IWelcomeText {
  bold?: boolean;
}

const Header = styled.View`
  width: 100%;
  height: ${RFValue(215)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${RFValue(50)}px;
`;

const CardList = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
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

const Title = styled.Text`
  font-size: ${({ theme }) => RFValue(theme.fonts.large)}px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  margin: ${RFValue(20)}px;
  margin-top: ${RFValue(40)}px;
`;

const NotFound = styled.View`
  align-items: center;
  justify-content: center;
`;

const NotFoundAnimation = styled(LottieView)`
  width: ${RFValue(300)}px;
  margin-top: -${RFValue(20)}px;
`;

export {
  Header,
  CardList,
  Welcome,
  WelcomeText,
  Title,
  NotFound,
  NotFoundAnimation,
};
