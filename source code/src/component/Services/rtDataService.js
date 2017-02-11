/********************************************************
 Copyright @ 苏州瑞泰信息技术有限公司 All rights reserved.
 创建人   : joe Song
 创建时间 : 2016-03-10
 说明     :  GetData & SaveData实现
 *********************************************************/
/*global angular*/

(function() {
    'use strict';
    angular.module('xrmApp')
        .service('rtData', ['$http', 'rtRestClient', 'rtUtils', function($http, rtRestClient, rtUtils) {

            /**
             * 根据配置条件查询实体的数据
             * @param getDataName 配置文件中配置的查询节点的名字
             * @param paramsList 传入后端的查询条件
             * @param orderby 排序字段
             * @param pageIndex 当前页码
             * @param success 成功后的回调函数
             * @param error 失败后的回调函数
             * @returns DataListModel的对象
             */
            this.queryPagingData = function(getDataName, paramsList, orderby, pageIndex, success, error) {
                rtRestClient.post("api/DataService/Query", {
                    GetDataName: getDataName,
                    Paramslist: paramsList,
                    Orderby: orderby,
                    PageSize: rtUtils.getPaginationSize(),
                    PageIndex: pageIndex
                }).success(function(dataString) {
                    var data = JSON.parse(decodeURIComponent(dataString));
                    if (success) {
                        success(data);
                    }
                }).error(function(msg) {
                    if (error) {
                        error(msg);
                    } else {
                        rtUtils.showErrorToast(msg);
                    }
                });
            };

            /**
             * 根据配置条件查询实体的数据(过滤权限)
             * @param getDataName 配置文件中配置的查询节点的名字
             * @param paramsList 传入后端的查询条件
             * @param orderby 排序字段
             * @param pageIndex 当前页码
             * @param success 成功后的回调函数
             * @param error 失败后的回调函数
             * @returns DataListModel的对象
             */
            this.filteredQueryPagingData = function(getDataName, paramsList, orderby, pageIndex, success, error) {
                rtRestClient.post("api/DataService/FilteredQuery", {
                    GetDataName: getDataName,
                    Paramslist: paramsList,
                    Orderby: orderby,
                    PageSize: rtUtils.getPaginationSize(),
                    PageIndex: pageIndex
                }).success(function(dataString) {
                    var data = JSON.parse(decodeURIComponent(dataString));
                    if (success) {
                        success(data);
                    }
                }).error(function(msg) {
                    if (error) {
                        error(msg);
                    } else {
                        rtUtils.showErrorToast(msg);
                    }
                });
            };

            /**
             * 根据配置条件查询实体的数据
             * @param getDataName 配置文件中配置的查询节点的名字
             * @param paramsList 传入后端的查询条件
             * @param success 成功后的回调函数
             * @param error 失败后的回调函数
             * @returns DataListModel的对象
             */
            this.queryData = function(getDataName, paramsList, success, error) {
                rtRestClient.post("api/DataService/Query", {
                    GetDataName: getDataName,
                    Paramslist: paramsList
                }).success(function(dataString) {
                    var data = JSON.parse(decodeURIComponent(dataString));
                    if (success) {
                        success(data);
                    }
                }).error(function(msg) {
                    if (error) {
                        error(msg);
                    } else {
                        rtUtils.showErrorToast(msg);
                    }
                });
            };

            /**
             * 根据配置条件查询实体的数据(过滤权限)
             * @param getDataName 配置文件中配置的查询节点的名字
             * @param paramsList 传入后端的查询条件
             * @param success 成功后的回调函数
             * @param error 失败后的回调函数
             * @returns DataListModel的对象
             */
            this.filteredQueryData = function(getDataName, paramsList, success, error) {
                rtRestClient.post("api/DataService/FilteredQuery", {
                    GetDataName: getDataName,
                    Paramslist: paramsList
                }).success(function(dataString) {
                    var data = JSON.parse(decodeURIComponent(dataString));
                    if (success) {
                        success(data);
                    }
                }).error(function(msg) {
                    if (error) {
                        error(msg);
                    } else {
                        rtUtils.showErrorToast(msg);
                    }
                });
            };

            /**
             * 根据实体的Id获取实体的数据
             * @param entityName 实体的名字
             * @param id 主键字段
             * @param success 成功后的回调函数
             * @param error 失败后的回调函数
             */
            this.getData = function(entityName, id, success, error) {
                rtRestClient.get("api/DataService/Get?entityName=" + entityName + "&id=" + id)
                    .success(function(dataString) {
                        var data = JSON.parse(decodeURIComponent(dataString));
                        if (success) {
                            success(data);
                        }
                    }).error(function(msg) {
                        if (error) {
                            error(msg);
                        } else {
                            rtUtils.showErrorToast(msg);
                        }
                    });
            };

            /**
             * 根据实体的Id获取实体的数据(过滤权限)
             * @param entityName 实体的名字
             * @param id 主键字段
             * @param success 成功后的回调函数
             * @param error 失败后的回调函数
             */
            this.filteredGetData = function(entityName, id, success, error) {
                rtRestClient.get("api/DataService/FilteredGet?entityName=" + entityName + "&id=" + id)
                    .success(function(dataString) {
                        var data = JSON.parse(decodeURIComponent(dataString));
                        if (success) {
                            success(data);
                        }
                    }).error(function(msg) {
                        if (error) {
                            error(msg);
                        } else {
                            rtUtils.showErrorToast(msg);
                        }
                    });
            };

            /**
             * 插入或者更新实体数据
             * @param entityName 实体的名字
             * @param id 主键字段
             * @param obj 要插入数据的对象
             * @param success 成功后的回调函数
             * @param error 失败后的回调函数
             */
            this.saveData = function(entityName, id, obj, success, error) {
                rtRestClient.post("api/DataService/Save", {
                    EntityName: entityName,
                    Fields: obj,
                    Id: id
                }).success(function() {
                    if (success) {
                        success();
                    }
                }).error(function(msg) {
                    if (error) {
                        error(msg);
                    } else {
                        rtUtils.showErrorToast(msg);
                    }
                });
            };

            /**
             * 删除实体数据
             * @param entityName 实体的名字
             * @param id 主键字段
             * @param success 成功后的回调函数
             * @param error 失败后的回调函数
             */
            this.deleteData = function(entityName, id, success, error) {
                rtRestClient.post("api/DataService/Delete", {
                    EntityName: entityName,
                    Id: id
                }).success(function() {
                    if (success) {
                        success();
                    }
                }).error(function(msg) {
                    if (error) {
                        error(msg);
                    } else {
                        rtUtils.showErrorToast(msg);
                    }
                });
            };
        }]);
})();
