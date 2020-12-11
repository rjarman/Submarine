import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

let cordova: any;

class Index extends React.Component {
  componentDidMount() {
    let onDeviceReady = () => {
      console.log(
        'Running cordova-' + cordova.platformId + '@' + cordova.version
      );
      document.getElementById('deviceready')?.classList.add('ready');
    };
    document.addEventListener('deviceready', onDeviceReady, false);
  }

  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <div id="deviceready" className="blink">
          <p className="event listening">Connecting to Device</p>
          <p className="event received">Device is Ready</p>
        </div>
      </div>
    );
  }
}

const container = document.getElementById('root');
ReactDOM.render(<Index />, container);
