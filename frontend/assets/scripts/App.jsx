'use strict';

import React from 'react';

import Index from './pages/index.jsx';
import AboutSuburb from './pages/aboutSuburb.jsx';
import FilteredSuburb from './pages/filterdSuburb.jsx';
import FindASuburb from './pages/findASuburb.jsx';
import ShowMySuburb from './pages/showMySuburb.jsx';

var pages = {
  index: Index,
  aboutSuburb: AboutSuburb,
  filteredSuburb: FilteredSuburb,
  findASuburb: FindASuburb,
  showMySuburb: ShowMySuburb
};

export default React.createClass({
  getInitialState: function() {
    return {
      handler: pages.index,
      pageData: {}
    };
  },
  transition: function(to, pageData) {
    this.setState({handler: pages[to], pageData: pageData});
  },
  render: function() {
    var Handler = this.state.handler;
    var containerStyle = {
      width: '960px',
      margin: 'auto'
    };
    return (
      <div style={containerStyle} className='well well-lg row'>
       <div>Header</div>
       <Handler transitionCb={this.transition} pageData={this.state.pageData} />
      </div>
    );
  }
});
