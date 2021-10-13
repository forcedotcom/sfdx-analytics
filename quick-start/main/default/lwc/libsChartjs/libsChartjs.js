import { LightningElement, api } from 'lwc';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
import chartjs2 from '@salesforce/resourceUrl/chartJs2';

// R, G, B
const PALETTE = [
  [255, 99, 132],
  [255, 159, 64],
  [255, 205, 86],
  [75, 192, 192],
  [54, 162, 235]
];

export default class LibsChartjs extends LightningElement {
  @api results;
  @api metadata;
  @api setSelection;
  @api selectMode;
  @api getState;
  @api setState;

  @api
  get selection() {
    return this._selection;
  }

  set selection(selection) {
    this._selection = selection;
    if (this.chart != null) {
      this.chart.update(this.makeConfig());
    }
  }

  @api measureColumn;
  @api labelColumn;

  chart;
  chartjsInitialized = false;

  renderedCallback() {
    if (this.chartjsInitialized) {
      this.chart.update(this.makeConfig());
      return;
    }

    this.chartjsInitialized = true;

    Promise.all([loadScript(this, chartjs2 + '/Chart.min.js'), loadStyle(this, chartjs2 + '/Chart.min.css')]).then(
      () => {
        // disable Chart.js CSS injection
        window.Chart.platform.disableCSSInjection = true;

        const canvas = document.createElement('canvas');
        this.template.querySelector('div.chart').appendChild(canvas);
        const ctx = canvas.getContext('2d');
        this.chart = new window.Chart(ctx, this.makeConfig());
      }
    );
  }

  makeConfig() {
    const selectedRowHashes = new Set(this.selection.map(this.hashRow.bind(this)));

    return {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: this.results.map((row) => row[this.measureColumn]),
            backgroundColor: this.results.map((row, i) =>
              this.makeColor(i, selectedRowHashes.size > 0 && !selectedRowHashes.has(this.hashRow(row)))
            ),
            label: 'Dataset 1'
          }
        ],
        labels: this.results.map((row) => row[this.labelColumn])
      },
      options: {
        responsive: true,
        legend: {
          position: 'right'
        },
        animation: {
          animateScale: true,
          animateRotate: true
        },
        onClick: (event, elements) => {
          this.setSelection(elements.map((element) => this.results[element._index]));
        }
      }
    };
  }

  hashRow(row) {
    return this.metadata.groups.map((group) => row[group]).join('|^|');
  }

  makeColor(index, isFaded) {
    const [r, g, b] = PALETTE[index % PALETTE.length];

    return `rgba(${r}, ${g}, ${b}, ${isFaded ? '0.2' : '1'})`;
  }
}
