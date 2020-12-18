import React from 'react';
import './TextArea.scss';
import * as chat from '../../../assets/img/chat-typing.svg';
import * as send from '../../../assets/img/send.svg';

export class TextArea extends React.Component {
  render() {
    return (
      <div className="textarea-container">
        <input
          id="textareaCheckbox"
          type="checkbox"
          className="textarea-checkbox"
        />
        <label
          htmlFor="textareaCheckbox"
          className="textarea-container__logo"
          id="textareaBtn"
        >
          <img
            src={chat.default}
            alt="chat_typing"
            className="textarea-container__logo-msg"
          />
          <img
            src={send.default}
            alt="send"
            className="textarea-container__logo-send"
          />
        </label>
        <div className="textarea-btn__options">
          <span contentEditable="true" id="msgText"></span>
        </div>
      </div>
    );
  }
}
