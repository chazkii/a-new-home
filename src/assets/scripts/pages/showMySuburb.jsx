import React from 'react';
import DataGenerator from '../dataGenerators.js';

import IconRating from 'react-icon-rating';

var Result = React.createClass({
  render: function() {
    return (
      <div>
        <h1>{this.props.index} {this.props.name}</h1>
        <div style={{marginLeft: '30px'}}>
          <h2>Average house price: {this.props.averagePrice}</h2>
          <h2>Transport: {this.props.transport}</h2>
          <h2>
            Climate: {this.props.climate}
            <IconRating toggledClassName="mdi-image-wb-sunny" untoggledClassName="mdi-image-wb-sunny"/>
          </h2>
        </div>
      </div>
    );
  }
});

export default React.createClass({
  render: function() {
    return (
      <div style={{margin: 'auto', width: '50%'}}>
        <h1>Suggested for you!</h1>
        <Result index={1} name="Karori" averagePrice={DataGenerator.price()} transport={DataGenerator.transport()} climate={DataGenerator.climate()} />
        <Result index={2} name="Mt Cook" averagePrice={DataGenerator.price()} transport={DataGenerator.transport()} climate={DataGenerator.climate()} />
      </div>
    );
  }
});
