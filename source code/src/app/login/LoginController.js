/*global UIMenu:false */
/*global ckApp:false */
(function() {
    'use strict';

    function LoginController($scope, $state, $filter, rt) {
        function _init() {
            $scope.vm = {};
            $scope.vm.isSavePassword = !!localStorage.XrmLoginIsSavePassword;
            $scope.vm.userName = localStorage.XrmLoginUserName;
            $scope.vm.password = localStorage.XrmLoginPassword;

            $scope.selectLanguage = function() {
                $state.go("app-language");
            };

            $scope.savePassword = function() {
                $scope.vm.isSavePassword = !$scope.vm.isSavePassword;
            };

            $scope.setServerAddress = function() {
                $state.go("app-serveraddress");
            };

            $scope.login = _login;
        }

        /**
         * 登陆
         * @private
         */
        function _login() {
            if (rt.isNullOrEmptyString($scope.vm.userName)) {
                rt.showErrorToast(rt.translate('LOGIN_PLS_INPUT_USERNAME'));
                return;
            }

            if (rt.isNullOrEmptyString($scope.vm.password)) {
                rt.showErrorToast(rt.translate('LOGIN_PLS_INPUT_PASSWORD'));
                return;
            }

            localStorage.XrmLoginIsSavePassword = $scope.vm.isSavePassword;
            localStorage.XrmLoginUserName = $scope.vm.userName;
            localStorage.XrmLoginPassword = $scope.vm.password;

            rt.showLoadingToast("登录中...");
            rt.post("api/wechat/SimulateLogin", {
                    uid: $scope.vm.userName,
                    pwd: $scope.vm.password
                })
                .success(function(u) {
                    rt.hideLoadingToast();
                    localStorage.XrmAuthToken = u.AuthToken;
                    localStorage.UserId = u.SystemUserId;
                    $state.go("app-application");
                })
                .error(function(msg) {
                    rt.hideLoadingToast();
                    rt.showErrorToast(msg);
                });
        }

        _init();
    }

    ckApp.controller("LoginController", ['$scope', '$state', '$filter', 'rt', LoginController]);
})();
