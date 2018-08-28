import * as React from 'react';
import Button from './ui/Button';

import styled from 'react-emotion'
import Meetings from './Meetings';

const Home = styled('div')`
  padding: 8px;
`;

const TopPanelContainer = styled('div')`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TopPanel = () => {
  return <TopPanelContainer>
    <Button>Log in to use all stuff</Button>
  </TopPanelContainer>;
}

export default () => {
  return <Home>
    <TopPanel />
    <Meetings />
  </Home>
};
