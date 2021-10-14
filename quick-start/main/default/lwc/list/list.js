import { LightningElement, api } from 'lwc';

export default class List extends LightningElement {
  @api results;
  @api metadata;
  @api selection;
  @api setSelection;
  @api selectMode;
  @api getState;
  @api setState;

  @api title;

  get listItems() {
    if (this.results == null && this.selection == null) {
      return [];
    }

    const isMultiSelect = this.isMultiSelect();
    const selectedRowsByHash = this.getSelectedRowsByHash();

    return this.results.map((row) => {
      const rowHash = this.hash(row);
      const isSelected = selectedRowsByHash.has(rowHash);

      return {
        label: this.metadata.groups.map((group) => row[group]).join(' - '),
        inputType: isMultiSelect ? 'checkbox' : 'radio',
        checked: isSelected,
        onPointerUp: this.handleClick.bind(this, row)
      };
    });
  }

  hash(row) {
    return this.metadata.groups.map((group) => row[group]).join('|^|');
  }

  handleClick(row) {
    const selectedRowsByHash = this.getSelectedRowsByHash();
    const rowHash = this.hash(row);
    if (selectedRowsByHash.has(rowHash)) {
      this.setSelection(
        Array.from(selectedRowsByHash.entries()).reduce((acc, [curHash, curRow]) => {
          if (curHash !== rowHash) {
            acc.push(curRow);
          }

          return acc;
        }, [])
      );
    } else {
      this.setSelection(this.isMultiSelect() ? [...selectedRowsByHash.values(), row] : [row]);
    }
  }

  isMultiSelect() {
    return this.selectMode.includes('multi');
  }

  getSelectedRowsByHash() {
    return new Map((this.selection ?? []).map((row) => [this.hash(row), row]));
  }
}
