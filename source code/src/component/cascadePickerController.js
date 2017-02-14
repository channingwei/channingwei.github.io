(function() {
    'use strict';
    ckApp.controller("cascadePickerController", ['$scope', '$ionicSlideBoxDelegate', 'rt', '$timeout', cascadePickerController]);

    function cascadePickerController($scope, $ionicSlideBoxDelegate, rt, $timeout) {

        function _init() {
            $scope.cascadePicker = $scope.cascadePicker || {};

            $scope.cascadePicker.objects = [];

            $scope.cascadePicker.slideHasChanged = _slideHasChanged;

            $scope.cascadePicker.slideTo = _slideTo;

            $scope.cascadePicker.pick = _pick;

            _load();
        }

        function _load() {
            if (rt.isNull($scope.cascadePicker.dataProvider)) {
                return;
            }

            //如果没有选中值，则只需要加载第一项
            if (rt.isNull($scope.cascadePicker.selectedValue) || $scope.cascadePicker.selectedValue.length === 0) {
                $scope.cascadePicker.objects.push({
                    dataSource: null
                });
                $scope.cascadePicker.dataProvider[0]().then(function(resp) {
                    $scope.cascadePicker.objects[0].dataSource = resp.data;
                    $scope.slideIndex = 0;
                });
                return;
            }

            var tmpObjects = [{
                dataSource: null
            }];

            function ___load(idx, value) {
                $scope.cascadePicker.dataProvider[idx](value)
                    .then(function(resp) {
                        tmpObjects[idx].dataSource = resp.data;

                        var selectedValue = $scope.cascadePicker.selectedValue[idx].value;
                        var selectedItem = _.find(resp.data, { "value": selectedValue })

                        if (!rt.isNull(selectedItem)) {
                            tmpObjects[idx].selectedValue = selectedItem;
                        }

                        if (rt.isNull(selectedItem) || idx >= $scope.cascadePicker.dataProvider.length - 1) {
                            $scope.cascadePicker.objects = tmpObjects;

                            $ionicSlideBoxDelegate.update();

                            $scope.cascadePicker.slideIndex = idx;
                        } else {
                            tmpObjects.push({
                                dataSource: null
                            });
                            ___load(idx + 1, selectedItem.value);
                        }
                    });
            }

            ___load(0);
        }

        function _pick(index, obj) {
            if (index + 1 >= $scope.cascadePicker.dataProvider.length) {
                $scope.cascadePicker.objects[index].selectedValue = obj;

                var result = [];
                $scope.cascadePicker.objects.map(function(obj) {
                    result.push({ "value": obj.selectedValue.value, "text": obj.selectedValue.text });
                });

                $scope.cascadePicker.close();
                $scope.cascadePicker.success(result);
                $scope.cascadePicker = null;
                delete $scope.cascadePicker;
                return;
            }

            if (obj === $scope.cascadePicker.objects[index].selectedValue) {
                _slideTo(index + 1);
                return;
            }

            $scope.cascadePicker.objects[index].selectedValue = obj;

            while ($scope.cascadePicker.objects.length > index + 1) {
                $scope.cascadePicker.objects.pop();
            }

            if ($scope.cascadePicker.objects.length === index + 1 || $scope.cascadePicker.objects[index + 1].dataSource === null || $scope.cascadePicker.objects[index + 1].dataSource === undefined) {

                $scope.cascadePicker.objects.push({
                    dataSource: null
                });

                $scope.cascadePicker.dataProvider[index + 1](obj.value)
                    .then(function(resp) {
                        $scope.cascadePicker.objects[index + 1].dataSource = resp.data;
                    });

                $ionicSlideBoxDelegate.update();
            }

            _slideTo(index + 1);
        }

        function _slideTo(index) {
            $timeout(function() {
                $ionicSlideBoxDelegate.slide(index);
            }, 0);
        }

        function _slideHasChanged(index) {
            $scope.cascadePicker.slideIndex = index;
        }

        _init();
    }
})();
