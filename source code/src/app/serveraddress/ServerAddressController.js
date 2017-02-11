/*global UIMenu:false */
/*global xrmApp:false */
(function () {
    'use strict';
    xrmApp.controller("ServerAddressController", ['$scope','$ionicHistory', ServerAddressController]);

    function ServerAddressController($scope,$ionicHistory) {
        _init();

        function _init() {
            var ch = (document.documentElement.clientWidth || document.body.clientWidth);
            $scope.logoWidth = ch;

            $scope.save = _save;
            $scope.vm = {};
            $scope.vm.address = localStorage.XrmBaseUrl;
        }

        function _save() {
            localStorage.XrmBaseUrl = $scope.vm.address;
            $ionicHistory.goBack();
        }
    }
})();


