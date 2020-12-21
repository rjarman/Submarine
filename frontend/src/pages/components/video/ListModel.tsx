import React from 'react';
import './ListModel.scss';
import * as back from '../../../assets/img/back.svg';
import * as options from '../../../assets/img/options.svg';
import * as one from '../../../assets/sample_imgs/1.jpg';
import * as two from '../../../assets/sample_imgs/2.jpg';
import * as three from '../../../assets/sample_imgs/3.jpg';
import * as four from '../../../assets/sample_imgs/4.jpg';
import * as five from '../../../assets/sample_imgs/5.jpg';
import * as six from '../../../assets/sample_imgs/6.jpg';
import * as seven from '../../../assets/sample_imgs/7.jpg';
import * as eight from '../../../assets/sample_imgs/8.jpg';
import * as nine from '../../../assets/sample_imgs/9.jpg';
import * as ten from '../../../assets/sample_imgs/10.jpg';
import * as eleven from '../../../assets/sample_imgs/11.jpg';
import * as twelve from '../../../assets/sample_imgs/12.jpg';
import * as thirteen from '../../../assets/sample_imgs/13.jpg';
import * as fourteen from '../../../assets/sample_imgs/14.jpg';
import * as fifteen from '../../../assets/sample_imgs/15.jpg';
import * as sixteen from '../../../assets/sample_imgs/16.jpg';
import * as seventeen from '../../../assets/sample_imgs/17.jpg';
import * as eighteen from '../../../assets/sample_imgs/18.jpg';
import * as nineteen from '../../../assets/sample_imgs/19.jpg';
import * as twenty from '../../../assets/sample_imgs/20.jpg';

export class ListModel extends React.Component {
  render() {
    return (
      <div className="model-container">
        <div className="model-container__nav">
          <img id="modelBack" src={back.default} alt="back_btn" />
          <img id="modelOptions" src={options.default} alt="back_btn" />
        </div>
        <div className="model-options">
          <ul>
            <li id="downloadAll">Download All</li>
          </ul>
        </div>
        <div className="model-images">
          <div style={{ backgroundImage: `url(${one.default})` }}></div>
          <div style={{ backgroundImage: `url(${two.default})` }}></div>
          <div style={{ backgroundImage: `url(${three.default})` }}></div>
          <div style={{ backgroundImage: `url(${four.default})` }}></div>
          <div style={{ backgroundImage: `url(${five.default})` }}></div>
          <div style={{ backgroundImage: `url(${six.default})` }}></div>
          <div style={{ backgroundImage: `url(${seven.default})` }}></div>
          <div style={{ backgroundImage: `url(${eight.default})` }}></div>
          <div style={{ backgroundImage: `url(${nine.default})` }}></div>
          <div style={{ backgroundImage: `url(${ten.default})` }}></div>
          <div style={{ backgroundImage: `url(${eleven.default})` }}></div>
          <div style={{ backgroundImage: `url(${twelve.default})` }}></div>
          <div style={{ backgroundImage: `url(${thirteen.default})` }}></div>
          <div style={{ backgroundImage: `url(${fourteen.default})` }}></div>
          <div style={{ backgroundImage: `url(${fifteen.default})` }}></div>
          <div style={{ backgroundImage: `url(${sixteen.default})` }}></div>
          <div style={{ backgroundImage: `url(${seventeen.default})` }}></div>
          <div style={{ backgroundImage: `url(${eighteen.default})` }}></div>
          <div style={{ backgroundImage: `url(${nineteen.default})` }}></div>
          <div style={{ backgroundImage: `url(${twenty.default})` }}></div>
        </div>
      </div>
    );
  }
}
