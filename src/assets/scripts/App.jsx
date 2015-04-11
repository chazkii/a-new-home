'use strict';

import React from 'react';

import Index from './pages/index.jsx';
import AboutSuburb from './pages/aboutSuburb.jsx';
import FilteredSuburb from './pages/filterdSuburb.jsx';
import FindASuburb from './pages/findASuburb.jsx';
import ShowMySuburb from './pages/showMySuburb.jsx';
import ExampleCharts from './pages/exampleCharts.jsx';

var pages = {
  index: Index,
  aboutSuburb: AboutSuburb,
  filteredSuburb: FilteredSuburb,
  findASuburb: FindASuburb,
  showMySuburb: ShowMySuburb,
  exampleCharts: ExampleCharts
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
        <div><a href="javascript:void(0)" onClick={this.transition.bind(null, 'index')}><img src="assets/Lgog-02.png" width="480"/></a></div>
        <Handler transitionCb={this.transition} pageData={this.state.pageData} />
      </div>
    );
  }
});
