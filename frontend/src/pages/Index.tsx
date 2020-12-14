import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import { Backdrop } from './components/Backdrop';
import { Sidebar } from './components/Sidebar';
import { IndexEvent } from './libs/typings/Typings';
import { About } from './components/About';
import { Controller } from './components/controller/Controller';
import { Tabs } from './components/Tabs';

class Index extends React.Component {
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
        <Tabs />
      </>
    );
  }
}

const container = document.getElementById('root');
ReactDOM.render(<Index />, container);
