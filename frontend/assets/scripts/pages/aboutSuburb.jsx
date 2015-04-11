window.AboutSuburb = React.createClass({
  render: function() {
    return (
      <div>
        <h1>{this.props.pageData.suburb}</h1>
        <h2>Average house price: $$$$</h2>
        <div className='form-horizontal'>
          <form onSubmit={this.filterBedrooms}>
            <fieldset>
              <div className="form-group">
                <div className="col-lg-10">
                  <select className="form-control" id="select" ref="roomSelection">
                    <option value="" disabled selected>Filter by bedrooms</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3+</option>
                  </select>
                </div>
              </div>
            </fieldset> 
          </form>
        </div>
        <h2>Climate: 75%</h2>
        <h2>Transport: 99%</h2>
      </div>
    );
  }
});
