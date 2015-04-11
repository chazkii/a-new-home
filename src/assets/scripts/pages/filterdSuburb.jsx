import React from 'react';
import SuburbPicker from '../components/suburbPicker.jsx';
import SelectRooms from '../components/selectRooms.jsx';

export default React.createClass({
  render: function() {
    return (
      <div>
        <h1 style={{textAlign: 'center'}}><b>{this.props.pageData.suburb.toUpperCase()}</b></h1>
        <h2>Average House Price for {this.props.pageData.bedrooms} bedrooms: ${Math.floor(Math.random() * 799) + 200}</h2>
        <SelectRooms transitionCb={this.props.transitionCb} suburb={this.props.pageData.suburb} />
        <h2>Check another suburb</h2>
        <SuburbPicker transitionCb={this.props.transitionCb} />
      </div>
    );
  }
});
