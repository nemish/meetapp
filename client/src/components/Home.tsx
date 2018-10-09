import * as React from "react";
import NavBar from "@src/components/NavBar";
import styled from "react-emotion";
import Meetings from "./Meetings";
import Map from "@ui/Map";
import { NAV_HEIGHT } from "@ui/constants";
import { DimensionsProvider, withDimensions } from "@src/utils/dimensions";

const Container = styled("div")`
  background-color: #f06449;
  // background-color: #e55812;
`;

const AppContainer = styled("div")`
  padding-top: ${NAV_HEIGHT}px;
  overflow: hidden;
  display: flex;
`;

const MapContainer = styled("div")`
  flex-basis: 50%;
  position: relative;
`;

const MeetingsContainer = styled("div")`
  padding: 8px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-basis: 50%;
  height: 100vh;
  overflow-y: scroll;
`;

// width: ${({ windowWidth }: any) =>
//   windowWidth ? `${windowWidth * 2}px` : "100%"};

interface IDimensions {
  dimensions: {
    width: number;
    height: number;
  };
}
class Home extends React.Component<IDimensions> {
  render() {
    console.log(this.props);
    return (
      <DimensionsProvider>
        <Container>
          <NavBar />
          <AppContainer>
            <MeetingsContainer>
              <Meetings />
            </MeetingsContainer>
            <MapContainer>
              <Map latitude={36} longtitude={55} id="1" />
            </MapContainer>
          </AppContainer>
        </Container>
      </DimensionsProvider>
    );
  }
}
export default withDimensions(Home);
