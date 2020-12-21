import React from 'react';
import './Video.scss';
import * as videoCover from '../../../assets/img/logo.jpg';
import * as video from '../../../assets/video/video.mp4';
import * as imageThumbnail from '../../../assets/img/image.svg';
import * as capture from '../../../assets/img/capture.svg';
import * as fullscreen from '../../../assets/img/fullscreen.svg';
import * as exitFullscreen from '../../../assets/img/exit-fullscreen.svg';
import { VideoEvent } from '../../libs/typings/Typings';

export class Video extends React.Component {
  componentDidMount() {
    new VideoEvent();
  }

  render() {
    return (
      <div className="video-container" id="videoContainer">
        <div className="video-container__btn-list">
          <ul className="video-container__btn-types">
            <li id="imageListBtn">
              <img src={imageThumbnail.default} alt="img_thumbnail" />
            </li>
            <li id="captureBtn">
              <img src={capture.default} alt="capture_img" />
            </li>
            <li id="fullscreenBtn">
              <img src={fullscreen.default} alt="fullscreen_img" />
            </li>
          </ul>
        </div>
        <video
          loop
          muted
          autoPlay
          poster={videoCover.default}
          id="videoTabsVideo"
          className="video-tabs__video"
        >
          <source src={video.default} type="video/mp4" />
        </video>
        <div className="video-container__exit-fullscreen">
          <img src={exitFullscreen.default} alt="exit_fullscreen" />
        </div>
      </div>
    );
  }
}
