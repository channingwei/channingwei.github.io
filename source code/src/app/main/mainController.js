/*global UIMenu:false */
/*global xrmApp:false */
(function () {
    'use strict';
    xrmApp.controller("MainController", ['$scope', '$state', '$stateParams', 'rt', MainController]);

    function MainController($scope, $state, $stateParams, rt) {
        _init();

        function _init() {

        }
        
        $scope.workspaceItemClick  = function(stateName){
              $state.go(stateName);
        };
    }
})();


