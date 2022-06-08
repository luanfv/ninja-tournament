import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Container = styled.TouchableOpacity`
  width: 100%;
  padding: ${({ theme }) => RFValue(theme.spacing)}px;
  background-color: ${({ theme }) => theme.colors.white};
  flex-direction: row;
`;

const Icon = styled(Ionicons)`
  font-size: ${({ theme }) => RFValue(theme.fonts.large * 2)}px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;

const Description = styled.View`
  margin-left: ${({ theme }) => RFValue(theme.spacing)}px;
  padding-right: ${({ theme }) => RFValue(theme.spacing * 2)}px;
`;

const Title = styled.Text`
  font-size: ${({ theme }) => RFValue(theme.fonts.large)}px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  margin-bottom: ${({ theme }) => RFValue(theme.spacing / 4)}px;
`;

const Message = styled.Text`
  font-size: ${({ theme }) => theme.fonts.small}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export { Container, Icon, Description, Title, Message };
