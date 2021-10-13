import { LightningElement, api } from 'lwc';

export default class Breadcrumb extends LightningElement {
  @api getState;
  @api myTimer;
  @api myState;

  connectedCallback() {
    let that = this;

    function update() {
      that.stringState = JSON.stringify(that.getState(), '  ');
    }

    setInterval(update, 2000);
  }

  @api
  get stringState() {
    return this.myState;
  }
  set stringState(state) {
    this.myState = state;
  }

  get currentPage() {
    return this.getState().pageId;
  }

  get datasets() {
    if (this.getState().state) {
      var myKeys = Object.keys(this.getState().state.datasets);
      return myKeys.map((name) => {
        var data = this.getState().state.datasets[name];
        data = data.filter((d) => d.filter.values.length > 0);
        data = data.map((d) => {
          return { field: d.fields[0], value: d.filter.values.join(', ') };
        });
        return { name: name, key: name, size: data.length, filters: data };
      });
    } else {
      return [];
    }
  }

  get steps() {
    if (this.getState().state) {
      var myKeys = Object.keys(this.getState().state.steps);
      return myKeys.map((name) => {
        var step = this.getState().state.steps[name];
        return {
          name: name,
          key: name,
          value: step.values.length > 0 ? step.values.join(', ') : 'No selection'
        };
      });
    } else {
      return [];
    }
  }
}
