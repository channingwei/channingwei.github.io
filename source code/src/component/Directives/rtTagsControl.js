/*global angular*/

angular.module('ckApp')
    .directive('rtTags', function() {
        "use strict";
        return {
            restrict: "EA",
            scope: {
                rtDataSource: "=", // 显示的数据源 + 用于获取选中情况
                rtColumns: "@", // 每行显示的个数
                rtType: "@", // 选择类型：单选、多选
                rtModel: "=" // 选择的情况
            },
            template: '<div style="width: 100%;padding-left: 10px;padding-right: 10px;background-color: white;">' +
                '<div ng-repeat="data in rtData" style="width: {{columnWidth}}%;padding: 6px;display: inline-block;"><a class="button button-small" ng-class="' +
                '{\'rt-tags\': data.state == 0, \'rt-tags-selected\': data.state == 1}' +
                '" ng-click="selectTag(tag)">{{data.name}}</a></div>' +
                '</div>',
            replace: true,
            transclude: false,
            controller: ["$scope", function($scope) {

                function indexOf(arr, id) {
                    for (var i = 0; i < arr.length; i++) {
                        if (arr[i].id === id) {
                            return i;
                        }
                    }
                    return -1;
                }

                // 列数
                var columnNumbers = angular.isDefined($scope.rtColumns) ? $scope.rtColumns : 3;
                if (columnNumbers <= 0) {
                    columnNumbers = 3;
                }

                // 计算每列的宽度
                $scope.columnWidth = (100 / columnNumbers).toFixed(8);

                // 类型，单选还是多选
                var TYPE_SINGLE = "single";
                var TYPE_MULTI = "multi";
                var type = angular.isDefined($scope.rtType) ? $scope.rtType : TYPE_SINGLE;
                if (type.length === 0) {
                    type = TYPE_SINGLE;
                }

                var dataSource = $scope.rtDataSource;

                $scope.selectTag = function(tag) {
                    // 这里区分单选、多选
                    if (type === TYPE_SINGLE) {
                        if (tag.state === 1) {
                            tag.state = 0;
                            $scope.rtModel = {};
                        } else {
                            for (var j = 0; j < dataSource.length; j++) {
                                if (dataSource[j].id === tag.id) {
                                    dataSource[j].state = 1;
                                    $scope.rtModel = {
                                        id: tag.id,
                                        name: tag.name,
                                        state: tag.state
                                    };
                                    continue;
                                }
                                dataSource.state = 0;
                            }
                        }
                    } else if (type === TYPE_MULTI) {
                        for (var i = 0; i < dataSource.length; i++) {
                            if (dataSource[i].state === 0 && dataSource[i].id === tag.id) {
                                dataSource[i].state = 1;
                                $scope.rtModel.push({
                                    id: tag.id,
                                    name: tag.name,
                                    state: tag.state
                                });
                                break;
                            }
                            if (dataSource[i].state === 1 && dataSource[i].id === tag.id) {
                                dataSource[i].state = 0;
                                var index = indexOf($scope.rtModel, tag.id);
                                $scope.rtModel.splice(index, 1);
                                break;
                            }
                        }
                    }
                };
            }]
        };
    });
