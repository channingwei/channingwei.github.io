/*global angular*/

(function() {
    'use strict';
    angular.module('ckApp')
        .service('rtLibs', ['$ionicActionSheet', '$ionicHistory', '$ionicPopover', '$ionicLoading', '$state', '$stateParams', '$rootScope', '$timeout', function($ionicActionSheet, $ionicHistory, $ionicPopover, $ionicLoading, $state, $stateParams, $rootScope, $timeout) {
            this.ionicActionSheet = $ionicActionSheet;
            this.ionicHistory = $ionicHistory;
            this.ionicPopover = $ionicPopover;
            this.ionicLoading = $ionicLoading;

            this.state = $state;
            this.stateParams = $stateParams;
            this.timeout = $timeout;
            this.rootScope = $rootScope;
        }]);
})();
