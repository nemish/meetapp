import * as React from 'react';
import styled from 'react-emotion'
import * as mapbox from 'mapbox-gl';

const ACCESS_TOKEN = 'pk.eyJ1Ijoicm9uaG92YXJkIiwiYSI6ImNqbGU2YmszMDA5N2YzcXVmNGF6bnB1bDYifQ.AU12XYgFwMu08Jue4-O0lA';
Object.getOwnPropertyDescriptor(mapbox, "accessToken").set(ACCESS_TOKEN);

const MapComponent = styled('div')`
  margin: 10px 0;
  height: 200px;
  width: 100%;
  border-radius: 3px;
`;

interface IMapProps {
  id: string;
}

export default class Map extends React.PureComponent<IMapProps> {
  componentDidMount() {
    const COORDS = [37, 55];
    const map = new mapbox.Map({
      container: this.getElementId(),
      style: 'mapbox://styles/mapbox/streets-v10',
      center: COORDS,
      zoom: 8
    });
    const marker = new mapbox.Marker({
      draggable: true
    })
      .setLngLat(COORDS)
      .addTo(map);
  }

  getElementId() {
    return `map-container-${this.props.id}`;
  }

  render() {
    return <MapComponent id={this.getElementId()} />
  }
}
