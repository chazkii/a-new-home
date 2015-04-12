'use strict';

import React from 'react';
import SuburbPicker from '../components/suburbPicker.jsx';

export default React.createClass({
  render: function() {
    return (
      <div>
        <div style={{width: '33%', margin: 'auto'}}>
          <h1>I'm interested in...</h1>
          <div>
            <div style={{float: 'left', width: '50%'}}>
              <div className="radio radio-primary">
                <label>
                  <input type='radio' checked/>
                  <p style={{marginLeft: '-7px', marginTop: '-4px'}}>Renting</p>
                </label>
              </div>
            </div>
            <div style={{float: 'right', width: '50%'}}>
              <div className="radio radio-primary">
                <label>
                  <input type='radio'/>
                  <p style={{marginLeft: '-7px', marginTop: '-4px'}}>Buying</p>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div style={{clear: 'both'}}></div>
        <div className='col-md-6'>
          <h2>About my Suburb</h2>
          <SuburbPicker transitionCb={this.props.transitionCb} />
        </div>
        <div className='col-md-6'>
          <h2>Find a Suburb</h2>
          <a href="javascript:void(0)" onClick={this.props.transitionCb.bind(null, 'findASuburb')} className='btn btn-primary'>Go</a>
        </div>
      </div>
    );
  }
});
