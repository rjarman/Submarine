import React from 'react';
import { links } from '../libs/Config';
import { IconComponent } from '../libs/typings/Typings';
import './Sidebar.scss';
import { Socials } from './Socials';

export class Sidebar extends React.Component {
  private iconComponent: IconComponent;

  constructor(props: {}) {
    super(props);
    this.iconComponent = new IconComponent();
  }

  render() {
    return (
      <>
        <div className="btn-menu" id="menuBtn">
          {this.iconComponent.menu()}
        </div>
        <aside className="sidebar">
          <div className="sidebar__cover-img"></div>
          <ul className="sidebar__btns sidebar__btns--left">
            <li className="sidebar__btn">
              <a href="#">Download</a>
            </li>
            <li className="sidebar__btn">
              <a href={'mailto:' + links.help}>Help</a>
            </li>
            <li className="sidebar__btn">
              <a href={links.developer}>Developer</a>
            </li>
          </ul>
          <ul className="sidebar__btns sidebar__btns--right">
            <li className="sidebar__btn">
              <a href={links.blog}>Blog</a>
            </li>
            <li className="sidebar__btn social-btn" id="social-btn">
              Socials
              <Socials />
            </li>

            <li className="sidebar__btn">
              <a href={links.donate}>Donate</a>
            </li>
          </ul>
          <ul className="sidebar__btns sidebar__btns--center">
            <li className="sidebar__btn">
              <a href="#" id="aboutBtn">
                About
              </a>
            </li>
          </ul>
        </aside>
      </>
    );
  }
}
