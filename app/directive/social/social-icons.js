'use strict';

module.exports = function() {
  return {
    restrict: 'EAC',
    template: require('./social-icons.html'),
    controller: ['$log', SocialIconsController],
    controllerAs: 'socialIconsCtrl',
    bindToController: true,
    scope: {
      title: '@'
    }
  };
};

function SocialIconsController($log) {
  $log.debug('SocialIconsController');

  this.icons = ['facebook', 'twitter', 'instagram', 'linkedin', 'github'];
}
