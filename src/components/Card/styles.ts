import styled from 'styled-components/native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

interface ICard {
  isSelected: boolean;
  margin?: number;
  isLoaded?: boolean;
}

interface IText {
  color?: 'white' | 'black';
}

const Container = styled.TouchableOpacity<ICard>`
  border-width: 1px;
  border-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.secondary : theme.colors.primary};
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.white};

  ${({ theme, margin }) => margin && `margin: ${theme.spacing * margin}px`};
`;

const Header = styled.View`
  align-items: flex-end;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0 8px;
`;

const Row = styled.View`
  flex-direction: row;
`;

const Image = styled.Image<ICard>`
  width: 120px;
  height: 120px;
  ${({ isLoaded }) => !isLoaded && 'width: 0px; height: 0px;'}
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
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.secondary : theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.large};
  /* text-transform: uppercase; */
  font-weight: bold;
`;

const Points = styled.View`
  padding: 4px;
`;

const Text = styled.Text<IText>`
  font-size: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme, color = 'black' }) => theme.colors[color]};
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
