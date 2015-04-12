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
        step: 1,
        range: {
          min: 1,
          max: 5
        }
      });
    });
  },
  sendToServer: function() {
    var score = [this.refs.priceSlider, this.refs.climateSlider, this.refs.transportSlider].map(function(ref) {
      return parseInt($(ref.getDOMNode()).val(), 10);
    });
    $.get('/suburbs', {housingScore: score[0], climateScore: score[1], transportScore: score[2]}).done((resp) => {
      this.props.transitionCb('showMySuburb', resp);
    });

  },
  render: function() {

    return (
      <div style={{margin: 'auto', width: '50%'}}>
        <h1>House Price</h1>
        <div>
          <p style={{float: 'left'}}>Low</p>
          <p style={{float: 'right'}}>High</p>
          <div style={{clear: 'both'}} ref='priceSlider' className='slider shor slider-success'></div>
        </div>
        <h1>Climate</h1>
        <div>
          <p style={{float: 'left'}}>Humid</p>
          <p style={{float: 'right'}}>Dry</p>
          <div style={{clear: 'both'}} ref='climateSlider' className='slider shor slider-success'></div>
        </div>
        <h1>Public Transport</h1>
        <div>
          <p style={{float: 'left'}}>Near</p>
          <p style={{float: 'right'}}>Far</p>
          <div style={{clear: 'both'}} ref='transportSlider' className='slider shor slider-success'></div>
        </div>

        <a href="javascript:void(0)" onClick={this.sendToServer} className='btn btn-primary'>Find my suburb</a>

        <div className="togglebutton">
          <label>
            <input type="checkbox" onClick={this.toggleAdvanced}></input>
            <span> Advanced search</span>
          </label>
        </div>

        <div className={this.state.showAdvanced ? 'advanced-panel boxed-grey' : 'advanced-panel advanced-panel--disabled'}>
          <p className='lead'>
            Please <a href="javascript:void(0)">upgrade your account</a> to start using those data sources.
          </p>

          <div style={{width: '75%', margin: 'auto'}}>
            <h2>Accomodation type</h2>
            <div>
              <div style={{float: 'left', width: '50%'}}>
                <div className="radio radio-primary">
                  <label>
                    <input type='radio' checked/>
                    <p style={{marginLeft: '-7px', marginTop: '-4px'}}>Apartment</p>
                  </label>
                </div>
              </div>
              <div style={{float: 'right', width: '50%'}}>
                <div className="radio radio-primary">
                  <label>
                    <input type='radio'/>
                    <p style={{marginLeft: '-7px', marginTop: '-4px'}}>House</p>
                  </label>
                </div>
              </div>
            </div>
          </div>
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
