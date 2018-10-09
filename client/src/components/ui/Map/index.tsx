import * as React from "react";
import styled from "react-emotion";
import * as mapbox from "mapbox-gl";
import { getRandomInt } from "@src/utils";
import { compose, lifecycle, withState } from "recompose";

const ACCESS_TOKEN =
  "pk.eyJ1Ijoicm9uaG92YXJkIiwiYSI6ImNqbGU2YmszMDA5N2YzcXVmNGF6bnB1bDYifQ.AU12XYgFwMu08Jue4-O0lA";
Object.getOwnPropertyDescriptor(mapbox, "accessToken").set(ACCESS_TOKEN);

interface IMapProps {
  id: string;
  latitude: number;
  longtitude: number;
}

interface IDimension {
  setWindowHeight?: (width: number) => void;
  windowHeight: number;
}

const MapComponent = styled("div")`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: ${({ windowHeight }: IDimension) => `${windowHeight - 48}px`};
`;

class Map extends React.PureComponent<IMapProps & IDimension, {}> {
  marker = new mapbox.Marker({
    draggable: true
  });

  map: any = null;

  componentDidMount() {
    const { latitude, longtitude } = this.props;
    const COORDS = [latitude, longtitude];
    this.map = new mapbox.Map({
      container: this.getElementId(),
      style: "mapbox://styles/mapbox/streets-v10",
      zoom: 8
    });
    this.map.setCenter(COORDS);
    this.marker.setLngLat(COORDS).addTo(this.map);
    // setInterval(() => {
    // const center = [
    //   latitude + getRandomInt(33, 98) / 100,
    //   longtitude + getRandomInt(33, 100) / 100
    // ];
    // this.marker.setLngLat(center);
    // this.map.flyTo({
    //   center
    // });
    // }, 3000);
  }

  componentWillReceiveProps({ latitude, longtitude }: IMapProps) {
    this.marker.setLngLat([latitude, longtitude]);
  }

  getElementId() {
    return `map-container-${this.props.id}`;
  }

  render() {
    const { windowHeight } = this.props;
    console.log("Map", windowHeight);
    return (
      <MapComponent windowHeight={windowHeight} id={this.getElementId()} />
    );
  }
}

const enhance = compose(
  withState("windowHeight", "setWindowHeight", window.innerHeight),
  lifecycle<IMapProps & IDimension, {}>({
    componentDidMount() {
      this.props.setWindowHeight(window.innerHeight);
    }
  })
);

export default enhance(Map) as React.ComponentType<IMapProps>;
