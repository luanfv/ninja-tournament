import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface ICard {
  isMain?: boolean;
}

const Container = styled.TouchableOpacity<ICard>`
  width: ${RFValue(300)}px;
  height: ${RFValue(150)}px;
  padding: ${({ theme }) => RFValue(theme.spacing)}px;
  margin: ${({ theme }) => RFValue(theme.spacing)}px;
  background-color: ${({ theme, isMain }) =>
    isMain ? theme.colors.secondary : theme.colors.white};
  border-radius: 5px;
  flex-direction: row;
`;

const Icon = styled(Ionicons)<ICard>`
  font-size: ${({ theme }) => RFValue(theme.fonts.large * 2)}px;
  color: ${({ theme, isMain }) =>
    isMain ? theme.colors.white : theme.colors.primary};
  font-weight: bold;
`;

const Description = styled.View`
  margin-left: ${({ theme }) => RFValue(theme.spacing)}px;
  padding-right: ${({ theme }) => RFValue(theme.spacing)}px;
`;

const Title = styled.Text<ICard>`
  font-size: ${({ theme }) => RFValue(theme.fonts.large)}px;
  color: ${({ theme, isMain }) =>
    isMain ? theme.colors.white : theme.colors.primary};
  font-weight: bold;
  margin-bottom: ${({ theme }) => RFValue(theme.spacing / 2)}px;
`;

const Message = styled.Text<ICard>`
  font-size: ${({ theme }) => theme.fonts.small}px;
  color: ${({ theme, isMain }) =>
    isMain ? theme.colors.white : theme.colors.primary};
`;

export { Container, Icon, Description, Title, Message };
