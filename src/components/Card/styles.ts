import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.black};
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Image = styled.Image`
  width: 120px;
  height: 120px;
  background-color: ${({ theme }) => theme.colors.black};
`;

const Details = styled.View`
  flex: 1;
`;

const Name = styled.Text`
  padding: 4px;
  background-color: ${({ theme }) => theme.colors.black};
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
