export class VideoEvents {
  private videoContainer = document.getElementById('videoContainer');
  private videoContainerBtnList = document.getElementsByClassName(
    'video-container__btn-list'
  )[0];
  private imageListBtn = document.getElementById('imageListBtn');
  private captureBtn = document.getElementById('captureBtn');
  private fullscreenBtn = document.getElementById('fullscreenBtn');
  private videoTabsVideo = document.getElementById('videoTabsVideo');
  private exitFullscreen = document.getElementsByClassName(
    'video-container__exit-fullscreen'
  )[0];
  private listModel = document.getElementsByClassName('model-container')[0];

  private modelBackBtn = document.getElementById('modelBack');
  private modelOptionsBtn = document.getElementById('modelOptions');
  private modelOptions = document.getElementsByClassName('model-options')[0];

  private containerTabs = document.getElementsByClassName('container-tabs')[0];
  private menuBtn = document.getElementsByClassName('btn-menu')[0];

  private modelOptionsBtnEventTarget: EventTarget | null = null;

  constructor() {
    this.imageListEvents();
    this.captureBtnEvents();
    this.fullscreenEvents();
    this.dispatchEvents();
  }

  private imageListEvents() {
    this.imageListBtn?.addEventListener('click', () => {
      this.listModel.classList.add('model-container--active');
    });
    this.modelBackBtn?.addEventListener('click', () => {
      this.listModel.classList.remove('model-container--active');
    });
    this.modelOptionsBtn?.addEventListener('click', (event: Event) => {
      this.modelOptionsBtnEventTarget = event.target;
      this.modelOptions?.classList.add('model-options--active');
    });
  }

  private captureBtnEvents() {
    this.captureBtn?.addEventListener('click', () => {});
  }

  private fullscreenEvents() {
    this.fullscreenBtn?.addEventListener('click', () => {
      this.videoContainerBtnList.classList.add(
        'video-container__btn-list--deactivate'
      );
      this.menuBtn.classList.add('btn-menu--deactivate');
      this.containerTabs.classList.add('container-tabs--deactivate');

      this.videoContainer?.classList.remove('video-container');
      this.videoContainer?.classList.add('video-container--rotate');
      this.videoTabsVideo?.classList.remove('video-tabs__video');
      this.videoTabsVideo?.classList.add('video-tabs__video--rotate');
      this.exitFullscreen.classList.add(
        'video-container__exit-fullscreen--active'
      );
    });

    this.exitFullscreen.addEventListener('click', () => {
      this.videoContainerBtnList.classList.remove(
        'video-container__btn-list--deactivate'
      );
      this.menuBtn.classList.remove('btn-menu--deactivate');
      this.containerTabs.classList.remove('container-tabs--deactivate');

      this.videoContainer?.classList.add('video-container');
      this.videoContainer?.classList.remove('video-container--rotate');
      this.videoTabsVideo?.classList.add('video-tabs__video');
      this.videoTabsVideo?.classList.remove('video-tabs__video--rotate');
      this.exitFullscreen.classList.remove(
        'video-container__exit-fullscreen--active'
      );
    });
  }

  private dispatchEvents() {
    document.addEventListener('click', (event: Event) => {
      if (event.target !== this.modelOptionsBtnEventTarget) {
        this.modelOptions?.classList.remove('model-options--active');
      }
    });
  }
}
