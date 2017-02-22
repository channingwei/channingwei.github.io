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
         // "original", "reprinted", "journalEntry" 原创 转载 读后感
         $scope.chapters = [
            {
               "image": "http://wx.rektec.com.cn:7777/WeChat_Photoes/2017/2-13/new_wx_photo_demo/0535a3b2-bf43-49fb-bb86-74f215811bad.png",
               "title": "博客模板系列之《回忆》Html",
               "content": "Html5+css3情侣博客模板，主题《回忆》，使用css3技术实现网站动画效果，主题《回忆》,分为四个主要部分，照片墙、情侣介绍、图文组、祝福模块。适合爱晒照片的小情侣，或者喜欢旅行类的朋友们，希望喜欢这款模板。效果上，css3动画会使用比较多，图片的hover悬停效果，文字倒影、以及情侣介绍模块的loading动画效果....",
               "date": "2017-02-22",
               "extra": ["original", "reprinted", "journalEntry"]
            },
            {
               "image": "http://wx.rektec.com.cn:7777/WeChat_Photoes/2017/2-13/new_wx_photo_demo/0535a3b2-bf43-49fb-bb86-74f215811bad.png",
               "title": "博客模板系列之《回忆》Html",
               "content": "Html5+css3情侣博客模板，主题《回忆》，使用css3技术实现网站动画效果，主题《回忆》,分为四个主要部分，照片墙、情侣介绍、图文组、祝福模块。适合爱晒照片的小情侣，或者喜欢旅行类的朋友们，希望喜欢这款模板。效果上，css3动画会使用比较多，图片的hover悬停效果，文字倒影、以及情侣介绍模块的loading动画效果....",
               "date": "2017-02-22",
               "extra": ["original", "reprinted", "journalEntry"]
            },
            {
               "image": "http://wx.rektec.com.cn:7777/WeChat_Photoes/2017/2-13/new_wx_photo_demo/0535a3b2-bf43-49fb-bb86-74f215811bad.png",
               "title": "博客模板系列之《回忆》Html",
               "content": "Html5+css3情侣博客模板，主题《回忆》，使用css3技术实现网站动画效果，主题《回忆》,分为四个主要部分，照片墙、情侣介绍、图文组、祝福模块。适合爱晒照片的小情侣，或者喜欢旅行类的朋友们，希望喜欢这款模板。效果上，css3动画会使用比较多，图片的hover悬停效果，文字倒影、以及情侣介绍模块的loading动画效果....",
               "date": "2017-02-22",
               "extra": ["original", "reprinted", "journalEntry"]
            },
            {
               "image": "http://wx.rektec.com.cn:7777/WeChat_Photoes/2017/2-13/new_wx_photo_demo/0535a3b2-bf43-49fb-bb86-74f215811bad.png",
               "title": "博客模板系列之《回忆》Html",
               "content": "Html5+css3情侣博客模板，主题《回忆》，使用css3技术实现网站动画效果，主题《回忆》,分为四个主要部分，照片墙、情侣介绍、图文组、祝福模块。适合爱晒照片的小情侣，或者喜欢旅行类的朋友们，希望喜欢这款模板。效果上，css3动画会使用比较多，图片的hover悬停效果，文字倒影、以及情侣介绍模块的loading动画效果....",
               "date": "2017-02-22",
               "extra": ["original", "reprinted", "journalEntry"]
            }
         ];

         $scope.watchTheChapter = _watchTheChapter;
      }

      /**
      * 预览整片文章
      */
      function _watchTheChapter(chapter){
         $state.go("test-testview");
      }

      init();
   }

})();
