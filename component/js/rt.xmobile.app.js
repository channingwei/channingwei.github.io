/********************************************************
 Copyright @ 苏州瑞泰信息技术有限公司 All rights reserved.
 创建人   : joe Song
 创建时间 : 2016-03-10
 说明     : 应用的全局路由和全局配置项目
 版本号   ：7.4.4
 *********************************************************/

(function(win) {
    'use strict';

    require.config({
        packages: [{
            name: 'echarts',
            location: './lib/echarts',
            main: 'echarts'
        }, {
            name: 'zrender',
            location: './lib/zrender',
            main: 'zrender'
        }, {
            name: 'signature_pad',
            location: './lib/signature',
            main: 'signature'
        }]
    });

    win.xrmApp = angular.module('xrmApp', ['ngIOS9UIWebViewPatch', 'ionic', 'ng-mfb', 'pascalprecht.translate', 'ngScrollTo'])
        .config(function() {})
        .config([
            '$compileProvider',
            function($compileProvider) {
                $compileProvider.imgSrcSanitizationWhitelist(/^\s*((https?|local|data|blob|weixin|wxLocalResource|wxlocalresource):|data:image\/)/);
            }
        ])
        .config([
            '$locationProvider',
            function($locationProvider) {
                //$locationProvider.html5Mode(false);
                //$locationProvider.hashPrefix('!');
            }
        ])
        .config([
            "$httpProvider",
            function($httpProvider) {
                $httpProvider.defaults.useXDomain = true;
                //默认超时时间：10s
                $httpProvider.defaults.timeout = 10 * 1000;
                delete $httpProvider.defaults.headers.common['X-Requested-With'];
            }
        ])
        .config([
            "$ionicConfigProvider",
            function($ionicConfigProvider) {
                $ionicConfigProvider.backButton.previousTitleText(false).text('');
                $ionicConfigProvider.templates.maxPrefetch(0);
                $ionicConfigProvider.scrolling.jsScrolling(true);
            }
        ])
        .config([
            '$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {
                $stateProvider
                    .state('xrmApp', {
                        url: '/',
                        templateUrl: 'module/HomeView/HomeView.html',
                        controller: 'HomeController'
                    })
                    .state('app-close', {
                        url: '/app/close',
                        templateUrl: 'component/blankView.html',
                        controller: 'blankController'
                    });
                $urlRouterProvider.otherwise("/");
            }
        ])
        .config([
            '$translateProvider',
            function($translateProvider) {
                var languageCode;

                if (window.XrmDeviceData && window.XrmDeviceData.getLanguageCode) {
                    languageCode = window.XrmDeviceData.getLanguageCode();
                } else if (localStorage.LanguageCode !== null && localStorage.LanguageCode !== undefined && localStorage.LanguageCode !== "") {
                    languageCode = localStorage.LanguageCode;
                } else {
                    languageCode = "zh-CN";
                }
                $translateProvider.preferredLanguage(languageCode);
            }
        ])
        .run([
            '$rootScope', '$state', '$ionicHistory', 'rt',
            function($rootScope, $state, $ionicHistory, rt) {

                $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
                    alert();
                });

                var openedPopup = null;
                $rootScope.$on('xrm.popup.shown', function(event, popup) {
                    openedPopup = popup;
                });
                $rootScope.$on('xrm.popup.hidden', function(event, popup) {
                    openedPopup = null;
                });

                var openedPopover = null;
                $rootScope.$on('xrm.popover.shown', function(event, popover) {
                    openedPopover = popover;
                });
                $rootScope.$on('xrm.popover.hidden', function(event, popover) {
                    openedPopover = null;
                });

                var openedDialog = null;
                $rootScope.$on('xrm.modal.shown', function(event, modal) {
                    openedDialog = modal;
                });
                $rootScope.$on('xrm.modal.hidden', function(event, modal) {
                    openedDialog = null;
                });

                document.addEventListener("xrmhardwarebackclick", function() {
                    if (openedPopup != null || openedPopover != null || openedDialog != null) {
                        if (openedPopup != null) {
                            openedPopup.close();
                            openedPopup = null;
                        }
                        if (openedPopover != null) {
                            openedPopover.hide();
                            openedPopover = null;
                        }
                        if (openedDialog != null) {
                            openedDialog.hide();
                            openedDialog = null;
                        }

                        return;
                    }

                    if ($ionicHistory.currentView() !== null && $ionicHistory.currentView().goBack) {
                        $ionicHistory.currentView().goBack();
                        return;
                    }

                    rt.goBack();
                }, false);

                window.fireHardwareBackClick = function() {
                    var event;
                    var eventName = "xrmhardwarebackclick";

                    if (document.createEvent) {
                        event = document.createEvent("HTMLEvents");
                        event.initEvent(eventName, true, true);
                    } else {
                        event = document.createEventObject();
                        event.eventType = eventName;
                    }

                    event.eventName = eventName;

                    if (document.createEvent) {
                        document.dispatchEvent(event);
                    } else {
                        document.fireEvent("on" + event.eventType, event);
                    }
                };
            }
        ]);
})(window);
