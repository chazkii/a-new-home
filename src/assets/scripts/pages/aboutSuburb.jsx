'use strict';

import React from 'react';
import SelectRooms from '../components/selectRooms.jsx';
import SuburbPicker from '../components/suburbPicker.jsx';

export default React.createClass({
  render: function() {
    return (
      <div>
        <h1 style={{textAlign: 'center'}}><b>{this.props.pageData.suburb.toUpperCase()}</b></h1>
        <h2><b>Average house price:</b> $$$$</h2>
        <SelectRooms transitionCb={this.props.transitionCb} suburb={this.props.pageData.suburb}/>
        <h2>Climate: 75%</h2>
        <h2>Transport: 99%</h2>
        <hr />
        <h2>Check another suburb</h2>
        <SuburbPicker transitionCb={this.props.transitionCb} />
      </div>
    );
  }
});
