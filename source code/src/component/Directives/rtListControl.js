/********************************************************
 Copyright @ 苏州瑞泰信息技术有限公司 All rights reserved.
 创建人   :
 创建时间 : 2016-03-10
 说明     : 列表
 *********************************************************/
/*global angular*/

angular.module('xrmApp')
    /*-------   列表   -------*/
    .directive('rtList', function($timeout) {
        'use strict';
        return {
            restrict: 'E',
            replace: true,
            scope: {
                hasDivider: "@"
            },
            compile: function($element, $attr) {
                $element.addClass("rt-list");

                if ($attr.hasDivider === "true") {
                    var items = $element.children();
                    for (var i = 0; i < items.length - 1; i++) {
                        items.eq(i).after('<div class="rt-divider"></div>');
                    }
                }
            }
        };
    })
    /*-------   列表项   -------*/
    .directive('rtItem', function() {
        'use strict';
        return {
            restrict: 'E',
            compile: function($element, $attr) {
                $element.addClass("rt-item").append($element.contents());
            }
        };
    });
