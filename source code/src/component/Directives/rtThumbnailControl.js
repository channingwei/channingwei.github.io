/********************************************************
 Copyright @ 苏州瑞泰信息技术有限公司 All rights reserved.
 创建人   : east lv
 创建时间 : 2016-05-18
 说明     : 缩略图
 *********************************************************/
/*global angular:false */

(function(window, document, undefined) {
    'use strict';

    angular.module('xrmApp')
        .directive('rtThumbnails', ['rt', function(rt) {
            return {
                restrict: 'E',
                replace: true,
                scope: false,
                template: function(element, attrs) {
                    return '<div class="rt-thumbnails">' +
                        '    <div class="rt-thumbnail" ng-repeat="image in ' + attrs.rtModel + '">' +
                        '        <img ng-src="data:image/jpeg;base64,{{image.' + attrs.rtValueProperty + '}}" ng-click="previewImage($index);" />' +
                        '    </div>' +
                        '    <div class="rt-choose-image" ng-if="' + (angular.isDefined(attrs.rtCanAdd) ? attrs.rtCanAdd : "true") + '">' +
                        '        <img ng-src="data:image/png;base64,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" ng-click="chooseImage();"/>' +
                        '    </div>' +
                        '</div>';
                },
                link: function(scope, element, attrs, ngModelCtrl) {
                    scope.previewImage = function(index) {
                        var photoList = eval("scope." + attrs.rtModel);
                        var previewImageList = [];
                        for (var i = 0; i < photoList.length; i++) {
                            previewImageList.push({
                                "Id": photoList[i][attrs.rtKeyProperty],
                                "Base64Content": photoList[i][attrs.rtValueProperty]
                            });
                        }
                        scope.previewImageList = previewImageList;
                        scope.myActiveSlide = index;
                        scope.canDelete = angular.isDefined(attrs.rtCanDelete) ? eval("scope." + attrs.rtCanDelete) === true : true;

                        rt.showDialog('component/imagePreviewerView.html', scope, null);
                    };

                    scope.onImageDeleted = function(index) {
                        var photoList = eval("scope." + attrs.rtModel);
                        if (index < 0 || index >= photoList.length) {
                            return;
                        }

                        photoList.splice(index, 1);
                    };

                    scope.chooseImage = function() {
                        rt.chooseImage({
                            sourceType: [attrs.rtSourceType],
                            success: function(base64Image) {
                                var photoList = eval("scope." + attrs.rtModel);

                                var o = {};
                                o[attrs.rtKeyProperty] = "";
                                o[attrs.rtValueProperty] = base64Image;
                                photoList.push(o);
                            }
                        });
                    };
                }
            };
        }]);
})(window, document);
