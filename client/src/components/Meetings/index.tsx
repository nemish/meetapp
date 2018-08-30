import * as React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Meeting, { MEETING_FRAGMENT } from '@src/components/Meetings/Item';
import { pure } from 'recompose';

import styled from 'react-emotion'

const MeetingsContainer = styled('div')`
  padding: 0;
`;

const MeetingsQuery = gql`
  query GetMeetings{
    meetings {
      ...MeetingFragment
    }
  }
  ${MEETING_FRAGMENT}
`;

interface IMeeting {
  id: string;
  name: string;
}

const Meetings = pure(() => (
  <Query query={MeetingsQuery}>
  {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      const meetings = data.meetings.map(
        (props: IMeeting) => <Meeting key={props.id} {...props} />
      );

      return <MeetingsContainer>
        {meetings}
      </MeetingsContainer>
  }}  
  </Query>
));

export default Meetings;
