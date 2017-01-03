var React = require('react');

module.exports = React.createClass({
  componentDidMount() {
    $('#global-dialog div').modal('show'); 
  },

  onClickCloseDialog() {
    $('#global-dialog div').modal('hide'); 
  },

  render: function() {
    return (
        <div className="modal fade">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                  onClick={this.onClickCloseDialog}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title">用户登录</h4>
              </div>
              <div className="modal-body">
                <p>登录内容</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.onClickCloseDialog}>Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>            
        );
  }
});