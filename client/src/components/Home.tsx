import * as React from 'react';
import NavBar from '@ui/NavBar';
import styled from 'react-emotion'
import Meetings from './Meetings';
import { pure } from 'recompose';
import { NAV_HEIGHT } from '@ui/constants';

const Container = styled('div')`
  background-color: #E55812;
`;

const AppContainer = styled('div')`
  padding: 8px;
  padding-top: ${NAV_HEIGHT}px;
`;

export default class Home extends React.Component<{}, {counter: number}> {
  render() {
    return <Container>
      <NavBar />
      <AppContainer>
        <Meetings />
      </AppContainer>
    </Container>;
  }
};
