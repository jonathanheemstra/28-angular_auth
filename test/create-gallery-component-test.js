'use strict';

describe('Create Gallery Controller', function() {
  beforeEach(() => {
    angular.mock.module('fomogram');
    angular.mock.inject(($rootScope, $componentController, $window, $httpBackend, authService) => {
      this.$rootScope = $rootScope;
      this.$componentController = $componentController;
      this.$httpBackend = $httpBackend;
      this.$window = $window;
      this.authService = authService;
    });

    this.authService.token = null;
    this.$window.localStorage.setItem('token', 'test token');

    this.authService.getToken();
  });

  describe('createGalleryCtrl.createGallery()', () => {
    it('should call createGallery()', () => {

      let url = `${__API_URL__}/api/gallery`;
      let testGallery = {
        name: 'test name',
        desc: 'test description'
      };
      let headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer test token'
      };

      this.$httpBackend.expectPOST(url, testGallery, headers).respond(200);

      let createGalleryCtrl = this.$componentController('createGallery', null);
      createGalleryCtrl.gallery = testGallery;
      createGalleryCtrl.createGallery();
      this.$rootScope.$apply();
    });
  });
});
