/*global angular:false */
/*global _:false */
/*global ckApp:false */
/*global wx:false */
(function() {
    'use strict';
    angular.module('ckApp')
        .service('rtApp', ['$http', 'rtUtils', 'rtRestClient', '$ionicHistory', function($http, rtUtils, rtRestClient, $ionicHistory) {
            /**
             * 返回
             */
            this.goBack = function() {
                var backView = $ionicHistory.backView();

                if (backView === null) {
                    rtWechat.closeWindow();
                } else {
                    $ionicHistory.goBack();
                }
            };

            /**
             * 扫描名片
             */
            this.scanVCard = function(config) {
            };

            /**
             * 名片识别
             */
            this.identifyVCard = function(base64Image) {
                if (rtUtils.isNullOrEmptyString(base64Image)) {
                    throw new Error("image can not be null or empty.");
                }
                return rtRestClient.post("api/OCR/IdentifyVCard", { Image: base64Image });
            };

            /**
             * 扫描身份证
             */
            this.scanIDCard = function(config) {
            };

            /**
             * 名片识别
             */
            this.identifyIDCard = function(base64Image) {
                if (rtUtils.isNullOrEmptyString(base64Image)) {
                    throw new Error("image can not be null or empty.");
                }
                return rtRestClient.post("api/OCR/IdentifyIDCard", { Image: base64Image });
            };

            /**
             * 签名
             */
            this.signature = function($scope, callback) {
                rtUtils.showDialog('component/signatureView.html', $scope, callback);
            };

            /**
            * 录音
            */
            this.record = function($scope, callback){
                rtUtils.showDialog('component/audioRecordView.html', $scope, callback);
            };
        }]);
})();
