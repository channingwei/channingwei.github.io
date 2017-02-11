/*global angular:false */
/*global _:false */
/*global xrmApp:false */
/*global UITaskView:false */

(function() {
    'use strict';

    function ApplicationController($scope, $state, rt) {
        $scope.vm = {};
        $scope.vm.menus = [];

        function init() {
            _loadMenuData();

            $scope.openMenu = function(hash) {
                var url = window.location.origin + window.location.pathname + "#/";
                window.location.href = url + hash;
            };
        }

        function _loadMenuData() {
            var apiUrl = "api/SystemMenu/GetMobileSystemMenu?lastQueryTime=";
            rt.get(apiUrl)
                .success(function(data) {
                    var menus = data.SystemMenuList;
                    for (var i = 0; i < menus.length; i++) {
                        var pMenu = menus[i];

                        for (var j = 0; j < pMenu.Children.length; j++) {
                            var cMenu = pMenu.Children[j];
                            $scope.vm.menus.push(cMenu);
                        }
                    }
                });
        }

        init();

        rt.extendController(this, {
            scope: $scope
        });
    }

    xrmApp.controller("ApplicationController", ['$scope', '$state', 'rt', ApplicationController]);
})();
