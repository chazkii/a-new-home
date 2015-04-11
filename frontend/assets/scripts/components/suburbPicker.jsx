import React from 'react';
export default React.createClass({
  aboutSuburbGo: function(e) {
    var suburb = this.refs.suburbSelection.getDOMNode().value
    this.props.transitionCb('aboutSuburb', {suburb});
    e.preventDefault();
  },
  render: function() {
    return (        
     <div className='form-horizontal'>
      <form onSubmit={this.aboutSuburbGo}>
        <fieldset>
          <div className="form-group">
            <div className="col-lg-10">
              <select className="form-control" id="select" ref="suburbSelection">
                <option value="" disabled>Select a suburb</option>
                <option>Te Aro</option>
                <option>Mt Cook</option>
                <option>Hataitai</option>
                <option>Mt Vic</option>
              </select>
            </div>
          </div>
        </fieldset> 
        <input type="submit" className="btn btn-primary"></input>
      </form>
    </div>
   );
  }
})
