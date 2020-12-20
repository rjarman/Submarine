import { links } from '../Config';

export class CommonEvents {
  private menuBtn = document.getElementById('menuBtn');
  private backdrop = document.getElementsByClassName('backdrop')[0];
  private sidebar = document.getElementsByClassName('sidebar')[0];
  private sidebarBtns = document.getElementsByClassName('sidebar__btn');
  private aboutBtn = document.getElementById('aboutBtn');
  private aboutPopover = document.getElementsByClassName('about-container')[0];

  private socialBtn = document.getElementById('social-btn');
  private socialOptions = document.getElementsByClassName('social-options');
  private socialGithubBtn = this.socialOptions[0].children[0];
  private socialGitkrakenBtn = this.socialOptions[0].children[2];
  private socialLinkedinBtn = this.socialOptions[0].children[4];
  private socialFacebookBtn = this.socialOptions[0].children[6];
  private socialTwitterBtn = this.socialOptions[0].children[8];
  private hrItems = this.socialOptions[0].getElementsByClassName('hr-item');

  private aboutSocialLinks = document.getElementsByClassName(
    'about-social__links'
  )[0].children;

  private controllerBtn = document.getElementById('controllerBtn');
  private controllerContainer = document.getElementsByClassName(
    'controller-container'
  )[0];
  private mapBtn = document.getElementById('mapBtn');
  private mapContainer = document.getElementsByClassName('map-container')[0];
  private chatBtn = document.getElementById('chatBtn');
  private chatContainer = document.getElementsByClassName('chat-container')[0];
  private videoBtn = document.getElementById('videoBtn');
  private videoContainer = document.getElementsByClassName(
    'video-container'
  )[0];

  private fabBtn = document.getElementById('fabBtn');
  private fabCheckbox = document.getElementById('fabCheckbox');
  private isFabClicked = false;

  private backdropEventTarget: EventTarget | null = null;
  private sidebarBtnsEventTarget: {
    element: Element | null;
    target: EventTarget | null;
  }[] = [{ element: null, target: null }];

  private socialBtnEventTarget: EventTarget | null = null;
  private socialGithubBtnEventTarget: EventTarget | null = null;
  private socialGitkrakenBtnEventTarget: EventTarget | null = null;
  private socialLinkedinBtnEventTarget: EventTarget | null = null;
  private socialFacebookBtnEventTarget: EventTarget | null = null;
  private socialTwitterBtnEventTarget: EventTarget | null = null;

  constructor() {
    this.backdropEvents();
    this.sidebarBtnEvents();
    this.socialBtnEvents();
    this.aboutPopoverEvents();
    this.fabBtnEvents();
    this.tabBtnsEvents();
    this.dispatchEvents();
  }

  private backdropEvents() {
    this.backdrop?.addEventListener('click', (event: Event) => {
      this.backdropEventTarget = event.target;
    });
  }

  private sidebarBtnEvents() {
    this.menuBtn?.addEventListener('click', (event: Event) => {
      this.backdrop?.classList.add('backdrop--active');
      this.sidebar.classList.add('sidebar--active');
      if (this.isFabClicked) {
        this.fabCheckbox?.click();
        this.isFabClicked = false;
      }
    });
    for (const btn in this.sidebarBtns) {
      if (Object.prototype.hasOwnProperty.call(this.sidebarBtns, btn)) {
        const element = this.sidebarBtns[btn];
        if (element !== this.socialBtn) {
          element.addEventListener('click', (event: Event) => {
            element.classList.add('sidebar__btn--clicked');
            if (event.target && element) {
              this.sidebarBtnsEventTarget!.push({
                element: element,
                target: event.target,
              });
            }
          });
        }
      }
    }
    this.aboutBtn?.addEventListener('click', () => {
      this.sidebar!.classList.remove('sidebar--active');
      this.aboutPopover.classList.add('about-container--active');
    });
  }

