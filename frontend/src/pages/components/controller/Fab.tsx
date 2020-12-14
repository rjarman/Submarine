import React from 'react';
import { IconComponent } from '../../libs/typings/Typings';
import './Fab.scss';

export class Fab extends React.Component {
  private iconComponent: IconComponent;

  constructor(props: {}) {
    super(props);
    this.iconComponent = new IconComponent();
  }

  render() {
    return (
      <div className="fab-container">
        <input id="fabCheckbox" type="checkbox" className="fab-checkbox" />
        <label className="fab-btn" htmlFor="fabCheckbox">
          <span className="fab-btn__dots fab-btn__dot-1"></span>
          <span className="fab-btn__dots fab-btn__dot-2"></span>
          <span className="fab-btn__dots fab-btn__dot-3"></span>
        </label>
        <div className="fab-btn__options">
          <a className="fab-btn__option fab-btn__option-1" id="controlRight">
            {this.iconComponent.right()}
          </a>
          <a className="fab-btn__option fab-btn__option-2" id="controlDown">
            {this.iconComponent.down()}
          </a>
          <a
            className="fab-btn__option fab-btn__option-3"
            id="controlFastForward"
          >
            {this.iconComponent.forwardBoost()}
          </a>
          <a className="fab-btn__option fab-btn__option-4" id="controlUp">
            {this.iconComponent.up()}
          </a>
          <a className="fab-btn__option fab-btn__option-5" id="controlLeft">
            {this.iconComponent.left()}
          </a>
        </div>
      </div>
    );
  }
}
