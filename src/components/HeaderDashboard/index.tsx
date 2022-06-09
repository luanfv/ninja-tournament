import React from 'react';

import { IHeaderDashboard } from '@src/@types/components';
import { MenuList } from '@src/components/MenuList';
import { Container, Options, Welcome, WelcomeText } from './styles';

const HeaderDashboard: React.FC<IHeaderDashboard> = ({
  text1,
  text2,
  menuItems,
}) => {
  return (
    <Container>
      <Welcome>
        <WelcomeText>{text1}</WelcomeText>
        <WelcomeText bold>{text2}</WelcomeText>
      </Welcome>

      <Options>
        <MenuList items={menuItems} />
      </Options>
    </Container>
  );
};

export { HeaderDashboard };
