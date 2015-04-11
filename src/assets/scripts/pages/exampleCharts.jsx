'use strict';

import React from 'react';
import ChartistGraph from '../components/ChartistGraph.jsx';

export default React.createClass({
  render() {

    var simpleLineChartData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        series: [
            [12, 9, 7, 8, 5],
            [2, 1, 3.5, 7, 3],
            [1, 3, 4, 5, 6]
        ]
    };

    var pieData = {
      labels: ['Bananas', 'Apples', 'Grapes'],
      series: [20, 15, 40]
    };

    var options = {
      labelInterpolationFnc: function(value) {
        return value[0];
      }
    };

    var responsiveOptions = [
      ['screen and (min-width: 640px)', {
        chartPadding: 30,
        labelOffset: 100,
        labelDirection: 'explode',
        labelInterpolationFnc: function(value) {
          return value;
        }
      }],
      ['screen and (min-width: 1024px)', {
        labelOffset: 80,
        chartPadding: 20
      }]
    ];

    return (
      <div>
        <ChartistGraph data={simpleLineChartData} type={'Line'} />
        <ChartistGraph data={pieData} options={options} responsiveOptions={responsiveOptions} type={'Pie'} />
      </div>
    );
  }
});
