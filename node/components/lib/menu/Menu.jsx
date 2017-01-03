var React = require('react');

module.exports = React.createClass({
    render: function(){
        var props = this.props;
        var list = props.list;

        return (
          <ul className="list-group">
            {list.map((menu, k) =>
              <a className="list-group-item" 
                 href={menu.href}
                 key={k}
                 >{menu.name}</a>
            )}
          </ul>
        );
    }
});