'use strict';

import React from 'react';

export default React.createClass({
  componentDidMount: function() {
    var refs = [this.refs.priceSlider, this.refs.climateSlider, this.refs.rainSlider, this.refs.transportSlider];
    refs.forEach(function(ref) {
      $(ref.getDOMNode()).noUiSlider({
        start: 50,
        connect: 'lower',
        range: {
          min: 0,
          max: 100
        }
      });
    });
  },
  render: function() {
    return (
      <div style={{margin: 'auto', width: '50%'}}>
        <h1>House Price</h1>
        <div>
          <p style={{float: 'left'}}>Min</p>
          <p style={{float: 'right'}}>Max</p>
          <div style={{clear: 'both'}} ref='priceSlider' className='slider shor slider-success'></div>
        </div>
        <h1>Climate</h1>
        <div>
          <p style={{float: 'left'}}>???</p>
          <p style={{float: 'right'}}>???</p>
          <div style={{clear: 'both'}} ref='climateSlider' className='slider shor slider-success'></div>
        </div>
        <h1>Rainfall</h1>
        <div>
          <p style={{float: 'left'}}>Low</p>
          <p style={{float: 'right'}}>High</p>
          <div style={{clear: 'both'}} ref='rainSlider' className='slider shor slider-success'></div>
        </div>
        <h1>Transport</h1>
        <div>
          <p style={{float: 'left'}}>Near</p>
          <p style={{float: 'right'}}>Far</p>
          <div style={{clear: 'both'}} ref='transportSlider' className='slider shor slider-success'></div>
        </div>

        <a href="javascript:void(0)" onClick={this.props.transitionCb.bind(null, 'showMySuburb')} className='btn btn-primary'>Find my suburb</a>
      </div>
    );
  }
});
