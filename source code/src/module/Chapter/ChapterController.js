/*global angular:false */
/*global _:false */
/*global ckApp:false */
/*global UITaskView:false */

(function () {
   'use strict';

   ckApp.controller("ChapterController", ['$scope', '$stateParams', '$state', 'kuo', 'ChapterService', ChapterController]);
   function ChapterController($scope, $stateParams, $state, kuo, ChapterService) {

      function init() {
         loadBlogList();
      }

      /**
      * 加载blog列表
      */
      function loadBlogList(){
         ChapterService.getTheList($stateParams.id).success(function(data){
            $scope.data = data;
            require(['lib/markdown/js/markdown'], function(params) {
               var html = markdown.toHTML(data.body);
               document.getElementById("plat").innerHTML = html;
            });
         }).error(function(err){
            kuo.showErrorToast(err);
         });
      }

      init();
   }

})();
