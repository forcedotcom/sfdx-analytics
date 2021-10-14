import { LightningElement, api } from 'lwc';

export default class PlayButton extends LightningElement {
  @api results;
  @api metadata;
  @api selection;
  @api setSelection;
  @api selectMode;
  @api getState;
  @api setState;
  @api delay;
  @api curSelectionIndex = 0;
  @api myTimer;

  resetCounter() {
    this.curSelectionIndex = 0;
    this.setSelection([this.results[this.curSelectionIndex]]);
  }

  stopPlaying() {
    clearInterval(this.myTimer);
  }

  startPlaying() {
    if (this.curSelectionIndex >= this.results.length - 1) {
      this.curSelectionIndex = 0;
    }

    this.setSelection([this.results[this.curSelectionIndex]]);
    let that = this;

    function stepForward() {
      if (that.curSelectionIndex >= that.results.length - 1) {
        clearInterval(that.myTimer);
      } else {
        that.curSelectionIndex += 1;
        that.setSelection([that.results[that.curSelectionIndex]]);
      }
    }

    this.myTimer = setInterval(stepForward, this.delay);
  }
}
