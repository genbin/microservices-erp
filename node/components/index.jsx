"use strict"
const React = require('react');
const ReactDom = require('react-dom');

const Layout = require('./layout/Normal.jsx');
const baseComponent = document.getElementById('base-component');
ReactDom.render(<Layout/>, baseComponent);

