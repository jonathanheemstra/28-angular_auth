'use strict';

// describe('Pic Service', function() {
//   beforeEach( () => {
//     angular.mock.module('fomogram');
//     angular.mock.inject(($rootScope, authService, galleryService, picService, $window, $httpBackend) => {
//       this.$window = $window;
//       this.$rootScope = $rootScope;
//       this.authService = authService;
//       this.galleryService = galleryService;
//       this.picService = picService;
//       this.$httpBackend = $httpBackend;
//     });
//
//     this.authService.token = null;
//     this.$window.localStorage.setItem('token', 'test token');
//
//     this.authService.getToken();
//
//     let galleryData = {
//       name: 'example gallery',
//       desc: 'example description'
//     };
//
//     this.galleryService.createGallery(galleryData);
//   });
//
//   describe('picService.UploadGalleryPic()', () => {
//     it('should upload a pic', () => {
//       let galleryData = {
//         _id: 'testid'
//       };
//       let picData = {
//         name: 'pic name',
//         desc: 'pic description',
//         file: '../app/assets/img/cf-logo.png',
//       };
//
//       this.picService.UploadGalleryPic(galleryData, picData);
//       this.$httpBackend.flush();
//       this.$rootScope.$apply();
//     });
//   });
// });
