'use strict';

module.exports = ['$log', '$rootScope', alertService];

function alertService($log, $rootScope) {
  $log.debug('alertService');

  let service = {};

  $rootScope.alerts = [];

  service.add = function(type, msg) {
    $rootScope.alerts.push({'type': type, 'msg': msg});
  };

  $rootScope.closeAlert = function(index) {
    $rootScope.alerts.splice(index, 1);
  };

  return service;
}
