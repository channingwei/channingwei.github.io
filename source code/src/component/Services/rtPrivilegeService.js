/*global angular*/

(function() {
    'use strict';
    angular.module('ckApp')
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
