import * as React from "react";
import gql from "graphql-tag";
import { css } from "emotion";
import { Text, Title3 } from "@ui/Typography";
import { Button, PureButton } from "@ui/Button";
import { DefaultLink } from "@ui/Link";
import { withGlobalState, IGlobalProps } from "@src/utils/event";
import {
  pure,
  compose,
  withState,
  withHandlers,
  withProps,
  defaultProps,
  lifecycle
} from "recompose";
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

const meetingWrapperStyle = ({ size }: { size: number }) => css``;

const MeetingWrapper = styled("div")`
  padding: 8px;
  background: #fff;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.3);
  margin: 8px;
  flex-basis: 300px;
`;

interface IMeeting {
  id: string;
  name: string;
  description: string;
}

interface ICard {
  show: boolean;
  onToggle(): void;
  size?: number;
  modalOpened?: boolean;
}

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const Title = styled(Title3.withComponent(PureButton))`
  font-weight: 700;
  text-align: left;
`;

const ButtonContainer = styled(DefaultLink)`
  display: flex;
  justify-content: flex-end;
  margin: 8px 0;
`;

const Meeting = pure((props: IMeeting & ICard) => {
  const { id, name, description, show, onToggle, size, modalOpened } = props;
  return (
    <MeetingWrapper className={meetingWrapperStyle({ size })}>
      <Title onClick={onToggle}>{capitalizeFirstLetter(name)}</Title>
      {show &&
        !modalOpened && (
          <React.Fragment>
            {/* <Map
              latitude={37 + getRandomInt(0, 10)}
              longtitude={55 + getRandomInt(0, 10)}
              id={id}
            /> */}
            <Text>{description}</Text>
            <ButtonContainer>
              <Button>Jump to "{name.substr(0, 10)}"</Button>
            </ButtonContainer>
          </React.Fragment>
        )}
    </MeetingWrapper>
  );
});

interface ISize {
  size?: number;
  modalOpened?: boolean;
}

const enhance = compose<ISize, any>(
  withGlobalState(({ modalOpened }: IGlobalProps) => {
    return {
      modalOpened
    };
  }),
  withState("show", "toggle", false),
  withHandlers({
    onToggle: (props: { show: boolean; toggle(isShow: boolean): any }) => () =>
      props.toggle(!props.show)
  })
);

export default enhance(Meeting);
