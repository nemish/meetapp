import * as React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { css } from "emotion";
import Meeting, { MEETING_FRAGMENT } from "@src/components/Meetings/Item";
import { pure, compose, lifecycle, withState } from "recompose";
import { getRandomInt } from "@src/utils";

import styled from "react-emotion";

const MeetingsQuery = gql`
  query GetMeetings {
    meetings {
      ...MeetingFragment
    }
  }
  ${MEETING_FRAGMENT}
`;

interface IMeeting {
  id: string;
  name: string;
  description: string;
}
// const GRID_MIN = 8 * 10;

// const gridWidth = () => {
//   return (
//     Math.floor(getRandomInt(GRID_MIN, GRID_MIN * getRandomInt(1, 4)) / 16) * 16
//   );
// };

const Meetings = pure(() => (
  <Query query={MeetingsQuery}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      const meetings = data.meetings.map((props: IMeeting, i: number) => {
        return <Meeting key={props.id} size={getRandomInt(1, 2)} {...props} />;
      });

      return <React.Fragment>{meetings}</React.Fragment>;
    }}
  </Query>
));

export default Meetings;
