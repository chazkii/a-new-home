'use strict';

import React from 'react';

export default React.createClass({
  aboutSuburbGo: function() {
    var pageData = {
      suburb: this.refs.suburbSelection.getDOMNode().value
    }
    this.props.transitionCb('aboutSuburb', pageData);
  },
  render: function() {
    return (
      <div>
        <div className='col-md-6'>
          <h2>About my Suburb</h2>
          <SuburbPicker transitionCb={this.props.transitionCb} />
        </div>
        <div className='col-md-6'>
          <h2>Find a Suburb</h2>
          <a href="javascript:void(0)" onClick={this.props.transitionCb.bind(null, 'findSuburb')} className='btn btn-primary'>Go</a>
        </div>
      </div>
    );
  }
});
