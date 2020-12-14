import React from 'react';
import './Controller.scss';
import { Fab } from './Fab';
import { Video } from './Video';
import { ControllerEvent } from '../../libs/typings/Typings';

export class Controller extends React.Component {
  componentDidMount() {
    new ControllerEvent();
  }

  render() {
    return (
      <div className="controller-container">
        <Video />
        <Fab />
      </div>
    );
  }
}
