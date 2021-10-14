/*!
 * chartjs-plugin-gantt
 * https://github.com/anton-shchyrov/chartjs-plugin-gantt#readme
 * Version: 0.9.0
 *
 * Copyright 2019 Anton Shchyrov
 * Released under the Apache 2.0 license
 * https://github.com/anton-shchyrov/chartjs-plugin-gantt#LICENSE
 */

(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = 'function' == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw ((a.code = 'MODULE_NOT_FOUND'), a);
        }
        var p = (n[i] = { exports: {} });
        e[i][0].call(
          p.exports,
          function (r) {
            var n = e[i][1][r];
            return o(n || r);
          },
          p,
          p.exports,
          r,
          e,
          n,
          t
        );
      }
      return n[i].exports;
    }
    for (var u = 'function' == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
    return o;
  }
  return r;
})()(
  {
    1: [
      function (require, module, exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        exports.GanttController = GanttController;

        var _rect = require('../elements/rect');

        var _utils = require('../core/utils');

        const defaults = Chart.defaults;
        defaults.gantt = {
          height: 5,
          width: 5,
          scales: {
            xAxes: [
              {
                id: 'x-axis-1',
                type: 'linear-gantt',
                position: 'bottom'
              }
            ],
            yAxes: [
              {
                id: 'y-axis-1',
                type: 'linear-gantt',
                position: 'left'
              }
            ]
          },
          tooltips: {
            callbacks: {
              title: function () {
                return '';
              },
              label: function (item) {
                return '(' + item.xLabel + ', ' + item.yLabel + ')';
              }
            }
          }
        };
        defaults.global.elements.gantt = {
          borderWidth: 1,
          borderColor: defaults.global.defaultColor,
          backgroundColor: defaults.global.defaultColor
        };

        function GanttController(Chart) {
          Chart.controllers.gantt = Chart.DatasetController.extend({
            dataElementType: _rect.Rect,
            _prepareData: function (data, dataset) {
              return {
                x: _utils.Utils.extendValue(data.x, dataset._width),
                y: _utils.Utils.extendValue(data.y, dataset._height)
              };
            },
            _calcBounds: function (scale, scaleValue) {
              const from = scale.getPixelForValue(scaleValue.from);
              const to = scale.getPixelForValue(scaleValue.to);
              const res = {
                from: from,
                to: to
              };

              _utils.Utils.normalize(res);

              res.size = res.to - res.from;
              return res;
            },
            update: function (reset) {
              const meta = this.getMeta();
              const dataset = this.getDataset();
              const xScale = this.getScaleForId(meta.xAxisID);
              const yScale = this.getScaleForId(meta.yAxisID);
              dataset._width = _utils.Utils.convertSize(
                xScale,
                Chart.helpers.valueOrDefault(dataset.width, defaults.gantt.width)
              );
              dataset._height = _utils.Utils.convertSize(
                yScale,
                Chart.helpers.valueOrDefault(dataset.height, defaults.gantt.height)
              );
              const globalOptionGantt = defaults.global.elements.gantt;
              dataset._view = {
                borderWidth: dataset.borderWidth || globalOptionGantt.borderWidth,
                borderColor: dataset.borderColor || globalOptionGantt.borderColor,
                backgroundColor: dataset.backgroundColor || globalOptionGantt.backgroundColor
              };
              const data = meta.data || [];

              for (let i = 0; i < data.length; i++) this.updateElement(data[i], i, reset);
            },
            updateElement: function (point, index, reset) {
              const meta = this.getMeta();
              const dataset = this.getDataset();
              const datasetIndex = this.index;
              const xScale = this.getScaleForId(meta.xAxisID);
              const yScale = this.getScaleForId(meta.yAxisID);
              const vm = dataset._view;
              const value = dataset.data[index]; // Utility

              point._xScale = xScale;
              point._yScale = yScale;
              point._datasetIndex = datasetIndex;
              point._index = index;

              const fullPoint = this._prepareData(value, dataset);

              point._model = {
                rect: {
                  x: this._calcBounds(xScale, fullPoint.x),
                  y: this._calcBounds(yScale, fullPoint.y)
                },
                borderWidth: value.borderWidth || vm.borderWidth,
                borderColor: value.borderColor || vm.borderColor,
                backgroundColor: value.backgroundColor || vm.backgroundColor
              };
              point._model.x = _utils.Utils.getMiddle(point._model.rect.x);
              point._model.y = _utils.Utils.getMiddle(point._model.rect.y);
              point.pivot();
            }
          });
        }
      },
      { '../core/utils': 2, '../elements/rect': 3 }
    ],
    2: [
      function (require, module, exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        exports.Utils = void 0;
        const Utils = {
          _parseInterval: function (value) {
            if (typeof value === 'number') return value;

            if (typeof value === 'string') {
              const parsed = value
                .trim()
                .toLowerCase()
                .split(/\s*(\d+)\s*/);
              let cur = 'ms';
              const obj = {};

              for (let i = parsed.length - 1; i > 0; i--) {
                const num = parseFloat(parsed[i]);
                if (isFinite(num)) obj[cur] = num;
                else cur = parsed[i];
              }

              value = obj;
            }

            const coefs = {
              ms: 1,
              s: 1000,
              m: 1000 * 60,
              h: 1000 * 60 * 60,
              d: 1000 * 60 * 60 * 24
            };
            let res = 0;

            for (let key in value) {
              if (coefs[key]) res += value[key] * coefs[key];
            }

            return res;
          },
          isRange: function (value) {
            return typeof value.from !== 'undefined' && typeof value.to !== 'undefined';
          },
          getValue: function (rawValue, scale) {
            if (typeof rawValue === 'string') return +rawValue; // Null and undefined values first

            if (typeof rawValue === 'undefined' || rawValue === null) return NaN; // isNaN(object) returns true, so make sure NaN is checking for a number; Discard Infinite values

            if (typeof rawValue === 'number' && !isFinite(rawValue)) {
              return NaN;
            } // If it is in fact an object, dive in one more level

            if (rawValue) {
              const nested = scale.isHorizontal() ? rawValue.x : rawValue.y;
              if (nested !== undefined) return this.getValue(nested, scale);
            } // Value is good, return it

            return rawValue;
          },
          _incMilliseconds: function (date, addend) {
            const res = new Date(date);
            res.setMilliseconds(res.getMilliseconds() + addend);
            return res;
          },
          extendValue: function (value, defSize) {
            if (this.isRange(value)) return value;
            if (!isFinite(value)) return NaN;
            const delta = defSize / 2;

            if (value instanceof Date) {
              return {
                from: this._incMilliseconds(value, -delta),
                to: this._incMilliseconds(value, delta)
              };
            }

            return {
              from: value - delta,
              to: value + delta
            };
          },
          isTimeScale: function (scale) {
            return scale.isTime || scale.type === 'time';
          },
          convertSize: function (scale, size) {
            return this.isTimeScale(scale) ? this._parseInterval(size) : size;
          },
          normalize: function (value) {
            if (value.from > value.to) {
              const tmp = value.from;
              value.from = value.to;
              value.to = tmp;
            }

            return value;
          },
          getMiddle: function (value) {
            return (value.from + value.to) / 2;
          }
        };
        exports.Utils = Utils;
      },
      {}
    ],
    3: [
      function (require, module, exports) {
        (function (global) {
          'use strict';

          Object.defineProperty(exports, '__esModule', {
            value: true
          });
          exports.Rect = void 0;

          var _chart =
            typeof window !== 'undefined' ? window['Chart'] : typeof global !== 'undefined' ? global['Chart'] : null;

          var _utils = require('../core/utils');

          const Rect = _chart.Chart.Element.extend({
            inRange: function (mouseX, mouseY) {
              const rect = this._view.rect;
              return mouseX >= rect.x.from && mouseX <= rect.x.to && mouseY >= rect.y.from && mouseY <= rect.y.to;
            },
            getCenterPoint: function () {
              const vm = this._view;
              return {
                x: vm.x,
                y: vm.y
              };
            },
            getArea: function () {
              const rect = this._view.rect;
              return rect.x.size * rect.y.size;
            },
            draw: function () {
              const vm = this._view;
              const ctx = this._chart.ctx;
              ctx.save();
              ctx.lineWidth = vm.borderWidth;
              ctx.strokeStyle = vm.borderColor;
              ctx.fillStyle = vm.backgroundColor;
              const rect = vm.rect;
              ctx.fillRect(rect.x.from, rect.y.from, rect.x.size, rect.y.size);
              ctx.strokeRect(rect.x.from, rect.y.from, rect.x.size, rect.y.size);
              ctx.restore();
            }
          });

          exports.Rect = Rect;
        }.call(
          this,
          typeof global !== 'undefined'
            ? global
            : typeof self !== 'undefined'
            ? self
            : typeof window !== 'undefined'
            ? window
            : {}
        ));
      },
      { '../core/utils': 2 }
    ],
    4: [
      function (require, module, exports) {
        (function (global) {
          'use strict';

          var _chart =
            typeof window !== 'undefined' ? window['Chart'] : typeof global !== 'undefined' ? global['Chart'] : null;

          var _gantt = require('./controllers/gantt');

          var _linearGantt = require('./scales/linear-gantt');

          var _timeGantt = require('./scales/time-gantt');

          (0, _gantt.GanttController)(_chart.Chart);
          (0, _linearGantt.LinearGanttScale)(_chart.Chart);
          (0, _timeGantt.TimeGanttScale)(_chart.Chart);
        }.call(
          this,
          typeof global !== 'undefined'
            ? global
            : typeof self !== 'undefined'
            ? self
            : typeof window !== 'undefined'
            ? window
            : {}
        ));
      },
      { './controllers/gantt': 1, './scales/linear-gantt': 5, './scales/time-gantt': 7 }
    ],
    5: [
      function (require, module, exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        exports.LinearGanttScale = LinearGanttScale;

        var _scaleUtils = require('./scale-utils');

        function LinearGanttScale(Chart) {
          const scale = Chart.scaleService.getScaleConstructor('linear').extend({
            getRightValue: function (rawValue) {
              return _scaleUtils.ScaleUtils.getRightValue(this, rawValue);
            },
            determineDataLimits: function () {
              _scaleUtils.ScaleUtils.determineDataLimits(this);

              this.handleTickRangeOptions();
            },
            getLabelForIndex: function (index, datasetIndex) {
              return _scaleUtils.ScaleUtils.getLabelForIndex(this, index, datasetIndex);
            }
          });

          _scaleUtils.ScaleUtils.extendScale(Chart, 'linear', 'linear-gantt', scale);
        }
      },
      { './scale-utils': 6 }
    ],
    6: [
      function (require, module, exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        exports.ScaleUtils = void 0;

        var _utils = require('../core/utils');

        const helpers = Chart.helpers;
        const ScaleUtils = {
          getRightValue: function (scale, rawValue) {
            if (_utils.Utils.isRange(rawValue)) return _utils.Utils.getMiddle(rawValue);
            return scale.__proto__.__proto__.getRightValue.call(scale, rawValue);
          },
          determineDataLimits: function (scale) {
            const chart = scale.chart;
            const defaults = Chart.defaults.gantt;
            const isHorizontal = scale.isHorizontal();

            function IDMatches(meta) {
              return isHorizontal ? meta.xAxisID === scale.id : meta.yAxisID === scale.id;
            }

            scale.min = null;
            scale.max = null;
            helpers.each(chart.data.datasets, function (dataset, datasetIndex) {
              const meta = chart.getDatasetMeta(datasetIndex);

              if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
                const size = isHorizontal
                  ? _utils.Utils.convertSize(scale, helpers.valueOrDefault(dataset.width, defaults.width))
                  : _utils.Utils.convertSize(scale, helpers.valueOrDefault(dataset.height, defaults.height));
                helpers.each(dataset.data, function (rawValue, index) {
                  if (meta.data[index].hidden) {
                    return;
                  }

                  const value = _utils.Utils.extendValue(_utils.Utils.getValue(rawValue, scale), size);

                  if (typeof value !== 'object' && isNaN(value)) return;

                  _utils.Utils.normalize(value);

                  if (scale.min === null || scale.min > value.from) scale.min = value.from;
                  if (scale.max === null || scale.max < value.to) scale.max = value.to;
                });
              }
            });
          },
          getLabelForIndex: function (scale, index, datasetIndex) {
            const data = scale.chart.data.datasets[datasetIndex].data[index];
            const val = scale.isHorizontal() ? data.x : data.y;
            if (_utils.Utils.isRange(val)) return val.from + '~' + val.to;
            return val;
          },
          extendScale: function (Chart, base, newName, scaleClass) {
            const service = Chart.scaleService;
            const options = service.getScaleDefaults(base);
            service.registerScaleType(newName, scaleClass, options);
          }
        };
        exports.ScaleUtils = ScaleUtils;
      },
      { '../core/utils': 2 }
    ],
    7: [
      function (require, module, exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        exports.TimeGanttScale = TimeGanttScale;

        var _scaleUtils = require('./scale-utils');

        function TimeGanttScale(Chart) {
          const scale = Chart.scaleService.getScaleConstructor('time').extend({
            isTime: true,
            getRightValue: function (rawValue) {
              return _scaleUtils.ScaleUtils.getRightValue(this, rawValue);
            },
            determineDataLimits: function () {
              this.__proto__.__proto__.determineDataLimits.call(this);

              _scaleUtils.ScaleUtils.determineDataLimits(this);
            },
            getLabelForIndex: function (index, datasetIndex) {
              return _scaleUtils.ScaleUtils.getLabelForIndex(this, index, datasetIndex);
            }
          });

          _scaleUtils.ScaleUtils.extendScale(Chart, 'time', 'time-gantt', scale);
        }
      },
      { './scale-utils': 6 }
    ]
  },
  {},
  [4]
);
