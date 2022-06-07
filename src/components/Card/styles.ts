import styled from 'styled-components/native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';

interface ICard {
  isSelected: boolean;
  margin?: number;
  isLoaded?: boolean;
}

const Container = styled(LinearGradient)<ICard>`
  overflow: hidden;
  border-width: 1px;
  border-radius: 40px;
  border-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.secondary : theme.colors.primary};
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.secondary : theme.colors.primary};

  ${({ theme, margin }) => margin && `margin: ${theme.spacing * margin}px`};
`;

const Header = styled.View`
  align-items: flex-end;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0 40px;
`;

const Row = styled.View`
  flex-direction: row;
`;

const Image = styled.Image<ICard>`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  ${({ isLoaded }) => !isLoaded && 'width: 0px; height: 0px;'}

  margin: 10px;
`;

const ImageLoading = styled(ShimmerPlaceHolder)`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin: 10px;
`;

const Details = styled.View`
  flex: 1;
`;

const Name = styled.Text`
  padding: 4px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => RFValue(theme.fonts.large)}px;
  font-weight: bold;
`;

const Points = styled.View`
  padding: 4px;
  padding-right: ${({ theme }) => RFValue(theme.spacing)}px;
  flex-direction: row;
  justify-content: space-between;
`;

const Point = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  font-size: ${({ theme }) => RFValue(theme.fonts.medium)}px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  margin: auto 4px;
`;

export {
  Container,
  Header,
  Row,
  Image,
  Details,
  Name,
  Points,
  Point,
  Text,
  ImageLoading,
};
