import React from 'react';
import { links } from '../libs/Config';
import './Socials.scss';

export class Socials extends React.Component {
  render() {
    return (
      <div className="social-options">
        <a href={links.social.github}>Github</a>
        <div className="hr-item"></div>
        <a href={links.social.gitkraken}>Gitkraken</a>
        <div className="hr-item"></div>
        <a href={links.social.linkedin}>Linkedin</a>
        <div className="hr-item"></div>
        <a href={links.social.facebook}>Facebook</a>
        <div className="hr-item"></div>
        <a href={links.social.twitter}>Twitter</a>
      </div>
    );
  }
}
