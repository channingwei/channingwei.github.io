/********************************************************
 Copyright @ 苏州瑞云信息技术有限公司 All rights reserved.
 创建人   : Berry Ding
 创建时间 : 2016/4/1
 说明     :可滑动预览照片
 *********************************************************/
(function() {
    'use strict';
    xrmApp.controller("imagePreviewerController", ['$scope', '$stateParams', 'rt', '$timeout', '$rootScope', imagePreviewerController]);

    function imagePreviewerController($scope, $stateParams, rt, $timeout, $rootScope) {

        $scope.screenWidth = (document.documentElement.clientWidth || document.body.clientWidth) + "px";
        $scope.screenHeight = (document.documentElement.clientHeight || document.body.clientHeight) + "px";

        window.onresize = function() {
            $scope.screenWidth = (document.documentElement.clientWidth || document.body.clientWidth) + "px";
            $scope.screenHeight = (document.documentElement.clientHeight || document.body.clientHeight) + "px";
        };

        $scope.deleteImage = function() {
            var imageId = $scope.previewImageList[$scope.myActiveSlide].Id;
            if (rt.isNullOrEmptyString(imageId)) {
                $scope.closeDialog();

                if ($scope.onImageDeleted) {
                    $scope.onImageDeleted($scope.myActiveSlide);
                }
            } else {
                rt.deleteFileByFileId("Attachment", [imageId])
                    .success(function() {
                        $scope.closeDialog();

                        if ($scope.onImageDeleted) {
                            $scope.onImageDeleted($scope.myActiveSlide);
                        }
                    });
            }
        };
    }
})();
