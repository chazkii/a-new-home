window.FilteredSuburb = React.createClass({
  render: function() {
    return (
      <div>
        <h1>{this.props.pageData.suburb}</h1>
        <h2>Average House Price</h2>
        <p>{this.props.pageData.bedrooms} bedrooms</p>
        <p>$100</p>

      </div>
    );
  }
});
