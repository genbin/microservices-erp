var React = require('react');
var Menu = require('../lib/menu/Menu');

module.exports = React.createClass({
    render: function(){
        var list = [ 
            { name: '订单列表', href: '#', state: 'active' },
            { name: '订单设置', href: '#' },
            { name: '财务审核', href: '#' },
            { name: '在售商品管理', href: '#' },
            { name: '添加新商品', href: '#' },
            { name: '待售商品管理', href: '#' },
            { name: '分组管理', href: '#' },
            { name: '评价管理', href: '#', status: 'disabled' }
        ]
        return (
            <Menu list={list}/>
            );
    }
});