import React from 'react';

export default React.createClass({
  filterBedrooms: function(e) {
    e.preventDefault();
    var bedrooms = this.refs.roomSelection.getDOMNode().value

    if(bedrooms === "disabled") return;

    this.props.transitionCb('filteredSuburb', {bedrooms: bedrooms, suburb: this.props.suburb});
  },
  render: function() {
    return (
      <div className='form-horizontal'>
        <form>
          <fieldset>
            <div className="form-group">
              <div className="col-lg-10">
                <select onChange={this.filterBedrooms} defaultValue="disabled" className="form-control" id="select" ref="roomSelection">
                  <option value="disabled" disabled>Filter by bedrooms</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3+</option>
                </select>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
});
