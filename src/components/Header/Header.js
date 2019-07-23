import React from 'react';

import { Header } from '../../ui/Header';
import { FlexRow } from '../../ui/Flex';
import Avatar from '../Avatar';
import Logo from '../../ui/Logo';
import Navigation from '../Navigation';

const AppHeader = () => {
  return (
    <Header>
      <FlexRow justifyContent="flex-start">
        <Logo />
        <Navigation />
        <Avatar />
      </FlexRow>
    </Header>
  );
};

export default AppHeader;
