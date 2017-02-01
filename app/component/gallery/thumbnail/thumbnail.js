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

  // TODO: need a methdo to fill in for the delete-done

  this.deletePic = function() {
    picService.DeleteGalleryPic(this.gallery, this.pic)
    .then( () => {
      $log.debug('image deleted');
    });
  };
}
