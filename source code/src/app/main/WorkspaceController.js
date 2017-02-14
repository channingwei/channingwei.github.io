/*global UIMenu:false */
/*global ckApp:false */
(function () {
    'use strict';
    ckApp.controller("WorkspaceController", ['$scope', '$state', '$stateParams', 'rt', WorkspaceController]);

    function WorkspaceController($scope, $state, $stateParams, rt) {
        _init();

        function _init() {

        }
        
        $scope.workspaceItemClick  = function(stateName){
              $state.go(stateName);
        };
    }
})();