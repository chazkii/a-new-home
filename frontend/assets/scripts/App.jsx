var pages = {
  index: Index,
  aboutSuburb: AboutSuburb
};
window.App = React.createClass({
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
      <div style={containerStyle}>
       <div>Header</div>
       <Handler transitionCb={this.transition} pageData={this.state.pageData} />
      </div>
    );
  }
});
