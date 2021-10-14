import { LightningElement, api, track } from 'lwc';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
import chartjs2 from '@salesforce/resourceUrl/chartJs2';
import chartjsPluginGantt from '@salesforce/resourceUrl/chartJsPluginGantt';
import chartjsPluginSubtitle from '@salesforce/resourceUrl/chartJsPluginSubtitle';
import MOMENT_JS from '@salesforce/resourceUrl/moment';

const BAR_HEIGHT = 4;

export default class tdxGanttChart extends LightningElement {
  //@api results;
  //@api metadata;
  @api mode;
  @api setSelection;
  @api selectMode;
  @api getState;
  @api setState;

  @api paletteName;

  @api containerStyle = 'background: #FF0000';

  @api
  get backgroundColor() {
    return this._backgroundColor;
  }

  set backgroundColor(backgroundColor) {
    this._backgroundColor = backgroundColor;
    this.updateChart();
  }

  @api
  get theme() {
    return this._theme;
  }

  set theme(theme) {
    for (var name in this.themes) {
      if (theme.toLowerCase() === name.toLowerCase()) {
        this._theme = name;
        this.updateChart();
      }
    }
  }

  test(evt) {
    console.warn('test: ', evt);
    console.warn('this.selection: ', JSON.parse(JSON.stringify(this.selection)));
  }

  @api
  get metadata() {
    return this._metadata;
  }

  set metadata(metadata) {
    console.warn('metadata: ', JSON.parse(JSON.stringify(metadata)));
    this._metadata = metadata;
  }

  @api
  get results() {
    return this._results;
  }

  set results(results) {
    console.warn('results: ', JSON.parse(JSON.stringify(results)));
    this._results = results;
  }

  @api
  get selection() {
    return this._selection;
  }
  set selection(selection) {
    console.warn('selection: ', JSON.parse(JSON.stringify(selection)));
    this._selection = selection;
    this.updateChart();
  }

  @api
  get fromColumn() {
    return this._fromColumn;
  }

  set fromColumn(fromColumn) {
    this._fromColumn = fromColumn;
    this.updateChart();
  }

  @api
  get toColumn() {
    return this._toColumn;
  }

  set toColumn(toColumn) {
    this._toColumn = toColumn;
    this.updateChart();
  }

  @api
  get labelColumn() {
    return this._labelColumn;
  }

  set labelColumn(labelColumn) {
    this._labelColumn = labelColumn;
    this.updateChart();
  }

  @api
  get colorColumn() {
    return this._colorColumn;
  }

  set colorColumn(colorColumn) {
    this._colorColumn = colorColumn;
    this.updateChart();
  }

  @api
  get axesType() {
    return this._axesType;
  }

  set axesType(axesType) {
    if (axesType.toLowerCase() === 'linear' || axesType.toLowerCase() === 'time') {
      this._axesType = axesType.toLowerCase() + '-gantt';
      this.updateChart();
    }
  }

  @api
  get label() {
    return this._label;
  }

  set label(label) {
    this._label = label;
    this.updateChart();
  }

  @api
  get title() {
    return this._title;
  }

  set title(title) {
    this._title = title;
    this.updateChart();
  }

  @api
  get titleFontSize() {
    return this._titleFontSize;
  }

  set titleFontSize(titleFontSize) {
    this._titleFontSize = titleFontSize;
    this.updateChart();
  }

  @api
  get subtitle() {
    return this._subtitle;
  }

  set subtitle(subtitle) {
    this._subtitle = subtitle;
    this.updateChart();
  }

  @api
  get subtitleFontSize() {
    return this._subtitleFontSize;
  }

  set subtitleFontSize(subtitleFontSize) {
    this._subtitleFontSize = subtitleFontSize;
    this.updateChart();
  }

  chart;
  chartjsInitialized = false;

  handleBackgroundColorClick() {
    this.template.querySelector('div.dropdown.colors-dropdown').classList.toggle('slds-hide');
  }

