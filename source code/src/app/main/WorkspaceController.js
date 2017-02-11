/*global UIMenu:false */
/*global xrmApp:false */
(function () {
    'use strict';
    xrmApp.controller("WorkspaceController", ['$scope', '$state', '$stateParams', 'rt', WorkspaceController]);

    function WorkspaceController($scope, $state, $stateParams, rt) {
        _init();

        function _init() {

        }
        
        $scope.workspaceItemClick  = function(stateName){
              $state.go(stateName);
        };
    }
})();