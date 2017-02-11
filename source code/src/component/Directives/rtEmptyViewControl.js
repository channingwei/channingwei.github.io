/********************************************************
 Copyright @ 苏州瑞泰信息技术有限公司 All rights reserved.
 创建人   : joe Song
 创建时间 : 2016-03-10
 说明     :  当没有数据时显示的空白图片
 *********************************************************/
/*global angular*/

angular.module('xrmApp')
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
