var React = require('react');
var LeftMenu = require('./LeftMenu');
require('./DefLayout.scss');

module.exports = React.createClass({
    render: function(){
       return (
        <div className="base-main">
            <div className="base-menu">
                <LeftMenu/>
            </div>
            <div className="base-container">content</div>
        </div>
       ) 
    }
});