import { LightningElement, api } from 'lwc';

export default class Hierarchy extends LightningElement {
  @api metadata;
  @api selection;
  @api setSelection;
  @api selectMode;
  @api getState;
  @api setState;

  @api
  get results() {
    return this._results;
  }

  set results(results) {
    this._results = results;
    this._items = this.getItems();
  }

  @api
  get idColumn() {
    return this._idColumn;
  }

  set idColumn(idColumn) {
    this._idColumn = idColumn;
    this._items = this.getItems();
  }

  @api
  get parentIdColumn() {
    return this._parentIdColumn;
  }

  set parentIdColumn(parentIdColumn) {
    this._parentIdColumn = parentIdColumn;
    this._items = this.getItems();
  }

  @api
  get labelColumn() {
    return this._labelColumn;
  }

  set labelColumn(labelColumn) {
    this._labelColumn = labelColumn;
    this._items = this.getItems();
  }

  @api
  get root() {
    return this._root;
  }

  set root(root) {
    this._root = root;
    this._items = this.getItems();
  }

  get items() {
    return this._items;
  }

  /**
   * Process flat list of results into hierarchical structure expected by the tree grid component.
   */
  getItems() {
    if (this.results == null) {
      return [];
    }

    const rowsByParent = new Map();

    this.results.forEach((row) => {
      const parentId = row[this.parentIdColumn];

      rowsByParent.set(parentId, (rowsByParent.get(parentId) || []).concat(row));
    });

    return this._collectNodes(rowsByParent, this.root != null ? this.root : null);
  }

  handleSelect(event) {
    this.setSelection(this.results.filter((row) => row[this.idColumn] === event.detail.name));
  }

  /**
   * Collect nodes with a given parent ID as well as their children, recursively.
   */
  _collectNodes(rowsByParent, parentId) {
    return (rowsByParent.get(parentId) || []).map((row) => {
      return {
        label: row[this.labelColumn],
        name: row[this.idColumn],
        items: this._collectNodes(rowsByParent, row[this.idColumn])
      };
    });
  }
}
