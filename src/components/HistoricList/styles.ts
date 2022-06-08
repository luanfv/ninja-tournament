import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import LottieView from 'lottie-react-native';

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

export { Title, NotFound, NotFoundAnimation };
