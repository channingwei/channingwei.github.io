/*global angular*/

angular.module('ckApp')
    .directive('rtSection', function() {
        "use strict";
        return {
            restrict: "EA",
            scope: false,
            replace: true,
            template: function(element, attrs) {
                return '<div class="rt-section">' +
                    '<i' + (angular.isDefined(attrs.rtColor) ? ' style="background-color:'+attrs.rtColor+'"' : "") + '></i>' +
                    attrs.rtTitle +
                    '</div>';
            }
        };
    });
