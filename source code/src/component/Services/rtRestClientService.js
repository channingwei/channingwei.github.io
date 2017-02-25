/*global angular*/

(function() {
    'use strict';
    angular.module('ckApp')
        .service('rtRestClient', ['$http', '$q', 'rtUtils', function($http, $q, rtUtils) {
            var _this = this;

            function _setupHttpHeader($http) {
                var token = _this.getXrmAuthToken();
                if (!rtUtils.isNullOrEmptyString(token)) {
                    $http.defaults.headers.common.Authorization = 'Basic ' + token;
                }

                var appName = rtUtils.getUrlParam("appName");
                if (!rtUtils.isNullOrEmptyString(appName)) {
                    $http.defaults.headers.common["app"] = appName;
                }

                var languageCode = rtUtils.getLanguageCode();
                if (!rtUtils.isNullOrEmptyString(languageCode)) {
                    $http.defaults.headers.common["Accept-Language"] = languageCode;
                }
            }

            function _setupPromise(httpPromise) {

                var deferred = $q.defer();

                httpPromise
                    .then(function(response) {
                        var data = response.data;

                        if (!rtUtils.isNull(data) && !rtUtils.isNull(data.ErrorCode)) {
                            if (data.ErrorCode === 0) {
                                deferred.resolve({
                                    data: data.Data,
                                    message: data.Message
                                });
                            } else {
                                deferred.reject({
                                    code: data.ErrorCode,
                                    message: data.Message
                                });
                            }
                        } else {
                            deferred.resolve({
                                data: data,
                                message: ""
                            });
                        }
                    }, function(response) {
                        deferred.reject({
                            code: response.status,
                            message: response.data
                        });
                    });

                var promise = deferred.promise;

                promise.success = function(fn) {
                    this.then(function(resp) {
                        if (!fn) {
                            return;
                        }

                        fn(resp.data, resp.message);
                    });
                    return this;
                };

                promise.error = function(fn) {
                    this.then(null, function(resp) {
                        if (!fn) {
                            return;
                        }

                        fn(resp.message, resp.code);
                    });
                    return this;
                };

                return promise;
            }

            /**
             * 获取移动接口服务器的地址
             */
            this.getBaseApiUrl = function() {
                var url = null;
                if (window.XrmDeviceData && window.XrmDeviceData.getXrmBaseUrl) {
                    url = window.XrmDeviceData.getXrmBaseUrl();
                } else if (!rtUtils.isNullOrEmptyString(localStorage.XrmBaseUrl)) {
                    url = localStorage.XrmBaseUrl;
                }

                if (url === null) {
                    url = "/";
                }

                if (!url.endWith("/")) {
                    url += "/";
                }

                return url;
            };

            /**
             * 获取当前用户的身份Token
             */
            this.getXrmAuthToken = function() {
                if (window.XrmDeviceData && window.XrmDeviceData.getXrmAuthToken) {
                    return window.XrmDeviceData.getXrmAuthToken();
                } else if (!rtUtils.isNullOrEmptyString(localStorage.XrmAuthToken)) {
                    return localStorage.XrmAuthToken;
                }

                var appName = rtUtils.getUrlParam("appName");
                if (!rtUtils.isNullOrEmptyString(appName)) {
                    return localStorage["Wechat_" + appName + "_AuthToken"];
                }

                return null;
            };

            /**
             * 通过Get方法调用WebAPI
             * @param {string} apiUrl WebAPI的URL地址
             * @returns {HttpPromise}
             */
            this.get = function(apiUrl, ignoreError) {
                var url = apiUrl;

                _setupHttpHeader($http);

                return _setupPromise($http.get(url));
            };

            /**
             * 通过post的方法调用WebAPI
             * @param {string} apiUrl WebAPI的URL地址
             * @param {*} data 要post到服务器端的数据
             * @returns {HttpPromise}
             */
            this.post = function(apiUrl, data) {
                var url = apiUrl;

                _setupHttpHeader($http);

                return _setupPromise($http.post(url, data));
            };

            this.delete = function(apiUrl) {
                var url = apiUrl;

                _setupHttpHeader($http);

                return _setupPromise($http.delete(url));
            };

            /**
             * 通过post的方法调用WebAPI
             * @param {string} apiUrl WebAPI的URL地址
             * @param {*} data 要post到服务器端的数据
             * @returns {HttpPromise}
             */
            this.put = function(apiUrl, data) {
                var url = apiUrl;

                _setupHttpHeader($http);

                return _setupPromise($http.put(url, data));
            };
        }]);
})();
