'use strict';

module.exports = ['$log', LandingController];

function LandingController($log) {
  $log.debug('LandingController');

  this.title = 'welcome to landing';
}
