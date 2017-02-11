/********************************************************
Copyright @ 苏州瑞泰信息技术有限公司 All rights reserved. 
 创建人   : joe Song
 创建时间 : 2016-03-10
 说明     : 自动设置焦点的Directive
*********************************************************/

angular.module('xrmApp')
    .directive('focusOn', function() {
        return function(scope, element, attr) {
            scope.$on('focusOn', function(e, name) {
                if (name === attr.focusOn) {
                    element[0].focus();
                }
            });
        };

    }).factory('focus', function($rootScope, $timeout) {
        return function(name) {
            $timeout(function() {
                $rootScope.$broadcast('focusOn', name);
            });
        };
    });
