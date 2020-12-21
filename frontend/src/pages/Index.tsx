import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import { Backdrop } from './components/Backdrop';
import { Sidebar } from './components/Sidebar';
import { IndexEvent, Service } from './libs/typings/Typings';
import { About } from './components/About';
import { Controller } from './components/controller/Controller';
import { Map } from './components/map/Map';
import { Tabs } from './components/Tabs';
import { Chat } from './components/chat/Chat';
import { Video } from './components/video/Video';
import { ListModel } from './components/video/ListModel';

class Index extends React.Component {
  private service: Service;

  constructor(props: {}) {
    super(props);
    this.service = new Service();
  }

  componentDidMount() {
    new IndexEvent();
  }

  render() {
    return (
      <>
        <Backdrop />
        <Sidebar />
        <About />
        <Controller />
        <Map service={this.service} />
        <Chat service={this.service} />
        <Video />
        <ListModel />
        <Tabs />
      </>
    );
  }
}

const container = document.getElementById('root');
ReactDOM.render(<Index />, container);
