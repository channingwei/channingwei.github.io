/*global angular*/

angular.module('ckApp')
    .directive('rtProcessSteps', ['rt', function(rt) {
        'use strict';
        return {
                  restrict: "E",
                   scope: {
                       rtModel: "="
                   },
                  replace: true,
                  template: function(element, attrs) {
                        return '<div class="rt-process-steps-view">' +
                                  '<div ng-repeat="data in rtModel" ng-class="{\'rt-content-last\': $last,\'rt-content-not-last\': !$last}">' +
                                      '<img ng-if="$first" src="component/img/now-in.png" class="rt-img">' +
                                      '<img ng-if="!$first" src="component/img/done.png" class="rt-img">' +
                                      '<div style="float: right;width: {{ScreenWidth - 40}}px;">' +
                                          '<div ng-if="$first" class="rt-content-first">{{data.title}}</div>' +
                                          '<div ng-if="!$first" class="rt-content-not-first">{{data.title}}</div>' +
                                          '<div class="rt-content-date">{{data.date}}</div>' +
                                      '</div>' +
                                  '</div>' +
                               '</div>'
                  },
                  controller: function($scope, $element) {
                    $scope.ScreenWidth = rt.getScreenWidth();
                  }
            };
    }]);
