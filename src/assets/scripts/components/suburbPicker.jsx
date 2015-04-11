import React from 'react';
export default React.createClass({
  aboutSuburbGo: function(e) {
    e.preventDefault();
    var suburb = this.refs.suburbSelection.getDOMNode().value

    if(suburb === "disabled") return;

    this.props.transitionCb('aboutSuburb', {suburb});
  },
  render: function() {
    return (
     <div className='form-horizontal'>
      <form>
        <fieldset>
          <div className="form-group">
            <div className="col-lg-10">
              <select onChange={this.aboutSuburbGo} defaultValue="disabled" className="form-control" id="select" ref="suburbSelection">
                <option value="disabled" disabled>Select a suburb</option>
                <option>Te Aro</option>
                <option>Mt Cook</option>
                <option>Hataitai</option>
                <option>Mt Vic</option>
              </select>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
   );
  }
})