  private socialBtnEvents() {
    this.socialBtn?.addEventListener('click', (event: Event) => {
      this.socialOptions[0].classList.add('social-options--clicked');
      this.socialBtn?.classList.add('sidebar__btn--clicked');
      this.socialBtnEventTarget = event.target;
    });

    this.socialGithubBtn?.addEventListener('click', (event: Event) => {
      this.hrItems[0].classList.add('hr-item--clicked');
      this.socialGithubBtn?.classList.add('social--clicked');
      this.socialGithubBtnEventTarget = event.target;
    });
    this.socialGitkrakenBtn?.addEventListener('click', (event: Event) => {
      this.hrItems[0].classList.add('hr-item--clicked');
      this.hrItems[1].classList.add('hr-item--clicked');
      this.socialGitkrakenBtn?.classList.add('social--clicked');
      this.socialGitkrakenBtnEventTarget = event.target;
    });
    this.socialLinkedinBtn?.addEventListener('click', (event: Event) => {
      this.hrItems[1].classList.add('hr-item--clicked');
      this.hrItems[2].classList.add('hr-item--clicked');
      this.socialLinkedinBtn?.classList.add('social--clicked');
      this.socialLinkedinBtnEventTarget = event.target;
    });
    this.socialFacebookBtn?.addEventListener('click', (event: Event) => {
      this.hrItems[2].classList.add('hr-item--clicked');
      this.hrItems[3].classList.add('hr-item--clicked');
      this.socialFacebookBtn?.classList.add('social--clicked');
      this.socialFacebookBtnEventTarget = event.target;
    });
    this.socialTwitterBtn?.addEventListener('click', (event: Event) => {
      this.hrItems[3].classList.add('hr-item--clicked');
      this.socialTwitterBtn?.classList.add('social--clicked');
      this.socialTwitterBtnEventTarget = event.target;
    });
  }

  private aboutPopoverEvents() {
    const linksParser = [
      links.social.github,
      links.social.gitkraken,
      links.social.linkedin,
      links.social.facebook,
      links.social.twitter,
    ];
    for (let i = 0; i < this.aboutSocialLinks.length; i++) {
      this.aboutSocialLinks[i].addEventListener('click', () => {
        window.open(linksParser[i]);
      });
    }
  }

  private fabBtnEvents() {
    this.fabBtn?.addEventListener('click', () => {
      this.isFabClicked = this.isFabClicked ? false : true;
    });
  }

  private tabBtnsEvents() {
    const activeClassRemover = {
      controllerBtn: () => {
        this.mapContainer?.classList.remove('map--active');
        this.chatContainer?.classList.remove('chat--active');
        this.videoContainer?.classList.remove('video--active');

        this.mapBtn?.classList.remove('container-tabs__btn--active');
        this.mapBtn?.children[0].children[0].children[0].classList.remove(
          'container-tabs__btn__svg--active'
        );
        this.chatBtn?.classList.remove('container-tabs__btn--active');
        this.chatBtn?.children[0].children[0].classList.remove(
          'container-tabs__btn__svg--active'
        );
        this.videoBtn?.classList.remove('container-tabs__btn--active');
        this.videoBtn?.children[0].children[0].classList.remove(
          'container-tabs__btn__svg--active'
        );
      },
      mapBtn: () => {
        this.controllerContainer?.classList.remove('controller--active');
        this.chatContainer?.classList.remove('chat--active');
        this.videoContainer?.classList.remove('video--active');

        this.controllerBtn?.classList.remove('container-tabs__btn--active');
        this.controllerBtn?.children[0].children[0].classList.remove(
          'container-tabs__btn__svg--active'
        );
        this.chatBtn?.classList.remove('container-tabs__btn--active');
        this.chatBtn?.children[0].children[0].classList.remove(
          'container-tabs__btn__svg--active'
        );
        this.videoBtn?.classList.remove('container-tabs__btn--active');
        this.videoBtn?.children[0].children[0].classList.remove(
          'container-tabs__btn__svg--active'
        );
      },
      chatBtn: () => {
        this.controllerContainer?.classList.remove('controller--active');
        this.mapContainer?.classList.remove('map--active');
        this.videoContainer?.classList.remove('video--active');

        this.controllerBtn?.classList.remove('container-tabs__btn--active');
        this.controllerBtn?.children[0].children[0].classList.remove(
          'container-tabs__btn__svg--active'
        );
        this.mapBtn?.classList.remove('container-tabs__btn--active');
        this.mapBtn?.children[0].children[0].children[0].classList.remove(
          'container-tabs__btn__svg--active'
        );
        this.videoBtn?.classList.remove('container-tabs__btn--active');
        this.videoBtn?.children[0].children[0].classList.remove(
          'container-tabs__btn__svg--active'
        );
      },
      videoBtn: () => {
        this.controllerContainer?.classList.remove('controller--active');
        this.mapContainer?.classList.remove('map--active');
        this.chatContainer?.classList.remove('chat--active');

        this.controllerBtn?.classList.remove('container-tabs__btn--active');
        this.controllerBtn?.children[0].children[0].classList.remove(
          'container-tabs__btn__svg--active'
        );
        this.mapBtn?.classList.remove('container-tabs__btn--active');
        this.mapBtn?.children[0].children[0].children[0].classList.remove(
          'container-tabs__btn__svg--active'
        );
        this.chatBtn?.classList.remove('container-tabs__btn--active');
        this.chatBtn?.children[0].children[0].classList.remove(
          'container-tabs__btn__svg--active'
        );
      },
    };

    setTimeout(() => {
      this.controllerBtn?.click();
      this.controllerContainer?.classList.add('controller--active');
    }, 1);
    this.controllerBtn?.addEventListener('click', () => {
      if (this.isFabClicked) {
        this.fabCheckbox?.click();
        this.isFabClicked = false;
      }
      this.controllerContainer?.classList.add('controller--active');

      this.controllerBtn?.classList.add('container-tabs__btn--active');
      this.controllerBtn?.children[0].children[0].classList.add(
        'container-tabs__btn__svg--active'
      );
      activeClassRemover.controllerBtn();
    });

    this.mapBtn?.addEventListener('click', () => {
      if (this.isFabClicked) {
        this.fabCheckbox?.click();
        this.isFabClicked = false;
      }
      this.mapContainer?.classList.add('map--active');

      this.mapBtn?.classList.add('container-tabs__btn--active');
      this.mapBtn?.children[0].children[0].children[0].classList.add(
        'container-tabs__btn__svg--active'
      );
      activeClassRemover.mapBtn();
    });

    this.chatBtn?.addEventListener('click', () => {
      if (this.isFabClicked) {
        this.fabCheckbox?.click();
        this.isFabClicked = false;
      }
      this.chatContainer?.classList.add('chat--active');

      this.chatBtn?.classList.add('container-tabs__btn--active');
      this.chatBtn?.children[0].children[0].classList.add(
        'container-tabs__btn__svg--active'
      );
      activeClassRemover.chatBtn();
      document.getElementsByClassName('scroll-to-last')[0].scrollIntoView();
    });

    this.videoBtn?.addEventListener('click', () => {
      if (this.isFabClicked) {
        this.fabCheckbox?.click();
        this.isFabClicked = false;
      }
      this.videoContainer?.classList.remove('video--active');

      this.videoBtn?.classList.add('container-tabs__btn--active');
      this.videoBtn?.children[0].children[0].classList.add(
        'container-tabs__btn__svg--active'
      );
      activeClassRemover.videoBtn();
    });
  }

