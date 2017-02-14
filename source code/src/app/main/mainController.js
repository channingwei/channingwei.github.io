/*global UIMenu:false */
/*global ckApp:false */
(function () {
    'use strict';
    ckApp.controller("MainController", ['$scope', '$state', '$stateParams', 'rt', MainController]);

    function MainController($scope, $state, $stateParams, rt) {
        _init();

        function _init() {

        }
        
        $scope.workspaceItemClick  = function(stateName){
              $state.go(stateName);
        };
    }
})();


