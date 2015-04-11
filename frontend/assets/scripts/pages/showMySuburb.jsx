import React from 'react';

var Result = React.createClass({
  render: function() {
    return (
      <div>
        <h1>{this.props.index} {this.props.name}</h1>
        <div style={{marginLeft: '30px'}}>
          <h2>Average house price: {this.props.averagePrice}</h2>
          <h2>Transport: {this.props.transport}</h2>
          <h2>Climate: {this.props.climate}</h2>
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
        <Result index={1} name="Karori" averagePrice={"$$"} transport={"99%"} climate={"90%"} />
        <Result index={2} name="Mt Cook" averagePrice={"$$$"} transport={"100%"} climate={"100%"} />
      </div>
    );
  }
});
