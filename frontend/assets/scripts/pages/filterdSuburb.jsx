import React from 'react';
import SuburbPicker from '../components/suburbPicker.jsx';
import SelectRooms from '../components/selectRooms.jsx';

export default React.createClass({
  render: function() {
    return (
      <div>
        <h1>{this.props.pageData.suburb}</h1>
        <h2>Average House Price</h2>
        <p>{this.props.pageData.bedrooms} bedrooms</p>
        <p>$100</p>
        <SelectRooms transitionCb={this.props.transitionCb} suburb={this.props.pageData.suburb} />
        <h2>Check another suburb</h2>
        <SuburbPicker transitionCb={this.props.transitionCb} />
      </div>
    );
  }
});
