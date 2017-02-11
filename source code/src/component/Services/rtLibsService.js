/********************************************************
 Copyright @ 苏州瑞泰信息技术有限公司 All rights reserved.
 创建人   : East Lv
 创建时间 : 2016-03-10
 说明     : IonicJS & AngularJS的对象
 *********************************************************/
/*global angular*/

(function() {
    'use strict';
    angular.module('xrmApp')
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
