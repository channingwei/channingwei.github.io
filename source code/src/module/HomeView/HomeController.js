/*global angular:false */
/*global _:false */
/*global ckApp:false */
/*global UITaskView:false */

(function () {
   'use strict';

   ckApp.controller("HomeController", ['$scope', '$state', 'kuo', 'HomeService', HomeController]);
   function HomeController($scope, $state, kuo, HomeService) {

      function init() {
         // blog content list source
         // "original", "reprinted", "journalEntry" 原创 转载 读后感......
         $scope.chapters = [
            {
               "image": "../../resource/img/chapter-image.png",
               "title": "test github api two",
               "content": "从GitHub issues中获取markdown测试，通过GitHub API",
               "date": "2017-02-26",
               "extra": ["original", "reprinted", "journalEntry"],
               "id": 2
            },
            {
               "image": "../../resource/img/chapter-image.png",
               "title": "test github api",
               "content": "从GitHub issues中获取markdown测试，通过GitHub API",
               "date": "2017-02-26",
               "extra": ["original", "reprinted", "journalEntry"],
               "id": 1
            }
         ];

         $scope.watchTheChapter = _watchTheChapter;
      }

      /**
      * 预览整片文章
      */
      function _watchTheChapter(id){
         $state.go("chapter-view", {id: id});
      }

      init();
   }

})();
