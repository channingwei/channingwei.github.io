/********************************************************
 Copyright @ 苏州瑞泰信息技术有限公司 All rights reserved.
 创建人   : joe Song
 创建时间 : 2016-03-10
 说明     : 封装文件上传下载部分的公用函数
 *********************************************************/
/*global angular*/

(function() {
    'use strict';
    angular.module('xrmApp')
        .service('rtFile', ['rtRestClient', 'rtUtils', '$q', function(rtRestClient, rtUtils, $q) {
            this.viewFile = function(moduleType, fileId, fileName) {
                var baseUrl = rtRestClient.getBaseApiUrl() + 'FileDownloadHandler.ashx?download=0&moduleType=' + moduleType + '&fileid=' + fileId;

                if (!rtUtils.isNullOrEmptyString(fileName)) {
                    var fileExt = fileName.substring(fileName.indexOf('.') + 1);
                    baseUrl += '&fileExt=' + fileExt;
                }
                window.open(baseUrl, "_self", 'toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no', true);
            };

            this.downloadFile = function(moduleType, fileId, fileName) {
                var baseUrl = rtRestClient.getBaseApiUrl() + 'FileDownloadHandler.ashx?download=1&moduleType=' + moduleType + '&fileid=' + fileId;

                if (!rtUtils.isNullOrEmptyString(fileName)) {
                    var fileExt = fileName.substring(fileName.indexOf('.') + 1);
                    baseUrl += '&fileExt=' + fileExt;
                }
                window.open(baseUrl, "_self", 'toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no', true);
            };

            this.uploadBase64File = function(fileContent, moduleType, objectId, isoverwrite, success) {
                if (rtUtils.isNullOrEmptyString(objectId)) {
                    rtUtils.showErrorToast("objectId can not be null");
                    return;
                }

                if (rtUtils.isNullOrEmptyString(fileContent)) {
                    rtUtils.showErrorToast("fileContent can not be null");
                    return;
                }

                if (rtUtils.isNull(isoverwrite)) {
                    isoverwrite = true;
                }

                var data = {
                    ObjectId: objectId,
                    IsOverWrite: isoverwrite,
                    ModuleType: moduleType,
                    FileBase64Content: fileContent
                };
                var apiUrl = "api/File/UploadFile";

                rtRestClient.post(apiUrl, data)
                    .error(function(msg) {
                        rtUtils.showErrorToast(msg);
                    })
                    .success(function(data) {
                        if (success && rtUtils.isFunction(success)) {
                            success(data);
                        }
                    });
            };

            this.getFilesByObjectId = function(moduleType, objectId) {
                var deffered = $q.defer();
                if (rtUtils.isNullOrEmptyString(moduleType)) {
                    deffered.reject("moduleType can not be null");
                    return deffered.promise;
                }

                if (rtUtils.isNullOrEmptyString(objectId)) {
                    deffered.reject("objectId can not be null");
                    return deffered.promise;
                }

                var apiUrl = "api/File/GetFilesByObjectId?moduleType=" + moduleType + "&objectId=" + objectId;
                return rtRestClient.get(apiUrl);
            };

            this.getFileByFileId = function(moduleType, fileId) {
                if (rtUtils.isNullOrEmptyString(moduleType)) {
                    rtUtils.showErrorToast("moduleType can not be null");
                    return;
                }

                if (rtUtils.isNullOrEmptyString(fileId)) {
                    rtUtils.showErrorToast("objectId can not be null");
                    return;
                }

                var apiUrl = "api/File/GetFileByFileId?moduleType=" + moduleType + "&fileId=" + fileId;
                return rtRestClient.get(apiUrl);
            };

            this.deleteFileByFileId = function(moduleType, fileId) {
                if (rtUtils.isNullOrEmptyString(moduleType)) {
                    rtUtils.showErrorToast("moduleType can not be null");
                    return;
                }
                var apiUrl = "api/File/DeleteFileByFileId?moduleType=" + moduleType + "&fileId=" + fileId;
                return rtRestClient.post(apiUrl);
            };
        }]);
})();
