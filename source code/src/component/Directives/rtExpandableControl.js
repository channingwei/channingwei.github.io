/********************************************************
 Copyright @ 苏州瑞泰信息技术有限公司 All rights reserved.
 创建人   : joe Song
 创建时间 : 2016-10-20
 说明     : 可展开的控件
 *********************************************************/
/*global angular*/

angular.module('xrmApp')
    .directive('rtExpandable', function() {
        "use strict";
        return {
            restrict: 'A',
            scope: {
                rtOnExpand: "&",
                rtOnCollapse: "&"
            },
            controller: function($scope, $element) {
                var headerElement, bodyElement;

                this.setHeaderElement = function(element) {
                    headerElement = element;

                    headerElement.bind("click", function() {
                        var expanded = bodyElement.css('display') === "none"
                        bodyElement.css("display", expanded ? "block" : "none");

                        $scope.$expanded = expanded;

                        if(expanded){
                            if($scope.rtOnExpand){
                                $scope.rtOnExpand();
                            }
                        }else{
                            if($scope.rtOnCollapse){
                                $scope.rtOnCollapse();
                            }   
                        }

                        $scope.$apply();
                    });
                };

                this.setBodyElement = function(element) {
                    bodyElement = element;

                    if (bodyElement.css("display") === "") {
                        bodyElement.css("display", "none");
                    }

                    $scope.$expanded = bodyElement.css('display') === "block";
                };
            }
        }
    })
    .directive('rtExpandHeader', function() {
        "use strict";
        return {
            restrict: 'A',
            require: '^rtExpandable',
            link: function($scope, $element, $attrs, $ctrl) {
                $ctrl.setHeaderElement($element);
            },
        }
    })
    .directive('rtExpandBody', function() {
        "use strict";
        return {
            restrict: 'A',
            require: '^rtExpandable',
            link: function($scope, $element, $attrs, $ctrl) {
                $ctrl.setBodyElement($element);
            }
        }
    });;
