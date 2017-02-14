/*global angular:false */
angular.module('ckApp')
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
