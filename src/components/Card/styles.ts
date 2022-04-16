import styled from 'styled-components/native';

interface ICard {
  isSelected: boolean;
  margin?: number;
}

const Container = styled.TouchableOpacity<ICard>`
  flex-direction: row;
  border-width: 1px;
  border-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.green : theme.colors.black};
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.white};

  ${({ theme, margin }) => margin && `margin: ${theme.spacing * margin}px`};
`;

const Image = styled.Image<ICard>`
  width: 120px;
  height: 120px;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.green : theme.colors.black};
`;

const Details = styled.View`
  flex: 1;
`;

const Name = styled.Text<ICard>`
  padding: 4px;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.green : theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.large};
  text-transform: uppercase;
`;

const Points = styled.View`
  padding: 4px;
`;

const Text = styled.Text`
  font-size: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.black};
`;

export { Container, Image, Details, Name, Points, Text };
