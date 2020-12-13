import React from 'react';
import './About.scss';
import * as github from '../../assets/img/github.svg';
import * as gitkraken from '../../assets/img/gitkraken.svg';
import * as linkedin from '../../assets/img/linkedin.svg';
import * as facebook from '../../assets/img/facebook.svg';
import * as twitter from '../../assets/img/twitter.svg';

export class About extends React.Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-logo__container">
          <div className="about-logo"></div>
        </div>
        <p className="about-heading">SSD</p>
        <p className="about-caption">(Submersible Surveillance Drone)</p>
        <p className="about-version">v1.9.7a Beta</p>
        <div className="hr-item"></div>
        <div className="about-description">
          This application is specially designed for SSD(Submersible
          Surveillance Drone) hardware project. Details of everything is given
          as the link below.
        </div>
        <div>
          <div className="about-social__heading">Follow me on social media</div>
          <div className="about-social__links">
            <img src={github.default} alt="github_logo" />
            <img src={gitkraken.default} alt="gitkraken_logo" />
            <img src={linkedin.default} alt="linkedin_logo" />
            <img src={facebook.default} alt="facebook_logo" />
            <img src={twitter.default} alt="twitter_logo" />
          </div>
        </div>
      </div>
    );
  }
}
