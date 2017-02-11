/********************************************************
 Copyright @ 苏州瑞泰信息技术有限公司 All rights reserved.
 创建人   : joe Song
 创建时间 : 2016-03-10
 说明     : 用户操作权限相关的帮助类
 *********************************************************/
/*global angular*/

(function() {
    'use strict';
    angular.module('xrmApp')
        .service('rtPrivilege', ['$http', 'rtRestClient', function($http, rtRestClient) {

            /**
             * 获取权限
             * @param {string} etn 实体名称
             * @param {string} id 单据名称
             * @param  type     权限类型
             * @returns {HttpPromise}
             */
            this.havePrivilege = function(etn, id, type) {
                var url = "api/privilege/GetPrivilegeByType?etn=" + etn + "&type=" + type;
                if (id !== null) {
                    url += "&id=" + id;
                }
                return rtRestClient.get(url);
            };
        }]);
})();
