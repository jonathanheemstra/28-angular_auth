'use strict';

describe('Auth Service', function() {
  beforeEach( () => {
    angular.mock.module('fomogram');
    angular.mock.inject(($rootScope, authService, $window, $httpBackend) => {
      this.$window = $window;
      this.$rootScope = $rootScope;
      this.authService = authService;
      this.$httpBackend = $httpBackend;
    });
  });

  describe('authService.getToken()', () => {
    it('should return a token', () => {
      this.authService.token = null;
      this.$window.localStorage.setItem('token', 'test token');

      this.authService.getToken()
      .then( token => {
        expect(token).toEqual('test token');
      });

      this.$rootScope.$apply();
    });
  });

  describe('authService.logout()', () => {
    it('should log a user out', () => {
      this.authService.token = null;
      this.$window.localStorage.setItem('token', 'test token');

      this.authService.logout()
      .then( token => {
        expect(token).toEqual(null);
      });

      this.$rootScope.$apply();
    });
  });
});