  updateChart() {
    console.warn('this.selection: ', JSON.parse(JSON.stringify(this.selection || null)));

    if (this.chart && this.chartjsInitialized) {
      let config = this.makeConfig();
      this.chart.data = config.data;
      this.chart.options = config.options;
      this.chart.update();
    } else {
      console.error('updateChart called but ChartJS is not initialized');
    }
  }

  renderedCallback() {
    if (this.chartjsInitialized) {
      let config = this.makeConfig();
      this.chart.data = config.data;
      this.chart.options = config.options;
      this.chart.update();
      return;
    }

    this.chartjsInitialized = true;

    loadScript(this, MOMENT_JS + '/moment.js')
      .then(Promise.all([loadScript(this, chartjs2 + '/Chart.min.js'), loadStyle(this, chartjs2 + '/Chart.min.css')]))
      .then(() => loadScript(this, chartjsPluginSubtitle + '/chartjs-plugin-subtitle.min.js'))
      .then(() => loadScript(this, chartjsPluginGantt + '/chartjs-plugin-gantt.min.js'))
      .then(() => {
        // disable Chart.js CSS injection
        window.Chart.platform.disableCSSInjection = true;

        const canvas = document.createElement('canvas');
        this.template.querySelector('div.chart').appendChild(canvas);

        this.chart = new Chart(canvas.getContext('2d'), this.makeConfig());
      });
  }

  handleColorClick(evt) {
    let target = evt.target;
    this._backgroundColor = target.style.backgroundColor;
    this.updateChart();
  }

  @track themes = {
    Default: {
      name: 'Default',
      label: 'Default',
      values: ['#52B7D8', '#E16032', '#FFB03B', '#54A77B', '#4FD2D2', '#E287B2'],
      fontColor: '#000000'
    },
    ColorSafe: {
      name: 'ColorSafe',
      label: 'Color Safe',
      values: ['#529EE0', '#D9A6C2', '#08916D', '#F59B00', '#006699', '#F0E442'],
      fontColor: '#000000'
    },
    Light: {
      name: 'Light',
      label: 'Light',
      values: ['#3296ED', '#77B9F2', '#9D53F2', '#C398F5', '#26ABA4', '#4ED4CD'],
      fontColor: '#000000'
    },
    Dark: {
      name: 'Dark',
      label: 'Dark',
      values: ['#0E70C7', '#3296ED', '#7719E3', '#9D53F2', '#067D77', '#26ABA4'],
      fontColor: '#FFFFFF'
    },
    Bluegrass: {
      name: 'Bluegrass',
      label: 'Bluegrass',
      values: ['#C7F296', '#94E7A8', '#51D2BB', '#27AAB0', '#116985', '#053661'],
      fontColor: '#000000'
    },
    Sunrise: {
      name: 'Sunrise',
      label: 'Sunrise',
      values: ['#F5DE98', '#F5C062', '#F59623', '#CE6716', '#762F3D', '#300561'],
      fontColor: '#000000'
    },
    Water: {
      name: 'Water',
      label: 'Water',
      values: ['96F2EE', '#68CEEE', '#2D9CED', '#0E6ECE', '#073E92', '#051C61'],
      fontColor: '#000000'
    },
    Watermelon: {
      name: 'Watermelon',
      label: 'Watermelon',
      values: ['#F598A7', '#F56580', '#F4284E', '#C11C2F', '#5C3F22', '#0A611B'],
      fontColor: '#000000'
    }
  };

  colors = {
    '01 - Prospecting': 'rgba(0, 0, 255, 0.8)',
    '02 - Qualification': 'rgba(128, 128, 255, 0.8)',
    '03 - Needs Analysis': 'rgba(255, 255, 128, 0.8)',
    '04 - Value Proposition': 'rgba(128, 192, 128, 0.8)',
    '05 - Perception Analysis': 'rgba(128, 160, 129, 0.8)',
    '06 - Proposal/Price Quote': 'rgba(255, 128, 128, 0.8)',
    '07 - Negotiation/Review': 'rgba(128, 255, 128, 0.8)',
    '08 - Closed Won': 'rgba(0, 255, 0, 0.8)',
    '09 - Closed Lost': 'rgba(255, 0, 0, 0.8)'
  };

  hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        }
      : null;
  }

  getContrastYIQ(hexcolor) {
    hexcolor = hexcolor.replace('#', '');
    var r = parseInt(hexcolor.substr(0, 2), 16);
    var g = parseInt(hexcolor.substr(2, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);
    var yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? 'black' : 'white';
  }

  computeColor(value, index) {
    let theme = this.themes[this._theme];
    return theme.values[index % theme.values.length];
  }

  makeConfig() {
    const curDate = new Date(); //2019, 3, 15, 12, 0, 0);

    const self = this;

    let theme = this.themes[this._theme];

    let backgroundColor = this._backgroundColor || '#FFFFFF';
    let foregroundColor = this.getContrastYIQ(backgroundColor);
    let fontColor = this.getContrastYIQ(backgroundColor);

    this.template.querySelector('div.chart').style.backgroundColor = backgroundColor;

    return {
      type: 'gantt',
      data: {
        datasets: [
          {
            height: BAR_HEIGHT, // default 5
            width: { d: 7 }, //`${BAR_HEIGHT}h`,
            label: this._label,
            data: this._results.map((row, i) => {
              return {
                x: {
                  from: new Date(row[this.fromColumn]),
                  to: new Date(row[this.toColumn])
                },
                y: i * BAR_HEIGHT,
                label: row[this.labelColumn],
                backgroundColor: this.computeColor(row[this.colorColumn], i)
              };
            })
          }
        ]
      },
      options: {
        chartArea: {
          backgroundColor: this._backgroundColor || '#FFFFFF'
        },
        title: {
          display: this.title && this.title.length > 0,
          text: this._title,
          fontSize: this._titleFontSize || 14,
          fontColor: fontColor, //this._titleFontColor || this._fontColor || theme.fontColor || '#000000',
          fontStyle: this._titleFontStyle || this._fontStyle || theme.fontStyle || 'normal'
        },
        plugins: {
          chartJsPluginSubtitle: {
            display: this.subtitle && this.subtitle.length > 0,
            text: this._subtitle,
            fontSize: this._subtitleFontSize || 11,
            fontColor: fontColor, //this._subtitleFontColor || this._fontColor || theme.fontColor || '#000000',
            fontStyle: this._titleFontStyle || this._fontStyle || theme.fontStyle || 'normal'
          }
        },
        tooltips: {
          callbacks: {
            label: function (context) {
              let index = context instanceof Array ? context[0].index : context.index;
              let row = self._results[index];
              let label = row[self._colorColumn];
              return label;
            },
            title: function (context) {
              let index = context instanceof Array ? context[0].index : context.index;
              let row = self._results[index];
              let title = row[self._labelColumn];
              return title;
            }
          }
        },
        scales: {
          yAxes: [
            {
              gridLines: {
                color: foregroundColor,
                tickColor: foregroundColor,
                zeroLineColor: foregroundColor
              },
              scaleLabel: {
                display: true,
                labelString: this._colorColumn,
                fontColor: fontColor
              },
              ticks: {
                color: foregroundColor,
                zeroLineColor: foregroundColor,
                fontColor: fontColor
              }
            }
          ],
          xAxes: [
            {
              type: this._axesType,
              position: 'bottom',
              gridLines: {
                color: foregroundColor,
                tickColor: foregroundColor,
                zeroLineColor: foregroundColor
              },
              scaleLabel: {
                display: true,
                labelString: this.fromColumn + ' - ' + this.toColumn,
                fontColor: fontColor
              },
              ticks: {
                color: foregroundColor,
                zeroLineColor: foregroundColor,
                fontColor: fontColor
              },
              time: {
                unit: 'week',
                displayFormats: {
                  millisecond: 'HH:mm:ss',
                  second: 'HH:mm:ss',
                  minute: 'HH:mm:ss',
                  hour: 'HH:mm:ss',
                  day: 'HH:mm:ss'
                }
              }
            }
          ]
        }
      }
    };
  }

  hashRow(row) {
    return this.metadata.groups.map((group) => row[group]).join('|^|');
  }
}
