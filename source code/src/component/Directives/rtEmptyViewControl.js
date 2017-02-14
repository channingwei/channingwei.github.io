/*global angular*/

angular.module('ckApp')
    .directive('rtEmptyView', function() {
        "use strict";
        return {
            restrict: 'E',
            replace: true,
            transclude: false,
            scope: false,
            template: function(element, attrs) {
                return '<div ng-if="!' + attrs.rtRelatedModel + ' ||' + attrs.rtRelatedModel + '.length===0" class="rt-empty-view">' +
                    '    <div>' +
                    '        <img src="component/img/empty.png" />' +
                    '        <p>' + attrs.rtMessage + '</p>' +
                    '    </div>' +
                    '</div>';
            }
        };
    });
