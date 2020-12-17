import React from 'react';
import './Map.scss';
import * as mapLoading from '../../../assets/img/mapLoading.gif';
import { MapEvent, Service } from '../../libs/typings/Typings';
import { InfoWindow } from './InfoWindow';

export class Map extends React.Component<{ service: Service }> {
  componentDidMount() {
    new MapEvent(this.props.service);
  }

  render() {
    return (
      <div className="map-container">
        <div className="map-loading">
          <img src={mapLoading.default} width="100%" height="100%" />
          tracking the submarine...
        </div>
        <div id="googleMap" className="google-map"></div>
      </div>
    );
  }
}
