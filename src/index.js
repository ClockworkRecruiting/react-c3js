import React, { Component } from 'react';
import PropTypes from 'prop-types';
import c3 from 'c3';
import 'c3/c3.css';

class C3Chart extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  static displayName = 'C3Chart';

  static propTypes = {
    data: PropTypes.object.isRequired,
    title: PropTypes.object,
    size: PropTypes.object,
    padding: PropTypes.object,
    color: PropTypes.object,
    interaction: PropTypes.object,
    transition: PropTypes.object,
    oninit: PropTypes.func,
    onrendered: PropTypes.func,
    onmouseover: PropTypes.func,
    onmouseout: PropTypes.func,
    onresize: PropTypes.func,
    onresized: PropTypes.func,
    axis: PropTypes.object,
    grid: PropTypes.object,
    regions: PropTypes.array,
    legend: PropTypes.object,
    tooltip: PropTypes.object,
    subchart: PropTypes.object,
    zoom: PropTypes.object,
    point: PropTypes.object,
    line: PropTypes.object,
    area: PropTypes.object,
    bar: PropTypes.object,
    pie: PropTypes.object,
    donut: PropTypes.object,
    gauge: PropTypes.object,
    className: PropTypes.string,
    style: PropTypes.object,
    unloadBeforeLoad: PropTypes.bool,
    onPropsChanged: PropTypes.func,
  };

  componentDidMount() {
    // Function override
    c3.chart.internal.fn.tooltipPosition = function (dataToShow, tWidth, tHeight, element) {
      const $$ = this,
        config = $$.config,
        d3 = $$.d3;
      let svgLeft, tooltipLeft, tooltipRight, tooltipTop, chartRight;
      const forArc = $$.hasArcType(),
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

      return { top: tooltipTop, left: tooltipLeft };
    };

    this.updateChart(this.props);
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.updateChart(this.props);
      if (this.props.onPropsChanged) {
        this.props.onPropsChanged(prevProps, this.props, this.chart);
      }
    }
  }

  componentWillUnmount() {
    this.destroyChart();
  }

  destroyChart() {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  generateChart(mountNode, config) {
    const newConfig = { ...config, bindto: mountNode };
    return c3.generate(newConfig);
  }

  loadNewData(data) {
    if (data && data.type !== 'donut') {
      this.chart.load(data);
    }
  }

  unloadData() {
    this.chart.unload();
  }

  updateChart(config) {
    if (!this.chart) {
      this.chart = this.generateChart(this.chartRef.current, config);
    }

    if (config.unloadBeforeLoad) {
      this.unloadData();
    }

    this.loadNewData(config.data);
  }

  render() {
    const { className, style } = this.props;
    return <div ref={this.chartRef} className={className || ''} style={style || {}} />;
  }
}

export default C3Chart;
