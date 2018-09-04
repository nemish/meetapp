import * as React from "react";
import gql from "graphql-tag";
import { css } from "emotion";
import { Text, Title3 } from "@ui/Typography";
import { PureButton } from "@ui/Button";
import { pure, compose, withState, withHandlers } from "recompose";
import Map from "@ui/Map";
import { getRandomInt } from "@src/utils";

import styled from "react-emotion";

export const MEETING_FRAGMENT = gql`
  fragment MeetingFragment on Meeting {
    id
    name
    description
  }
`;

interface IMeeting {
  id: string;
  name: string;
}

const meetingWrapperStyle = (props: { full: boolean }) => css`
  ${`flex: ${getRandomInt(1, 2)}`};
`;

const MeetingWrapper = styled("div")`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 3px;
  background: #fff;
  margin: 8px;
`;

interface IMeeting {
  id: string;
  name: string;
  description: string;
  full?: boolean;
}

interface IToggle {
  show: boolean;
  onToggle(): void;
}

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const Title = styled(Title3.withComponent(PureButton))`
  font-weight: 700;
`;

const Meeting = pure((props: IMeeting & IToggle) => {
  const { id, name, description, show, onToggle, full } = props;
  return (
    <MeetingWrapper className={meetingWrapperStyle({ full })}>
      <Title onClick={onToggle}>{capitalizeFirstLetter(name)}</Title>
      {show && (
        <React.Fragment>
          <Map id={id} />
          <Text>{description}</Text>
        </React.Fragment>
      )}
    </MeetingWrapper>
  );
});

const enhance = compose(
  withState("show", "toggle", false),
  withHandlers({
    onToggle: (props: { show: boolean; toggle(isShow: boolean): any }) => () =>
      props.toggle(!props.show)
  })
);

export default enhance(Meeting);
