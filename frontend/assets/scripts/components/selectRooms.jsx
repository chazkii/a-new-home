window.SelectRooms = React.createClass({
  filterBedrooms: function() {
    var bedrooms = this.refs.roomSelection.getDOMNode().value
    this.props.transitionCb('filteredSuburb', {bedrooms: bedrooms, suburb: this.props.pageData.suburb});
  },
  render: function() {
    return (
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
          <input type='submit' className='btn btn-primary'></input>
        </form>
      </div>
    );
  }
});
