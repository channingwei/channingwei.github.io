/*global angular:false */

(function(window, document, undefined) {
    'use strict';
    angular.module('ckApp')
        .directive('rtFilterContainer', ['rt', function(rt) {
            return {
                restrict: 'E',
                replace: true,
                transclude: true,
                scope: {
                    rtVisible: "=",
                    rtOnReset: "&",
                    rtOnSearch: "&"
                },
                template: '<div ng-show="rtVisible" class="rt-filter-view">' +
                    '    <div class="_mask" ng-click="hideFilterView()"></div>' +
                    '    <div class="_content" ng-transclude></div>' +
                    '    <div class="_footer">' +
                    '        <button class="button button-clear button-positive" style="width:50%;" ng-click="rtOnReset()">' +
                    '           {{ "component_Reset" | translate }}' +
                    '       </button>' +
                    '        <button class="button button-clear button-positive" style="width:50%;float:right;" ng-click="doFilter()">' +
                    '           {{ "component_Search" | translate }}' +
                    '       </button>' +
                    '    </div>' +
                    '</div>',
                link: function(scope, element, attrs, ngModelCtrl) {
                    function _hideFilterView() {
                        scope.rtVisible = false;
                    }

                    scope.hideFilterView = _hideFilterView;

                    scope.doFilter = function() {
                        _hideFilterView();
                        scope.rtOnSearch();
                    };
                }
            };
        }])
        .directive('rtFilterView', function() {
            return {
                restrict: 'E',
                replace: true,
                require: 'ngModel',
                transclude: true,
                scope: {},
                template: '<div>' + '</div>',
                link: function(scope, element, attrs, ngModelCtrl) {
                    //
                }
            };
        });
})(window, document);
