"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _c = _interopRequireDefault(require("c3"));
require("c3/c3.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var C3Chart = /*#__PURE__*/function (_Component) {
  _inherits(C3Chart, _Component);
  var _super = _createSuper(C3Chart);
  function C3Chart(props) {
    var _this;
    _classCallCheck(this, C3Chart);
    _this = _super.call(this, props);
    _this.chartRef = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }
  _createClass(C3Chart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Function override
      _c["default"].chart.internal.fn.tooltipPosition = function (dataToShow, tWidth, tHeight, element) {
        var $$ = this,
          config = $$.config,
          d3 = $$.d3;
        var svgLeft, tooltipLeft, tooltipRight, tooltipTop, chartRight;
        var forArc = $$.hasArcType(),
          mouse = d3.mouse(element);

        // Determin tooltip position
        if (forArc) {
          tooltipLeft = ($$.width - ($$.isLegendRight ? $$.getLegendWidth() : 0)) / 2 + mouse[0];
          tooltipTop = $$.height / 2 + mouse[1] + 20;
        } else {
          svgLeft = $$.getSvgLeft(true);
          if (config.axis_rotated) {
            tooltipLeft = svgLeft + mouse[0] + 100;
            tooltipRight = tooltipLeft + tWidth;
            chartRight = $$.currentWidth - $$.getCurrentPaddingRight();
            tooltipTop = $$.x(dataToShow[0].x) + 20;
          } else {
            tooltipLeft = svgLeft + $$.getCurrentPaddingLeft(true) + $$.x(dataToShow[0].x) + 20;
            tooltipRight = tooltipLeft + tWidth;
            chartRight = svgLeft + $$.currentWidth - $$.getCurrentPaddingRight();
            tooltipTop = mouse[1] + 15;
          }
          if (tooltipRight > chartRight) {
            // 20 is needed for Firefox to keep tooltip width
            tooltipLeft -= tooltipRight - chartRight + 20;
          }
          if (tooltipTop + tHeight > $$.currentHeight) {
            tooltipTop -= tHeight + 30;
          }
        }
        if (tooltipTop < 0) {
          tooltipTop = 0;
        }
        return {
          top: tooltipTop,
          left: tooltipLeft
        };
      };
      this.updateChart(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props !== prevProps) {
        this.updateChart(this.props);
        if (this.props.onPropsChanged) {
          this.props.onPropsChanged(prevProps, this.props, this.chart);
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroyChart();
    }
  }, {
    key: "destroyChart",
    value: function destroyChart() {
      if (this.chart) {
        this.chart.destroy();
      }
    }
  }, {
    key: "generateChart",
    value: function generateChart(mountNode, config) {
      var newConfig = _objectSpread(_objectSpread({}, config), {}, {
        bindto: mountNode
      });
      return _c["default"].generate(newConfig);
    }
  }, {
    key: "loadNewData",
    value: function loadNewData(data) {
      if (data && data.type !== 'donut') {
        this.chart.load(data);
      }
    }
  }, {
    key: "unloadData",
    value: function unloadData() {
      this.chart.unload();
    }
  }, {
    key: "updateChart",
    value: function updateChart(config) {
      if (!this.chart) {
        this.chart = this.generateChart(this.chartRef.current, config);
      }
      if (config.unloadBeforeLoad) {
        this.unloadData();
      }
      this.loadNewData(config.data);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        className = _this$props.className,
        style = _this$props.style;
      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.chartRef,
        className: className || '',
        style: style || {}
      });
    }
  }]);
  return C3Chart;
}(_react.Component);
_defineProperty(C3Chart, "displayName", 'C3Chart');
_defineProperty(C3Chart, "propTypes", {
  data: _propTypes["default"].object.isRequired,
  title: _propTypes["default"].object,
  size: _propTypes["default"].object,
  padding: _propTypes["default"].object,
  color: _propTypes["default"].object,
  interaction: _propTypes["default"].object,
  transition: _propTypes["default"].object,
  oninit: _propTypes["default"].func,
  onrendered: _propTypes["default"].func,
  onmouseover: _propTypes["default"].func,
  onmouseout: _propTypes["default"].func,
  onresize: _propTypes["default"].func,
  onresized: _propTypes["default"].func,
  axis: _propTypes["default"].object,
  grid: _propTypes["default"].object,
  regions: _propTypes["default"].array,
  legend: _propTypes["default"].object,
  tooltip: _propTypes["default"].object,
  subchart: _propTypes["default"].object,
  zoom: _propTypes["default"].object,
  point: _propTypes["default"].object,
  line: _propTypes["default"].object,
  area: _propTypes["default"].object,
  bar: _propTypes["default"].object,
  pie: _propTypes["default"].object,
  donut: _propTypes["default"].object,
  gauge: _propTypes["default"].object,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  unloadBeforeLoad: _propTypes["default"].bool,
  onPropsChanged: _propTypes["default"].func
});
var _default = C3Chart;
exports["default"] = _default;
