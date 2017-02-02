'use strict';

describe('Gallery Service', function() {
  beforeEach( () => {
    angular.mock.module('fomogram');
    angular.mock.inject(($rootScope, authService, galleryService, $window, $httpBackend) => {
      this.$window = $window;
      this.$rootScope = $rootScope;
      this.authService = authService;
      this.galleryService = galleryService;
      this.$httpBackend = $httpBackend;
    });

    this.authService.token = null;
    this.$window.localStorage.setItem('token', 'test token');

    this.authService.getToken();
  });

  describe('galleryService.createGallery()', () => {
    it('should create a new gallery', () => {
      let galleryData = {
        name: 'example gallery',
        desc: 'example description'
      };
      let headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer test token'
      };

      this.$httpBackend.expectPOST('http://localhost:3000/api/gallery', galleryData, headers)
      .respond(200);

      this.galleryService.createGallery(galleryData);
      this.$httpBackend.flush();
      this.$rootScope.$apply();
    });
  });

  describe('galleryService.fetchGalleries()', () => {
    it('should fetch galleries', () => {
      let headers = {
        Accept: 'application/json',
        Authorization: 'Bearer test token'
      };

      this.$httpBackend.expectGET('http://localhost:3000/api/gallery', headers)
      .respond(200);

      this.galleryService.fetchGalleries();
      this.$httpBackend.flush();
      this.$rootScope.$apply();
    });
  });

  describe('galleryService.updateGalleries()', () => {
    it('should update gallery', () => {
      let galleryID = 'testid';
      let galleryData = {
        name: 'update example gallery',
        desc: 'update example description'
      };
      let headers = {
        Accept: 'application/json',
        Authorization: 'Bearer test token',
        'Content-Type': 'application/json'
      };

      this.$httpBackend.expectPUT('http://localhost:3000/api/gallery/testid', galleryData, headers)
      .respond(200);

      this.galleryService.updateGallery(galleryID, galleryData);
      this.$httpBackend.flush();
      this.$rootScope.$apply();
    });
  });

  describe('galleryService.deleteGallery()', () => {
    it('should delete a gallery', () => {
      let galleryID = 'testid';
      let headers = {
        Authorization: 'Bearer test token',
        Accept: 'application/json, text/plain, */*'
      };

      this.$httpBackend.expectDELETE('http://localhost:3000/api/gallery/testid', headers)
      .respond(204);

      this.galleryService.deleteGallery(galleryID);
      this.$httpBackend.flush();
      this.$rootScope.$apply();
    });
  });
});
