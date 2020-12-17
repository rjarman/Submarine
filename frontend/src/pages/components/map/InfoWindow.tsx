import React from 'react';
import './InfoWindow.scss';
import * as logo from '../../../assets/img/logo.jpg';
import { InfoWindowData } from '../../libs/typings/Typings';

export class InfoWindow extends React.Component<InfoWindowData> {
  render() {
    return (
      <div className="info-window__container">
        <div className="info-window__logo">
          <img src={logo.default} alt="submarine_logo" />
        </div>
        <div className="info-window__details">
          <ul className="info-window__details-items">
            <li>
              <ul className="info-window__details-item">
                <li>Latitude: </li>
                <li>{this.props.latitude}°</li>
              </ul>
            </li>
            <li>
              <ul className="info-window__details-item">
                <li>Longitude: </li>
                <li>{this.props.longitude}°</li>
              </ul>
            </li>
            <li>
              <ul className="info-window__details-item">
                <li>Altitude: </li>
                <li>{this.props.altitude}m</li>
              </ul>
            </li>
            <li>
              <ul className="info-window__details-item">
                <li>Distance: </li>
                <li>{this.props.distance}m</li>
              </ul>
            </li>
            <li>
              <ul className="info-window__details-item">
                <li>GPS Time: </li>
                <li>{this.props.gpsTime}</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="info-window__date">{this.props.gpsDate}</div>
      </div>
    );
  }
}
