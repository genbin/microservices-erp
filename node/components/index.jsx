"use strict"
const React = require('react');
const ReactDom = require('react-dom');

var DefLayout = require('./layout/DefLayout.jsx');

var Menu = require('./lib/menu/Menu');
ReactDom.render( <DefLayout/>, 
document.getElementById('base-container'));

// var Auth = require('./user/Auth.jsx');
// ReactDom.render(<Auth/>, document.getElementById('global-dialog'));

