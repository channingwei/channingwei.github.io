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

/*global angular:false */
/*global _:false */
/*global ckApp:false */
/*global UITaskView:false */


(function () {
   'use strict';

   function TestController($scope, $filter, $state, $compile, rt, $ionicScrollDelegate) {

      function init() {
         $scope.isVisible = false;
         $scope.wx = {};
         $scope.wx.ServerId = [];
         $scope.wx.ScenePhotoes = [];

         /**
         * 微信拍照功能
         * @pritive
         */
         $scope.choosePhotoes = function() {
            if($scope.wx.ScenePhotoes.length < 9){
               rt.chooseImage({
                  count: 9 - $scope.wx.ScenePhotoes.length,
                  sizeType: ['compressed'],
                  sourceType: ['album', 'camera']
               }).then(function(res){
                  if(res.errMsg == "chooseImage:ok"){
                     _uploadImage(0, res.localIds);
                  }
               });
            }else{
               rt.showErrorToast("最多允许拍摄选择9张照片!");
            }
         };

         /**
         * 微信照片预览
         * @param localId        本地照片
         * @param index          本地照片当前下标
         * @pritive
         */
         $scope.previewImage = function(localId, index){
            rt.previewImage({
               current: localId,
               urls: $scope.wx.ScenePhotoes
            });
         };

         $scope.check = function(){
            if($scope.wx.ScenePhotoes.length > 0){
               $scope.isVisible = !$scope.isVisible;
               $ionicScrollDelegate.scrollBottom(true);
            }
         };
      }

      /**
      * 微信照片上传
      * @param
      * @pritive
      */
      function _uploadImage(index, localIds){
         var imgLength = localIds.length;
         var i = index;
         rt.uploadImage({
            localId: localIds[i],                // 需要上传的图片的本地ID，由chooseImage接口获得
            isShowProgressTips: 1                // 默认为1，显示进度提示
         }).then(function(res){
            $scope.wx.ScenePhotoes.push(localIds[i]);
            $ionicScrollDelegate.scrollBottom(true);
            $scope.wx.ServerId.push(res.serverId);
            i++;
            if(i < imgLength){
               _uploadImage(i, localIds);
            }
         }, function(err){
            rt.showErrorToast(err);
         });
      }

      function _record(){
         rt.record($scope, function (audioData) {
            if (rt.isNull(audioData)) {
               return;
            }
            $scope.audio = audioData;
         });
      }

      init();
   }

   ckApp.controller("TestController", ['$scope', '$filter', '$state', '$compile', 'rt', '$ionicScrollDelegate', TestController]);
})();
