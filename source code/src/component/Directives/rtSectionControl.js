/********************************************************
 Copyright @ 苏州瑞泰信息技术有限公司 All rights reserved.
 创建人   : Channing Guo
 创建时间 : 2016-05-12
 说明     : Section(节)组件
 *********************************************************/
angular.module('xrmApp')
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