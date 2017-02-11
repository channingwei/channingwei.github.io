/********************************************************
 Copyright @ 苏州瑞泰信息技术有限公司 All rights reserved.
 创建人   : joe Song
 创建时间 : 2016-03-10
 说明     :  将所有的公用函数库合并到rt对象中
 *********************************************************/
/*global angular*/
/*global _*/

(function() {
    'use strict';
    angular.module('xrmApp')
        .service('rt', ['rtLibs', 'rtMd5', 'rtCalandar', 'rtUtils', 'rtRestClient', 'rtWechat', 'rtApp', 'rtData', 'rtFile',
            function(rtLibs, rtMd5, rtCalandar, rtUtils, rtRestClient, rtWechat, rtApp, rtData, rtFile) {
                _.extend(this, rtLibs, rtMd5, rtCalandar, rtUtils, rtRestClient, rtWechat, rtApp, rtData, rtFile);
            }
        ]);
})();
