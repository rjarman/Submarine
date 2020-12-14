export class ControllerEvents {
  private controlRight = document.getElementById('controlRight');
  private controlDown = document.getElementById('controlDown');
  private controlFastForward = document.getElementById('controlFastForward');
  private controlUp = document.getElementById('controlUp');
  private controlLeft = document.getElementById('controlLeft');

  private btnPressingTracker = {
    fastForward: false,
    up: false,
    down: false,
  };

  constructor() {
    this.controllerEvents();
  }

  private controllerEvents() {
    this.controlRight?.addEventListener('click', () => {});
    this.controlLeft?.addEventListener('click', () => {});

    this.controlFastForward?.addEventListener('click', () => {
      if (this.btnPressingTracker.fastForward) {
        this.btnPressingTracker.fastForward = false;
        this.controlFastForward?.classList.remove('fab-btn__option--active');
      } else {
        this.btnPressingTracker.fastForward = true;
        this.controlFastForward?.classList.add('fab-btn__option--active');
      }
    });
    this.controlUp?.addEventListener('click', () => {
      if (this.btnPressingTracker.up) {
        this.btnPressingTracker.up = false;
        this.controlUp?.classList.remove('fab-btn__option--active');
      } else {
        this.btnPressingTracker.up = true;
        this.controlUp?.classList.add('fab-btn__option--active');
      }
    });
    this.controlDown?.addEventListener('click', () => {
      if (this.btnPressingTracker.down) {
        this.btnPressingTracker.down = false;
        this.controlDown?.classList.remove('fab-btn__option--active');
      } else {
        this.btnPressingTracker.down = true;
        this.controlDown?.classList.add('fab-btn__option--active');
      }
    });
  }
}
