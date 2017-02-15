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
