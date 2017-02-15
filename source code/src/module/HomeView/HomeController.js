/*global angular:false */
/*global _:false */
/*global ckApp:false */
/*global UITaskView:false */


(function () {
   'use strict';

   ckApp.controller("HomeController", ['$scope', '$filter', '$state', '$compile', 'rt', '$ionicScrollDelegate', 'HomeService', HomeController]);
   function HomeController($scope, $filter, $state, $compile, rt, $ionicScrollDelegate, HomeService) {

      function init() {
         $scope.screenHeight = rt.getScreenHeight();

         // document.getElementById('close').onmousedown = function(e) {
         //    e.preventDefault();
         //    document.getElementById('info').style.display = 'none';
         //    return false;
         // };

         // HomeService.init('c', 800, 800);
      }

      init();
   }

})();
