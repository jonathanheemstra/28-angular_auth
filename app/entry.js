'use strict';

require('./scss/lib/base/main.scss');

const angular = require('angular');
const path = require('path');
const camelcase = require('camelcase');
const pascalcase = require('pascalcase');
const uiRouter = require('angular-ui-router');
const ngTouch = require('angular-touch');
const ngAnimate = require('angular-animate');

const fomogram = angular.module('fomogram', [ngTouch, ngAnimate, uiRouter]);

let context = require.context('./config/', true, /\.js$/);
context.keys().forEach( path => {
  fomogram.config(context(path));
});

context = require.context('./view/', true, /\.js$/);
context.keys().forEach( key => {
  let name = pascalcase(path.basename(key, '.js'));
  let module = context(key);
  fomogram.controller(name, module);
});

context = require.context('./service/', true, /\.js$/);
context.keys().forEach( key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  fomogram.controller(name, module);
});

context = require.context('./component/', true, /\.js$/);
context.keys().forEach( key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  fomogram.controller(name, module);
});
