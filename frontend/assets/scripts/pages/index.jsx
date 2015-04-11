'use strict';

window.Index = React.createClass({
  aboutSuburbGo: function() {
    var pageData = {
      suburb: this.refs.suburbSelection.getDOMNode().value
    }
    this.props.transitionCb('aboutSuburb', pageData); 
  },
  render: function() {
    var leftStyle = {
      width: '50%',
      float: 'left'
    };
    var rightStyle = {
      width: '50%',
      float: 'right'
    };
    return (
      <div>
        <div style={leftStyle}>
          <h2>About my Suburb</h2>
          <div className='form-horizontal'>
            <form onSubmit={this.aboutSuburbGo}>
              <fieldset>
                <div className="form-group">
                  <div className="col-lg-10">
                    <select className="form-control" id="select" ref="suburbSelection">
                      <option>Te Aro</option>
                      <option>Mt Cook</option>
                      <option>Hataitai</option>
                      <option>Mt Vic</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <div className="col-lg-10 col-lg-offset-2">
                      <button type="submit" className="btn btn-primary">Go</button>
                    </div>
                  </div>
                </div>
              </fieldset> 
            </form>
          </div>
        </div>
        <div style={rightStyle}>
          <h2>Find a Suburb</h2>
          <a href="javascript:void(0)" onClick={this.props.transitionCb.bind(null, 'findSuburb')} className='btn btn-primary'>Go</a>
        </div>
      </div>
    );
  }
});
