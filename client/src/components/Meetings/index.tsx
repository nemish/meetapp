import * as React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { css } from "emotion";
import Meeting, { MEETING_FRAGMENT } from "@src/components/Meetings/Item";
import { pure } from "recompose";
import { getRandomInt } from "@src/utils";

import styled from "react-emotion";

const MeetingsContainer = styled("div")`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

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
const GRID_MIN = 8 * 10;

const gridWidth = () => {
  return (
    Math.floor(getRandomInt(GRID_MIN, GRID_MIN * getRandomInt(1, 4)) / 16) * 16
  );
};

export const splitItemsList = (items: IMeeting[], config?: any) => {
  const chunks = [];
  const { size = 3, random = false } = config || {};
  let current = 0;
  let chunkSize = size;
  if (random) {
    chunkSize = getRandomInt(1, size);
  }
  while (current < items.length) {
    chunks.push(items.slice(current, current + chunkSize));
    current += chunkSize;
    if (random) {
      chunkSize = getRandomInt(1, size);
    }
  }
  return chunks;
};

const MeetingsWrapper = styled("div")`
  flex-basis: 100%;
  display: flex;
`;

const Meetings = pure(() => (
  <Query query={MeetingsQuery}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      console.log("meetings", data.meetings);
      const meetings = splitItemsList(data.meetings, {
        random: true,
        size: 4
      }).map((items: IMeeting[], index: number) => {
        return (
          <MeetingsWrapper key={index}>
            {items.map((props: IMeeting, i: number) => {
              return <Meeting key={props.id} {...props} />;
            })}
          </MeetingsWrapper>
        );
        return;
      });

      return <MeetingsContainer>{meetings}</MeetingsContainer>;
    }}
  </Query>
));

export default Meetings;
