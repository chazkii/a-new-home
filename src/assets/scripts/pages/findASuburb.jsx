'use strict';

import React from 'react';

export default React.createClass({

  getInitialState() {
    return {
      showAdvanced: false
    };
  },

  componentDidMount: function() {
    var refs = [this.refs.priceSlider, this.refs.climateSlider, this.refs.transportSlider, this.refs.crimeSlider, this.refs.healthSlider, this.refs.cultureSlider];
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
        <h1>Transport</h1>
        <div>
          <p style={{float: 'left'}}>Near</p>
          <p style={{float: 'right'}}>Far</p>
          <div style={{clear: 'both'}} ref='transportSlider' className='slider shor slider-success'></div>
        </div>

        <a href="javascript:void(0)" onClick={this.props.transitionCb.bind(null, 'showMySuburb')} className='btn btn-primary'>Find my suburb</a>

        <div class="checkbox">
          <label>
            <input type="checkbox" onClick={this.toggleAdvanced}></input>
            <span> Advanced search</span>
          </label>
        </div>

        <div className={this.state.showAdvanced ? 'advanced-panel boxed-grey' : 'advanced-panel advanced-panel--disabled'}>
          <p className='lead'>
            Please <a href="javascript:void(0)">upgrade your account</a> to start using those data sources.
          </p>

          <h1>Crime rates</h1>
          <div>
            <p style={{float: 'left'}}>???</p>
            <p style={{float: 'right'}}>???</p>
            <div style={{clear: 'both'}} ref='crimeSlider' className='slider shor slider-success' disabled="disabled"></div>
          </div>

          <h1>Health facilities</h1>
          <div>
            <p style={{float: 'left'}}>???</p>
            <p style={{float: 'right'}}>???</p>
            <div style={{clear: 'both'}} ref='healthSlider' className='slider shor slider-success' disabled="disabled"></div>
          </div>

          <h1>Culture and arts</h1>
          <div>
            <p style={{float: 'left'}}>???</p>
            <p style={{float: 'right'}}>???</p>
            <div style={{clear: 'both'}} ref='cultureSlider' className='slider shor slider-success' disabled="disabled"></div>
          </div>

          <button disabled="disabled" className='btn btn-primary btn-disabled'>Find my suburb</button>
        </div>
      </div>
    );
  },

  toggleAdvanced() {
    this.setState({
        showAdvanced: !this.state.showAdvanced
    });
  }
});
