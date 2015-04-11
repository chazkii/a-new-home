window.SuburbPicker = React.createClass({
  aboutSuburbGo: function() {
    
  },
  render: function() {
    return (        
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
              <div className="col-lg-10">
                <button type="submit" className="btn btn-primary">Go</button>
              </div>
            </div>
          </div>
        </fieldset> 
      </form>
    </div>
   );
  }
})
