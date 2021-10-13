import { LightningElement, api } from 'lwc';

export default class SelectNavigate extends LightningElement {
  @api results;
  @api metadata;
  @api selection;
  @api setSelection;
  @api selectMode;
  @api getState;
  @api setState;

  @api targetPage;

  get selectionText() {
    if (this.selection == null || this.selection.length == 0) {
      return [];
    }

    //const isMultiSelect = this.isMultiSelect();

    if (!this.atTarget()) {
      this.priorPage = this.getState().pageId;
      this.setState({ ...this.getState(), pageId: this.targetPage });
    }

    return this.selection.map((row) => {
      return '< ' + this.combine(row);
    });
  }

  combine(row) {
    return this.metadata.groups.map((group) => row[group]).join(' - ');
  }

  atTarget() {
    return this.getState().pageId == this.targetPage;
  }

  clearSelection() {
    this.setSelection([]);
    this.setState({ ...this.getState(), pageId: this.priorPage });
    return;
  }
}
