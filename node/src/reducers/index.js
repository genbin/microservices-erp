/*
var combineReducers = require('redux').combineReducers;
var items = require('./items');

const rootReducer = combineReducers({
  items: items
});

module.exports = rootReducer;
*/

import { combineReducers } from 'redux';
import { organization } from './organization';
// import { companies } from './companies';

export default combineReducers({
    // companies,
    organization
});