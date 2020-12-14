import React from 'react';
import './Video.scss';
import * as videoCover from '../../../assets/img/logo.jpg';
import * as video from '../../../assets/video/video.mp4';

export class Video extends React.Component {
  render() {
    return (
      <div className="video-container">
        <div className="container-body__display-meter">
          <div>
            <p>TOD:</p>
            <em>10u</em>
          </div>
          <div>
            <p>Speed: </p>
            <em>
              5ms<sup>-1</sup>
            </em>
          </div>
          <div>
            <p>Altitude:</p>
            <em>1052m</em>
          </div>
          <div>
            <p>Latitude: </p>
            <em>22.9659°</em>
          </div>
          <div>
            <p>Longitude: </p>
            <em>89.8173°</em>
          </div>
          <div>
            <p>Battery Voltage:</p>
            <em>12v</em>
          </div>
        </div>
        <video
          loop
          muted
          autoPlay
          poster={videoCover.default}
        >
          <source src={video.default} type="video/mp4" />
        </video>
      </div>
    );
  }
}
