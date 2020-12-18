import { Service } from '../typings/Typings';

export class ChatEvents {
  private textareaCheckbox = document.getElementById(
    'textareaCheckbox'
  ) as HTMLInputElement;
  private textareaBtn = document.getElementById('textareaBtn');
  private textareaContainerLogoSend = document.getElementsByClassName(
    'textarea-container__logo-send'
  )[0];
  private textareaContainerLogoMsg = document.getElementsByClassName(
    'textarea-container__logo-msg'
  )[0];
  private msgText = document.getElementById('msgText');
  private chatBubbles = document.getElementsByClassName('chat-bubbles')[0];
  private scrollToLast = document.getElementsByClassName('scroll-to-last')[0];
  private chatReplyDotContainer = document.getElementsByClassName(
    'chat-reply__dot-container'
  )[0];

  constructor(private service: Service) {
    this.msgBtnEvents();
  }

  private isEmptyTextarea(text: string | undefined): string | undefined {
    let tempText = text?.replace(/<empty string>/g, '');
    tempText = text?.replace(/<br>/g, '');
    tempText = tempText?.replace(/&nbsp;/g, '');
    return tempText;
  }

  private msgSendReplyHandler(type: string, reply?: string) {
    this.chatReplyDotContainer.classList.add(
      'chat-reply__dot-container--active'
    );
    if (type === 'send') {
      this.chatBubbles.innerHTML += `
        <div class="chat-bubble chat-bubble__send">
            <div class="chat-bubble__text">${this.msgText?.innerHTML}</div>
            <div class="chat-bubble__time">
            at ${this.service.getDatetime(Date.now())[0]}
            </div>
        </div>`;
      this.scrollToLast.scrollIntoView();
    }
    if (type === 'reply') {
      this.chatReplyDotContainer.classList.remove(
        'chat-reply__dot-container--active'
      );
      this.chatBubbles.innerHTML += `
        <div class="chat-bubble chat-bubble__reply">
            <div class="chat-bubble__text">${reply}</div>
            <div class="chat-bubble__time">
                at ${this.service.getDatetime(Date.now())[0]}
            <div class="chat-bubble__dot"></div>
            <div class="chat-bubble__tag">dummy</div>
            </div>
        </div>`;
      this.scrollToLast.scrollIntoView();
    }
  }

  private dummyReply() {
    setTimeout(() => {
      this.msgSendReplyHandler('reply', 'Hello as dummy reply');
    }, 2000);
  }

  private msgBtnEvents() {
    this.textareaBtn?.addEventListener('click', () => {
      if (this.textareaCheckbox?.checked) {
        this.textareaContainerLogoMsg.classList.remove(
          'textarea-container__logo-msg--deactivate'
        );
        this.textareaContainerLogoSend.classList.remove(
          'textarea-container__logo-send--active'
        );
        if (
          this.isEmptyTextarea(this.msgText?.innerHTML)?.length &&
          this.msgText?.innerHTML
        ) {
          this.msgSendReplyHandler('send');
          this.msgText.innerHTML = '';
          this.dummyReply();
        } else {
        }
      } else {
        this.textareaContainerLogoMsg.classList.add(
          'textarea-container__logo-msg--deactivate'
        );
        this.textareaContainerLogoSend.classList.add(
          'textarea-container__logo-send--active'
        );
      }
    });
  }
}
