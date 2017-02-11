/********************************************************
 Copyright @ 苏州瑞云信息技术有限公司 All rights reserved.
 创建人   : 
 创建时间 : 2016/4/1
 说明     :可滑动预览照片
 *********************************************************/
(function() {
    'use strict';
    xrmApp.controller("datePickerController", ['$scope', '$ionicSlideBoxDelegate', 'rt', '$timeout', datePickerController]);

    function datePickerController($scope, $ionicSlideBoxDelegate, rt, $timeout) {

        function _init() {
            $scope.datePicker = $scope.datePicker || {};

            var cellHeight = parseInt(rt.getScreenWidth() / 7 * 0.8);
            if (cellHeight > 50) {
                cellHeight = 50;
            }
            $scope.datePicker.cellHeight = cellHeight;
            if (rt.isNull($scope.datePicker.selectedValue)) {
                var now = new Date();
                $scope.datePicker.selectedValue = now;
            }
            $scope.datePicker.selectedValue.setHours(0, 0, 0, 0);

            var year = $scope.datePicker.selectedValue.getFullYear();
            var month = $scope.datePicker.selectedValue.getMonth() + 1;
            $scope.datePicker.year = year;
            $scope.datePicker.month = month;
            $scope.datePicker.calandar = rt.getCalandar(year, month);

            $scope.datePicker.chooseDate = _chooseDate;

            $scope.datePicker.previousYear = _previousYear;
            $scope.datePicker.nextYear = _nextYear;
            $scope.datePicker.previousMonth = _previousMonth;
            $scope.datePicker.nextMonth = _nextMonth;

            $scope.datePicker.clear = _clear;
            $scope.datePicker.ok = _ok;
        }

        _init();

        function _previousMonth() {
            var year = $scope.datePicker.year;
            var month = $scope.datePicker.month;
            if (month === 1) {
                year--;
                month = 12;
            } else {
                month--;
            }

            $scope.datePicker.year = year;
            $scope.datePicker.month = month;
            $scope.datePicker.calandar = rt.getCalandar(year, month);
        }

        function _nextMonth() {
            var year = $scope.datePicker.year;
            var month = $scope.datePicker.month;
            if (month === 12) {
                year++;
                month = 1;
            } else {
                month++;
            }

            $scope.datePicker.year = year;
            $scope.datePicker.month = month;
            $scope.datePicker.calandar = rt.getCalandar(year, month);
        }

        function _previousYear() {
            var year = $scope.datePicker.year;
            var month = $scope.datePicker.month;
            if (year === 1970) {
                return;
            }

            year--;

            $scope.datePicker.year = year;
            $scope.datePicker.month = month;
            $scope.datePicker.calandar = rt.getCalandar(year, month);
        }

        function _nextYear() {
            var year = $scope.datePicker.year;
            var month = $scope.datePicker.month;

            year++;

            $scope.datePicker.year = year;
            $scope.datePicker.month = month;
            $scope.datePicker.calandar = rt.getCalandar(year, month);
        }

        function _chooseDate(date) {
            if (date == null) {
                return;
            }
            $scope.datePicker.selectedValue = date;
        }

        function _clear() {
            $scope.datePicker.close();

            $scope.datePicker.selectedValue = null;

            if ($scope.datePicker.success) {
                $scope.datePicker.success(null);
            }
        }

        function _ok() {
            $scope.datePicker.close();

            if ($scope.datePicker.success) {
                $scope.datePicker.success($scope.datePicker.selectedValue);
            }
        }
    }
})();
