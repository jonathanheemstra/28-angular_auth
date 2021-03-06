'use strict';

module.exports = ['$log', '$location', 'authService', LandingController];

function LandingController($log, $location, authService) {
  $log.debug('LandingController');

  let url = $location.url();
  this.showSignup = url === '/join#signup' || url === '/join';
}
