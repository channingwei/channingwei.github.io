/*global angular:false */
/*global _:false */
/*global ckApp:false */
/*global UITaskView:false */


(function () {
   'use strict';

   ckApp.controller("HomeController", ['$scope', '$filter', '$state', '$compile', 'rt', '$ionicScrollDelegate', HomeController]);
   function HomeController($scope, $filter, $state, $compile, rt, $ionicScrollDelegate) {

      function init() {
         $scope.screenHeight = rt.getScreenHeight();
      }

      init();
   }

})();
