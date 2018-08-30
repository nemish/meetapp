import * as React from 'react';
import gql from "graphql-tag";
import { Text } from '@ui/Typography';
import {
  pure,
  compose,
  withState,
  withHandlers,
} from 'recompose';
import Map from '@ui/Map';

import styled from 'react-emotion'

export const MEETING_FRAGMENT = gql`
  fragment MeetingFragment on Meeting {
    id
    name
  }
`;

interface IMeeting {
  id: string;
  name: string;
}

const MeetingWrapper = styled('div')`
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin: 8px 0;
  background: #fff;
`;

interface IMeeting {
  id: string;
  name: string;
}

interface IToggle {
  show: boolean;
  onToggle() : void;
}

const Meeting = pure((props: IMeeting & IToggle) => {
  const { id, name, show, onToggle } = props;
  return <MeetingWrapper>
    <Text onClick={onToggle}>{name}</Text>
    {show && <Map id={id} />}
  </MeetingWrapper>;
});

const enhance = compose(
  withState('show', 'toggle', false),
  withHandlers({
    onToggle: (props: {show: boolean, toggle(isShow : boolean): any}) => () => props.toggle(!props.show)
  })
);

export default enhance(Meeting);