  private dispatchEvents() {
    document.addEventListener('click', (event: Event) => {
      if (this.backdropEventTarget === event.target) {
        this.backdrop?.classList.remove('backdrop--active');
        this.sidebar!.classList.remove('sidebar--active');
        this.aboutPopover?.classList.remove('about-container--active');
      }

      this.sidebarBtnsEventTarget.forEach((_) => {
        if (event.target !== _.target) {
          _.element?.classList.remove('sidebar__btn--clicked');
        }
      });

      if (this.socialBtnEventTarget !== event.target) {
        this.socialOptions[0].classList.remove('social-options--clicked');
        this.socialBtn?.classList.remove('sidebar__btn--clicked');
        for (let i = 0; i < this.hrItems.length; i++) {
          this.hrItems[i].classList.remove('hr-item--clicked');
        }
      }
      if (
        this.socialBtnEventTarget === event.target &&
        this.socialGithubBtnEventTarget !== event.target &&
        this.socialGitkrakenBtnEventTarget !== event.target &&
        this.socialLinkedinBtnEventTarget !== event.target &&
        this.socialFacebookBtnEventTarget !== event.target &&
        this.socialTwitterBtnEventTarget !== event.target
      ) {
        for (let i = 0; i < this.hrItems.length; i++) {
          this.hrItems[i].classList.remove('hr-item--clicked');
        }
      }
      if (this.socialGithubBtnEventTarget !== event.target) {
        this.socialGithubBtn?.classList.remove('social--clicked');
      }
      if (this.socialGitkrakenBtnEventTarget !== event.target) {
        this.socialGitkrakenBtn?.classList.remove('social--clicked');
      }
      if (this.socialLinkedinBtnEventTarget !== event.target) {
        this.socialLinkedinBtn?.classList.remove('social--clicked');
      }
      if (this.socialFacebookBtnEventTarget !== event.target) {
        this.socialFacebookBtn?.classList.remove('social--clicked');
      }
      if (this.socialTwitterBtnEventTarget !== event.target) {
        this.socialTwitterBtn?.classList.remove('social--clicked');
      }
    });
  }
}
