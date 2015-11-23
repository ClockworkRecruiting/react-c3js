# react-c3js

React component for [C3.js](http://c3js.org/)

Note: `c3.css` is not included.

## Installation

```
$ npm install --save react-c3js
```

## Usage

```JavaScript
import React from 'react';
import ReactDOM from 'react-dom';
import C3Chart from 'react-c3js';

class DataLineChart extends React.Component {
  render() {

    const data = {
      url: this.props.src,
      names: this.props.names,
      mimeType: 'json'
    };

    return (
      <C3Chart data={data} />
    );
  }
}

const src = 'c3_test.json';

const names = {
  data1: 'Name 1',
  data2: 'Name 2',
  data3: 'Name 3'
};

ReactDOM.render(<DataLineChart src={src} names={names} />, document.body)

```

## Properties

Check out [C3.js Reference](http://c3js.org/reference.html) for more details.

* data
* size
* padding
* color
* interaction
* transition
* oninit
* onrendered
* onmouseover
* onmouseout
* onresize
* onresized
* axis
* grid
* regions
* legend
* tooltip
* subchart
* zoom
* point
* line
* area
* bar
* pie
* donut
* gauge
* className
* style

## License

MIT