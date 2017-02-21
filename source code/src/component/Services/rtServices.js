/*global angular*/
/*global _*/

(function() {
    'use strict';
    angular.module('ckApp')
        .service('rt', ['rtLibs', 'rtMd5', 'rtCalandar', 'rtUtils', 'rtRestClient', 'rtWechat', 'rtApp', 'rtData', 'rtFile',
            function(rtLibs, rtMd5, rtCalandar, rtUtils, rtRestClient, rtWechat, rtApp, rtData, rtFile) {
                _.extend(this, rtLibs, rtMd5, rtCalandar, rtUtils, rtRestClient, rtWechat, rtApp, rtData, rtFile);
            }
        ])
        .service('kuo', ['rt',
            function(rt) {
                _.extend(this, rt);
            }
        ]);
})();
