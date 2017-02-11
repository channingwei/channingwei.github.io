/********************************************************
 Copyright @ 苏州瑞泰信息技术有限公司 All rights reserved.
 创建人   : East Lv
 创建时间 : 2016-06-03
 说明     : 导航相关控件
 *********************************************************/
/*global angular*/

(function() {
    'use strict';

    angular.module('xrmApp')
        /*-------   列表   -------*/
        .directive('rtNavButtonBack', function() {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    rtOnClick: "&"
                },
                template: '<button class="button button-clear button-icon back-button ion-ios-arrow-left" ng-click="rtOnClick()"></button>'
            };
        })
        .directive("rtNavButtonAdd", function() {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    rtOnClick: "&"
                },
                template: '<button class="button button-clear button-icon ion-ios-plus-empty" ng-click="rtOnClick()"></button>'
            };
        })
        .directive("rtNavButtonMore", function() {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    rtOnClick: "&"
                },
                template: '<button class="button button-clear button-icon ion-ios-more" ng-click="rtOnClick()"></button>'
            };
        })
        .directive("rtNavButtonFilter", function() {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    rtOnClick: "&"
                },
                template: '<button class="button button-clear button-icon rt-icon-filter" ng-click="rtOnClick()"></button>'
            };
        })
        .directive("rtNavButtonText", function() {
            return {
                restrict: 'E',
                replace: true,
                transclude: true,
                template: '<button class="button button-clear" ng-click="rtOnClick()" ng-transclude></button>',
                scope: {
                    rtOnClick: "&"
                }
            };
        });
})();
