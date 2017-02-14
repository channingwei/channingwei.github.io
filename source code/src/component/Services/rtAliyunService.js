/*global angular:false */
/*global _:false */
/*global ckApp:false */
/*global wx:false */
(function() {
    'use strict';
    angular.module('ckApp')
        .service('rtAliyun', ['rtUtils', 'rtRestClient', function(rtUtils, rtRestClient) {
            var config;

            /**
             * 获取对应文件的URL
             */
            this.signatureUrl = function(key) {
                var client = new OSS({
                    accessKeyId: config.AccessKeyId,
                    accessKeySecret: config.AccessKeySecret,
                    bucket: config.Bucket,
                    endpoint: config.Endpoint
                });

                return client.signatureUrl(key);
            };

            function _config() {
                if (rtUtils.isNull(config)) {
                    rtRestClient.get("api/oss/GetOssConfig")
                        .success(function(result) {
                            config = result;
                        })
                        .error(function(errorMessage) {
                            console.error(errorMessage);
                        });
                }
            }

            _config();
        }]);
})();
