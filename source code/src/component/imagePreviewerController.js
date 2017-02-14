(function() {
    'use strict';
    ckApp.controller("imagePreviewerController", ['$scope', '$stateParams', 'rt', '$timeout', '$rootScope', imagePreviewerController]);

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
