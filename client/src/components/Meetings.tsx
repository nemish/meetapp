import * as React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

import styled from 'react-emotion'

const MeetingsContainer = styled('div')`
  padding: 16px;
`;

const MeetingsQuery = gql`
  query GetMeetings{
    meetings {
      id
      name
    }
  }
`;

interface IMeeting {
  id: string;
  name: string;
}

const Meetings = () => (
  <Query query={MeetingsQuery}>
  {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      const meetings = data.meetings.map(
        (props: IMeeting) => <Meeting {...props} />
      );

      return <MeetingsContainer>
        {meetings}
      </MeetingsContainer>
  }}  
  </Query>
);

const MeetingWrapper = styled('div')`
  padding: 16px;
  display: flex;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin: 4px
`;

const Meeting = (props: IMeeting) => (
  <MeetingWrapper>
    <span>{props.name}</span>
  </MeetingWrapper>
);

export default Meetings;
