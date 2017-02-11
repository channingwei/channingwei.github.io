/*global angular:false */
/*global _:false */
/*global xrmApp:false */
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

         //  $scope.vm = {};
         //  $scope.vm.test1 = "";
         //    $scope.record = _record;
         //    $scope.showLoading = function(){
         //        rt.showLoadingToast("");
         //    };
          //
         //    $scope.data = [];
         //    $scope.data[0] = {};
         //    $scope.data[0].title = "已签收（门卫代签），感谢使用顺丰，期待再次为你服务";
         //    $scope.data[0].date = "2016-12-21 10:27:10";
         //    $scope.data[1] = {};
         //    $scope.data[1].title = "正在派送途中，请您准备签收（派件人：杨道强，电话：15195638919）";
         //    $scope.data[1].date = "2016-12-21 10:27:10";
         //    $scope.data[2] = {};
         //    $scope.data[2].title = "快件到达【苏州市虎丘区保利科技园营业点】";
         //    $scope.data[2].date = "2016-12-21 10:27:10";
         //    $scope.data[3] = {};
         //    $scope.data[3].title = "快件离开【杭州瓜沥集散中心】正在发往【苏州市虎丘区保利科技园营业点】";
         //    $scope.data[3].date = "2016-12-21 10:27:10";
         //    $scope.data[4] = {};
         //    $scope.data[4].title = "快件到达【杭州瓜沥集散中心】";
         //    $scope.data[4].date = "2016-12-21 10:27:10";
         //    $scope.data[5] = {};
         //    $scope.data[5].title = "顺丰速运 已收取快件";
         //    $scope.data[5].date = "2016-12-21 10:27:10";

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

    xrmApp.controller("TestController", ['$scope', '$filter', '$state', '$compile', 'rt', '$ionicScrollDelegate', TestController]);
})();
