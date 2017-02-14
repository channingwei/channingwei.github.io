/*global angular*/
angular.module('ckApp')
    .directive('rtBadge', ['rt', function(rt) {
        'use strict';
        return {
                  restrict: "E",
                  scope: false,
                  replace: true,
                  template: function(element, attrs) {
                        if((angular.isDefined(attrs.isSpotStyle) && attrs.isSpotStyle == "true") || !angular.isDefined(attrs.rtBadgeNum)){
                           return '<div class="rt-badge-spot-style-base"></div>'
                        }else{
                           return '<div ng-if="'+ attrs.rtBadgeNum +'!=\'0\'" class="rt-badge" style="width: {{ badgeWidth }}px;">' +
                                     attrs.rtBadgeNum +
                                  '</div>'
                        }
                  },
                  link: function(scope, element, attrs) {
                     if(angular.isDefined(attrs.rtBadgeNum)){
                         scope.badgeWidth = attrs.rtBadgeNum.length <= 2 ? 20 : 20 + 10 * (attrs.rtBadgeNum.length - 2);
                     }
                  }
            };
    }])
    .directive('rtBadgeNumber', ['rt', function(rt) {
        'use strict';
        return {
                  restrict: "E",
                  scope: false,
                  replace: true,
                  template: function(element, attrs) {
                        return '<ion-item class="item item-icon-right rt-badge-number">' +
                                  '<i class="icon ion-ios-arrow-right" style="font-size: 20px;"></i>' +
                                  '<div ng-if="'+ attrs.rtBadgeNum +'!=\'0\'" class="rt-badge-number-style" style="width: {{ badgeWidth }}px;">' +
                                     attrs.rtBadgeNum +
                                  '</div>' +
                                  attrs.rtBadgeTitle +
                               '</ion-item>'
                  },
                  link: function(scope, element, attrs) {
                    scope.badgeWidth = attrs.rtBadgeNum.length <= 2 ? 20 : 20 + 10 * (attrs.rtBadgeNum.length - 2);
                  }
            };
    }])
    .directive('rtBadgeWithImage', ['rt', function(rt) {
        'use strict';
        return {
                  restrict: "E",
                  scope: false,
                  replace: true,
                  template: function(element, attrs) {
                        return '<ion-item class="item item-icon-right rt-badge-image">' +
                                  '<i class="icon ion-ios-arrow-right" style="font-size: 20px;"></i>' +
                                  '<div ng-if="'+ attrs.rtBadgeImg.length +'!=0 || angular.isDefined(' + attrs.rtBadgeImg + ')" class="rt-badge-image-style">' +
                                     '<img style="width:30px;" src="' + attrs.rtBadgeImg + '" />' +
                                  '</div>' +
                                  attrs.rtBadgeTitle +
                               '</ion-item>'
                  }
            };
    }])
    .directive('rtBadgeWithSpot', ['rt', function(rt) {
        'use strict';
        return {
                  restrict: "E",
                  scope: false,
                  replace: true,
                  template: function(element, attrs) {
                        return '<ion-item class="item item-icon-right rt-badge-spot">' +
                                  '<i class="icon ion-ios-arrow-right" style="font-size: 20px;"></i>' +
                                  '<div ng-if="'+ attrs.rtBadgeSpot.length +'!=0 || angular.isDefined(' + attrs.rtBadgeSpot + ')" class="rt-badge-spot-style"></div>' +
                                  attrs.rtBadgeTitle +
                               '</ion-item>'
                  }
            };
    }])
    .directive('rtBadgeWithImageNumber', ['rt', function(rt) {
        'use strict';
        return {
                  restrict: "E",
                  scope: false,
                  replace: true,
                  template: function(element, attrs) {
                        return '<ion-item class="item item-avatar">' +
                                  '<img style="border-radius: 4px;" src="' + attrs.rtBadgeImg + '">' +
                                  '<h2 style="line-height: 1.3;">' + attrs.rtBadgeTitle + '</h2>' +
                                  '<p>' + attrs.rtBadgeContent + '</p>' +
                                  '<div ng-if="'+ attrs.rtBadgeImgNum +'!=\'0\' || angular.isDefined(' + attrs.rtBadgeImgNum + ') || '+ attrs.rtBadgeImgNum +'!=\'\'" class="rt-badge-image-number-style" style="width: {{ badgeWidth }}px;">' +
                                     attrs.rtBadgeImgNum +
                                  '</div>' +
                               '</ion-item>'
                  },
                  link: function(scope, element, attrs) {
                    scope.badgeWidth = attrs.rtBadgeImgNum.length <= 1 ? 16 : 20 + 10 * (attrs.rtBadgeImgNum.length - 2);
                  }
            };
    }])
    .directive('rtBadgeWithImageSpot', ['rt', function(rt) {
        'use strict';
        return {
                  restrict: "E",
                  scope: false,
                  replace: true,
                  template: function(element, attrs) {
                        return '<ion-item class="item item-avatar">' +
                                  '<img style="border-radius: 4px;" src="' + attrs.rtBadgeImg + '">' +
                                  '<h2 style="line-height: 1.3;">' + attrs.rtBadgeTitle + '</h2>' +
                                  '<p>' + attrs.rtBadgeContent + '</p>' +
                                  '<div ng-if="'+ attrs.rtBadgeImgSpot.length +'!=0 || angular.isDefined(' + attrs.rtBadgeImgSpot + ')" class="rt-badge-image-spot-style"></div>' +
                               '</ion-item>'
                  }
            };
    }]);
