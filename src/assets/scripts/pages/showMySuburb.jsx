import React from 'react';
import DataGenerator from '../dataGenerators.js';

import IconRating from 'react-icon-rating';

var Result = React.createClass({
  render: function() {
    return (
      <div style={{textAlign: 'left'}}>
        <h2>{this.props.index}. {this.props.name}</h2>
        <div style={{marginLeft: '30px', fontSize: '18px', marginTop: '-20px'}}>
          <span>Average house price: {this.props.averagePrice}</span><br/>
          <span>Transport Stops: {this.props.transport}</span><br/>
          <span>
            Climate: {this.props.climate}
            <IconRating toggledClassName="mdi-image-wb-sunny" untoggledClassName="mdi-image-wb-sunny"/>
          </span><br/>
          <a href="javascript:void(0)" className='btn btn-primary'>View properties in this suburb</a>
        </div>
      </div>
    );
  }
});

export default React.createClass({
  render: function() {
    let results = this.props.pageData.map(function(suburbData, index) {
      return <Result index={index+1} name={suburbData.properties.suburb} averagePrice={DataGenerator.price()} transport={suburbData.busStops.numStops} climate={DataGenerator.climate()} />
    });
    return (
      <div>
        <div style={{width: '50%', margin: 'auto'}}>
          <a href="javascript:void(0)" className='btn btn-primary'>Want more control? Check out our premium version</a>
        </div>
        <div style={{margin: 'auto', width: '50%', clear: 'right'}}>
          <h1>Suggested for you!</h1>
          {results}
        </div>
      </div>
    );
  }
});
