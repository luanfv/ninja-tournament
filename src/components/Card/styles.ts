import styled from 'styled-components/native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

interface ICard {
  isSelected: boolean;
  margin?: number;
  isLoaded?: boolean;
}

interface IText {
  color?: 'white' | 'black';
}

const Container = styled(LinearGradient)<ICard>`
  border-width: 1px;
  border-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.secondary : theme.colors.primary};
  border-radius: 40px;
  /* background-color: ${({ theme }) => theme.colors.white}; */

  ${({ theme, margin }) => margin && `margin: ${theme.spacing * margin}px`};

  background-color: red;
  overflow: hidden;
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
  border-radius: 60px;
  ${({ isLoaded }) => !isLoaded && 'width: 0px; height: 0px;'}

  margin: 10px;
`;

const ImageLoading = styled(ShimmerPlaceHolder)`
  width: 120px;
  height: 120px;
`;

const Details = styled.View`
  flex: 1;
`;

const Name = styled.Text<ICard>`
  padding: 4px;
  /* background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.secondary : theme.colors.primary}; */
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.large};
  /* text-transform: uppercase; */
  font-weight: bold;
`;

const Points = styled.View`
  padding: 4px;
  padding-right: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

const Text = styled.Text<IText>`
  font-size: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;

export {
  Container,
  Header,
  Row,
  Image,
  Details,
  Name,
  Points,
  Text,
  ImageLoading,
};
