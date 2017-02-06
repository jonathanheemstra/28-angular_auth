'use strict';

module.exports = {
  template: require('./thumbnail.html'),
  controller: ['$log', 'picService', ThumbnailController],
  controllerAs: 'thumbnailCtrl',
  bindings: {
    pic: '<',
    gallery: '<'
  }
};

function ThumbnailController($log, picService) {
  $log.debug('ThumbnailController');

  this.deletePic = function() {
    picService.DeleteGalleryPic(this.gallery, this.pic)
    .then( () => {
      $log.debug('image deleted');
    });
  };
}
