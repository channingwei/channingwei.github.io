/********************************************************
 Copyright @ 苏州瑞泰信息技术有限公司 All rights reserved.
 创建人   : Channing Guo
 创建时间 : 2016-08-31
 说明     : 图片懒加载
 *********************************************************/
/*global angular*/
angular.module('xrmApp')
    .directive('rtLazyScroll', ['$rootScope',
        function($rootScope) {
            return {
                restrict: 'A',
                link: function($scope, $element) {
                    var origEvent = $scope.$onScroll;
                    $scope.$onScroll = function() {
                        $rootScope.$broadcast('lazyScrollEvent');

                        if (typeof origEvent === 'function') {
                            origEvent();
                        }
                    };
                }
            };
        }
    ])
    .directive('imageLazySrc', ['$document', '$timeout', '$ionicScrollDelegate', '$compile',
        function($document, $timeout, $ionicScrollDelegate, $compile) {
            return {
                restrict: 'A',
                scope: {
                    lazyScrollResize: "@",
                    imageLazyBackgroundImage: "@",
                    imageLazySrc: "@",
                    images: "="
                },
                link: function($scope, $element, $attributes, ctrls) {
                    if (!$attributes.imageLazyDistanceFromBottomToLoad) {
                        $attributes.imageLazyDistanceFromBottomToLoad = 0;
                    }
                    if (!$attributes.imageLazyDistanceFromRightToLoad) {
                        $attributes.imageLazyDistanceFromRightToLoad = 0;
                    }
                    var loader;

                    $scope.$watch('imageLazySrc', function(oldV, newV) {
                        if (loader)
                            loader.remove();
                        if ($attributes.imageLazyLoader) {
                            loader = $compile('<div class="image-loader-container"><ion-spinner class="image-loader" icon="' + $attributes.imageLazyLoader + '"></ion-spinner></div>')($scope);
                            var imageRect = $element[0].getBoundingClientRect();
                            //loader[0].style.bottom = imageRect.bottom + "px";
                            if (imageRect.top > 44) {
                                loader[0].style.top = (imageRect.top - 44) + "px";
                            } else {
                                loader[0].style.top = imageRect.top + "px";
                            }
                            loader[0].style.left = imageRect.left + "px";
                            //loader[0].style.right = imageRect.right + "px";
                            loader[0].style.width = imageRect.width + "px";
                            loader[0].style.height = imageRect.height + "px";
                            $element.after(loader);
                        }
                        var deregistration = $scope.$on('lazyScrollEvent', function() {
                            //    console.log('scroll');
                            if (isInView()) {
                                loadImage();
                                deregistration();
                            }
                        });
                        $timeout(function() {
                            if (isInView()) {
                                loadImage();
                                deregistration();
                            }
                        }, 500);
                    });
                    var deregistration = $scope.$on('lazyScrollEvent', function() {
                        // console.log('scroll');
                        if (isInView()) {
                            loadImage();
                            deregistration();
                        }
                    });

                    function loadImage() {
                        //Bind "load" event
                        $element.bind("load", function(e) {
                            if ($attributes.imageLazyLoader) {
                                loader.remove();
                            }
                            if ($scope.lazyScrollResize == "true") {
                                //Call the resize to recalculate the size of the screen
                                $ionicScrollDelegate.resize();
                            }
                            $element.unbind("load");
                        });

                        if ($scope.imageLazyBackgroundImage == "true") {
                            var bgImg = new Image();
                            bgImg.onload = function() {
                                if ($attributes.imageLazyLoader) {
                                    loader.remove();
                                }
                                $element[0].style.backgroundImage = 'url(' + $attributes.imageLazySrc + ')'; // set style attribute on element (it will load image)
                                if ($scope.lazyScrollResize == "true") {
                                    //Call the resize to recalculate the size of the screen
                                    $ionicScrollDelegate.resize();
                                }
                            };
                            bgImg.src = $attributes.imageLazySrc;
                        } else {
                            $element[0].src = $attributes.imageLazySrc; // set src attribute on element (it will load image)
                        }
                    }

                    function isInView() {
                        var clientHeight = $document[0].documentElement.clientHeight;
                        var clientWidth = $document[0].documentElement.clientWidth;
                        var imageRect = $element[0].getBoundingClientRect();
                        return (imageRect.top >= 0 && imageRect.top <= clientHeight + parseInt($attributes.imageLazyDistanceFromBottomToLoad)) && (imageRect.left >= 0 && imageRect.left <= clientWidth + parseInt($attributes.imageLazyDistanceFromRightToLoad));
                    }

                    // bind listener
                    // listenerRemover = scrollAndResizeListener.bindListener(isInView);

                    // unbind event listeners if element was destroyed
                    // it happens when you change view, etc
                    $element.on('$destroy', function() {
                        deregistration();
                    });

                    // explicitly call scroll listener (because, some images are in viewport already and we haven't scrolled yet)
                    $timeout(function() {
                        if (isInView()) {
                            loadImage();
                            deregistration();
                        }
                    }, 500);
                }
            };
        }
    ])

.directive('rtLazyLoadImg', ['rt', function(rt) {
    "use strict";
    return {
        restrict: "E",
        scope: false,
        replace: true,
        template: function(element, attrs) {
            return '<img width="' + attrs.rtWidth + '" height="' + attrs.rtHeight + '" image-lazy-loader="ios" image-lazy-src="' + attrs.rtSrc + '" image-lazy-distance-from-bottom-to-load="-100" lazy-scroll-resize="true">'
        }
    };
}]);
