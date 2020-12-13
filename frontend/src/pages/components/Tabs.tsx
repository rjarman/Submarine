import React from 'react';
import { IconComponent } from '../libs/typings/Typings';
import './Tabs.scss';

export class Tabs extends React.Component {
  private iconComponent: IconComponent;

  constructor(props: {}) {
    super(props);
    this.iconComponent = new IconComponent();
  }
  render() {
    return (
      <div className="container-tabs">
        <div className="container-tabs__btn" id="controllerBtn">
          {this.iconComponent.controller()}
          <p>Controller</p>
        </div>
        <div className="container-tabs__btn" id="mapBtn">
          {this.iconComponent.map()}
          <p>Map</p>
        </div>
        <div className="container-tabs__btn" id="chatBtn">
          {this.iconComponent.chat()}
          <p>Chat</p>
        </div>
        <div className="container-tabs__btn" id="videoBtn">
          {this.iconComponent.video()}
          <p>Video</p>
        </div>
      </div>
    );
  }
}
