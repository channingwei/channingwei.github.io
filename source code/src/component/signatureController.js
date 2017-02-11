/********************************************************
 Copyright @ 苏州瑞泰信息技术有限公司 All rights reserved.
 创建人   : Edgard Dong
 创建时间 : 2016/7/18
 说明     : 签名
 *********************************************************/
(function() {
    'use strict';
    xrmApp.controller("signatureController", ['$scope', '$stateParams', 'rt', '$timeout', '$rootScope', signatureController]);

    function signatureController($scope, $stateParams, rt, $timeout, $rootScope) {

        var signaturePad;
        var canvas;

        require(['lib/signature/signature_pad.min'], function(params) {
            var canvas = document.getElementById('signatureCanvas');
            signaturePad = new SignaturePad(canvas);
            canvas.height = document.documentElement.clientHeight;
            canvas.width = document.documentElement.clientWidth;
        });

        /**
         * 清除按钮点击事件
         */
        $scope.clearClick = function() {
            signaturePad.clear();
        }

        /**
         * 确定按钮点击事件
         */
        $scope.saveClick = function() {
            if (signaturePad.isEmpty()) {
                alert("Please provide signature first.");
            } else {
                var u = signaturePad.toDataURL().split(',')[1];
                $scope.closeDialog();
                if (rt.isFunction($scope.onDataSelected) && !rt.isNull(u)) {
                    $scope.onDataSelected(u);
                }
            }
        }
    }
})();
