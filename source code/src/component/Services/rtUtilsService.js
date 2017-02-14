/*global angular*/
/*global BMap*/

(function() {
    'use strict';
    angular.module('ckApp')
        .service('rtUtils', ['$rootScope', '$http', '$ionicLoading', '$filter', '$ionicModal', '$ionicPopup', '$ionicViewService', '$timeout', '$ionicHistory', '$ionicActionSheet', '$state', '$translate', '$injector', '$q',
            function($rootScope, $http, $ionicLoading, $filter, $ionicModal, $ionicPopup, $ionicViewService, $timeout, $ionicHistory, $ionicActionSheet, $state, $translate, $injector, $q) {
                /**
                 * 判断一个字符串是不是以某字符串开头
                 * @param s
                 * @returns {boolean} 如果是，则返回true，否则返回 false
                 */
                String.prototype.startWith = function(s, ignoreCase) {
                    if (s === null || s === "" || this.length === 0 || s.length > this.length) {
                        return false;
                    }
                    var ns = this.substr(0, s.length);
                    if (ignoreCase) {
                        return ns.toLowerCase() === s.toLowerCase();
                    } else {
                        return ns === s;
                    }
                };

                /**
                 * 判断一个字符串是否包含某字符串
                 * @param substr 包含的字符串
                 * @param ignoreCase 是否忽略大小写
                 * @returns {boolean} 如果包含，则返回true，否则返回 false
                 */
                String.prototype.contains = function(substr, ignoreCase) {
                    if (ignoreCase === null || ignoreCase === undefined) {
                        ignoreCase = false;
                    }

                    if (ignoreCase) {
                        return this.search(new RegExp(substr, "i")) > -1;
                    } else {
                        return this.search(substr) > -1;
                    }
                };

                /**
                 * 判断一个字符串是不是以某字符串结尾
                 * @param s
                 * @returns {boolean} 如果是，则返回true，否则返回 false
                 */
                String.prototype.endWith = function(s, ignoreCase) {
                    if (s === null || s === "" || this.length === 0 || s.length > this.length) {
                        return false;
                    }
                    var ns = this.substring(this.length - s.length);
                    if (ignoreCase) {
                        return ns.toLowerCase() === s.toLowerCase();
                    } else {
                        return ns === s;
                    }
                };

                /**
                 * 判断一个变量是否是undefined或者null
                 * @param o 需要进行判断的变量
                 * @returns {boolean} 如果是undified或者null，则返回true，否则返回 false
                 */
                this.isNull = function(o) {
                    return o === undefined || o === null;
                };

                /**
                 * 判断一个字符串是否是undified、null、“”
                 * @param s 字符串变量
                 * @returns {boolean} 如果是，则返回true，否则返回false
                 */
                this.isNullOrEmptyString = function(s) {
                    return this.isNull(s) || this.trim(s) === "";
                };

                /**
                 * 判断是否是日期类型
                 * @param d
                 * @returns {boolean}
                 */
                this.isDate = function(d) {
                    if (this.isNull(d)) {
                        return false;
                    }

                    return d instanceof Date && !isNaN(d.valueOf());
                };

                /**
                 * 判断变量f是否是一个函数
                 * @param f 变量f
                 * @returns {boolean} 如果是函数则返回true，否则返回false
                 */
                this.isFunction = function(f) {
                    if (this.isNull(f)) {
                        return false;
                    }

                    return typeof f === 'function';
                };

                /**
                 * 判断字符是否有效的手机号码
                 * @returns {boolean}
                 */
                this.isCellphone = function(str) {
                    var reg = /^0*(13|15|18)\d{9}$/;
                    return reg.test(str);
                };

                /**
                 * 判断字符是否有效的电话号码
                 * @returns {boolean}
                 */
                this.isTelephone = function(str) {
                    var reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
                    return reg.test(str);
                };

                /**
                 * 检查是否是手机号码或者电话号码
                 */
                this.isPhone = function(str) {
                    return this.isCellphone(str) || this.isTelephone(str);
                };

                /**
                 * 检查是否是邮件地址
                 */
                this.isEMailAddress = function(str) {
                    var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;

                    return reg.test(str);
                };

                /**
                 * 判断字符是否有效的身份证号码
                 * @returns {boolean}
                 */
                this.isIDCard = function(str) {
                    var reg = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/;
                    return reg.test(str);
                };


                /**
                 * 得到日期年月日等加数字后的日期
                 */
                Date.prototype.dateAdd = function(datepart, number) {
                    var d = new Date(this.getTime());

                    var k = {
                        'y': 'FullYear',
                        'q': 'Month',
                        'm': 'Month',
                        'w': 'Date',
                        'd': 'Date',
                        'h': 'Hours',
                        'n': 'Minutes',
                        's': 'Seconds',
                        'ms': 'MilliSeconds'
                    };
                    var n = { 'q': 3, 'w': 7 };
                    eval('d.set' + k[datepart] + '(d.get' + k[datepart] + '()+' + ((n[datepart] || 1) * number) + ')');
                    return d;
                };

                /**
                 * 计算两日期相差的日期年月日等
                 */
                Date.prototype.dateDiff = function(datepart, enddate) {
                    var d = this,
                        i = {},
                        t = d.getTime(),
                        t2 = enddate.getTime();
                    i['y'] = enddate.getFullYear() - d.getFullYear();
                    i['q'] = i['y'] * 4 + Math.floor(enddate.getMonth() / 4) - Math.floor(d.getMonth() / 4);
                    i['m'] = i['y'] * 12 + enddate.getMonth() - d.getMonth();
                    i['ms'] = enddate.getTime() - d.getTime();
                    i['w'] = Math.floor((t2 + 345600000) / (604800000)) - Math.floor((t + 345600000) / (604800000));
                    i['d'] = Math.floor(t2 / 86400000) - Math.floor(t / 86400000);
                    i['h'] = Math.floor(t2 / 3600000) - Math.floor(t / 3600000);
                    i['n'] = Math.floor(t2 / 60000) - Math.floor(t / 60000);
                    i['s'] = Math.floor(t2 / 1000) - Math.floor(t / 1000);
                    return i[datepart];
                };

                /**
                 * 得到日期年月日等加数字后的日期
                 */
                this.dateAdd = function(datepart, number, date) {
                    return date.dateAdd(datepart, number);
                };

                /**
                 * 计算两日期相差的日期年月日等
                 */
                this.dateDiff = function(datepart, startdate, enddate) {
                    return startdate.dateDiff(datepart, enddate);
                };

                String.prototype.trim = function(trimChars) {
                    var result = this;

                    if (typeof trimChars !== "string" || trimChars.length <= 0) {
                        trimChars = " ";
                    }

                    var count = result.length;

                    while (count > 0) { //trim the head position
                        if (trimChars.indexOf(result[0]) >= 0) {
                            result = result.substring(1);
                            count--;
                        } else {
                            break;
                        }
                    }
                    while (count > 0) { //trim the tail position
                        if (trimChars.indexOf(result[count - 1]) >= 0) {
                            result = result.substring(0, count - 1);
                            count--;
                        } else {
                            break;
                        }
                    }
                    return result;
                };

                /**
                 * 移除字符串前后的空格或其它特殊字符，同C#中的Trim方法。
                 * @param str 待trim的字符串
                 * @param trimChars 要移除的特殊字符，如果不指定，则默认移除空白字符
                 * @returns {string} 返回移除后的字符串
                 */
                this.trim = function(str, trimChars) {
                    if (this.isNull(str) || typeof str !== "string" || str.length <= 0) {
                        return "";
                    }

                    return str.trim(trimChars);
                };

                /**
                 * 格式化日期类型
                 * @param {Date} date  待格式化的日期
                 * @param {string} format 语法同C#，默认”yyyy-MM-dd”
                 * @returns {string} 返回格式化后的日期字符串
                 */
                this.formatDateTime = function(date, format) {
                    if (!this.isDate(date)) {
                        return "";
                    }
                    if (this.isNullOrEmptyString(format)) {
                        format = 'yyyy-MM-dd';
                    }
                    return $filter('date')(date, format);
                };

                /**
                 * 生成一个新的GUID
                 * @returns {string} GUID
                 */
                this.newGuid = function() {
                    function s4() {
                        return Math.floor((1 + Math.random()) * 0x10000)
                            .toString(16)
                            .substring(1);
                    }

                    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                        s4() + '-' + s4() + s4() + s4();
                };

                /**
                 * 延迟执行
                 * @param {string} action 执行动作
                 * @param {int} delayMilliseconds 延迟的时间，单位：毫秒
                 */
                this.delay = function(action, delayMilliseconds) {
                    if (!this.isFunction(action)) {
                        throw new Error("第一个参数必须是function对象.");
                    }

                    if (this.isNull(delayMilliseconds)) {
                        delayMilliseconds = 2 * 1000;
                    }

                    $timeout(action, delayMilliseconds);
                };

                /**
                 * 分页查询时，获取每页显示的记录数。
                 */
                this.getPaginationSize = function() {
                    return 10;
                };

                /**
                 * 获取当前用户的ID
                 * @returns {string} 当前人员ID
                 */
                this.getUserId = function() {
                    var userId;
                    if (window.XrmDeviceData && window.XrmDeviceData.getUserId) {
                        userId = window.XrmDeviceData.getUserId();
                    } else if (!this.isNullOrEmptyString(localStorage.UserId)) {
                        userId = localStorage.UserId;
                    } else {
                        this.showErrorToast("没有获取到当前用户的ID!");
                    }
                    return userId;
                };

                /**
                 * 获取当前用户的类型
                 * @returns {string} 当前人员类型
                 */
                this.getUserType = function() {
                    var userType;
                    if (window.XrmDeviceData && window.XrmDeviceData.getUserType) {
                        userType = window.XrmDeviceData.getUserType();
                    } else if (!this.isNullOrEmptyString(localStorage.UserType)) {
                        userType = localStorage.UserType;
                    } else {
                        this.showErrorToast("没有获取到当前用户的类型!");
                    }
                    return userType;
                };

                /**
                 * 获取当前用户的账号
                 * @returns {string} 当前人员账号
                 */
                this.getUserName = function() {
                    var userName;
                    if (window.XrmDeviceData && window.XrmDeviceData.getUserName) {
                        userName = window.XrmDeviceData.getUserName();
                    } else if (!this.isNullOrEmptyString(localStorage.UserName)) {
                        userName = localStorage.UserName;
                    } else {
                        this.showErrorToast("没有获取到当前用户的账号!");
                    }
                    return userName;
                };


                /**
                 * 设置语言
                 * @param {string} 语言编码，如zh-CN、en-US
                 */
                this.setLanguageCode = function(languageCode) {
                    localStorage.LanguageCode = languageCode;
                    $translate.use(languageCode);
                };

                /**
                 * 获取语言
                 * @returns {string} 语言编码，如zh-CN、en-US
                 */
                this.getLanguageCode = function() {
                    var languageCode;

                    if (window.XrmDeviceData && window.XrmDeviceData.getLanguageCode) {
                        languageCode = window.XrmDeviceData.getLanguageCode();
                    } else if (localStorage.LanguageCode !== null && localStorage.LanguageCode !== undefined && localStorage.LanguageCode !== "") {
                        languageCode = localStorage.LanguageCode;
                    } else {
                        languageCode = "zh-CN";
                    }

                    return languageCode;
                };

                /**
                 * 翻译文字
                 * @param {string} word 语言词条
                 * @returns {string} 翻译后的文字
                 */
                this.translate = function(word) {
                    return $filter('translate')(word);
                };

                /**
                 * 弹出提示的Toast
                 * @param {string} msg 提示信息
                 * @param {int} duration 持续时间
                 */
                this.showInfoToast = function(msg, duration) {
                    if (this.isNullOrEmptyString(msg)) {
                        return;
                    }

                    $ionicLoading.show({
                        template: '<div>' +
                            '<div class="weui_mask_transparent"></div>' +
                            '<div class="weui_toast">' +
                            '<i class="weui_icon_toast_information"></i>' +
                            '<p class="weui_toast_content">' + msg + '</p>' +
                            '</div>' +
                            '</div>',
                        duration: duration || 1500
                    });
                };

                /**
                 * 弹出操作执行成功的Toast
                 * @param {string} msg 提示信息
                 * @param {int} duration 持续时间
                 */
                this.showSuccessToast = function(msg, duration) {
                    if (this.isNullOrEmptyString(msg)) {
                        return;
                    }

                    $ionicLoading.show({
                        template: '<div>' +
                            '<div class="weui_mask_transparent"></div>' +
                            '<div class="weui_toast">' +
                            '<i class="weui_icon_toast"></i>' +
                            '<p class="weui_toast_content">' + msg + '</p>' +
                            '</div>' +
                            '</div>',
                        duration: duration || 1500
                    });
                };

                /**
                 * 弹出执行错误的Toast
                 * @param {string} msg 错误消息
                 * @param {int} duration 持续时间
                 */
                this.showErrorToast = function(msg, duration) {
                    if (this.isNullOrEmptyString(msg)) {
                        return;
                    }

                    $ionicLoading.show({
                        template: '<div>' +
                            '<div class="weui_mask_transparent"></div>' +
                            '<div class="weui_toast">' +
                            '<i class="weui_icon_toast_error"></i>' +
                            '<p class="weui_toast_content">' + msg + '</p>' +
                            '</div>' +
                            '</div>',
                        duration: duration || 1500
                    });
                };

                /**
                 * 弹出正在执行的Toast
                 * @param {string} msg 提示信息
                 */
                this.showLoadingToast = function(msg) {
                    if (this.isNullOrEmptyString(msg)) {
                        msg = this.translate("component_Loading");
                    }

                    $ionicLoading.show({
                        template: '<div class="weui_loading_toast">' +
                            '<div class="weui_mask_transparent"></div>' +
                            '<div class="weui_toast">' +
                            '<div class="weui_loading">' +
                            '<div class="weui_loading_leaf weui_loading_leaf_0"></div>' +
                            '<div class="weui_loading_leaf weui_loading_leaf_1"></div>' +
                            '<div class="weui_loading_leaf weui_loading_leaf_2"></div>' +
                            '<div class="weui_loading_leaf weui_loading_leaf_3"></div>' +
                            '<div class="weui_loading_leaf weui_loading_leaf_4"></div>' +
                            '<div class="weui_loading_leaf weui_loading_leaf_5"></div>' +
                            '<div class="weui_loading_leaf weui_loading_leaf_6"></div>' +
                            '<div class="weui_loading_leaf weui_loading_leaf_7"></div>' +
                            '<div class="weui_loading_leaf weui_loading_leaf_8"></div>' +
                            '<div class="weui_loading_leaf weui_loading_leaf_9"></div>' +
                            '<div class="weui_loading_leaf weui_loading_leaf_10"></div>' +
                            '<div class="weui_loading_leaf weui_loading_leaf_11"></div>' +
                            '</div>' +
                            '<p class="weui_toast_content">' + msg + '</p>' +
                            '</div>' +
                            '</div>',
                        duration: 0,
                        noBackdrop: true
                    });
                };

                /**
                 * 隐藏正在执行的消息提示框
                 */
                this.hideLoadingToast = function() {
                    $ionicLoading.hide();
                };

                /**
                 * 创建弹出的对话框页面，如lookup的选择也
                 * @param {string} url 对话框模板html文件的地址
                 * @param {$scope} $s angularjs的$scope对象
                 * @param {function} cb 对话框的执行完成的回掉函数，如点击OK按钮或者选择一行数据
                 * @returns {promise} 返回promise对象，需要在then方法中调用show方法显示对话框，如then(function(d){ d.show();});
                 */
                this.createDialog = function(url, $s, cb) {
                    return $ionicModal.fromTemplateUrl(url, function($ionicModal) {
                        $s.dialog = $ionicModal;
                        $s.closeDialog = function() {
                            $s.dialog.remove();
                        };
                        if (cb !== undefined) {
                            $s.onDataSelected = cb;
                        }
                    }, {
                        scope: $s,
                        animation: 'slide-in-up'
                    });
                };

                /**
                 * 弹出的对话框页面，如lookup的选择
                 * @param {string} templateUrl 对话框模板html文件的地址
                 * @param {$scope} $scope angularjs的$scope对象
                 * @param {function} callback 对话框的执行完成的回调函数，如点击OK按钮或者选择一行数据
                 */
                this.showDialog = function(templateUrl, $scope, callback) {
                    $ionicModal.fromTemplateUrl(templateUrl, function($ionicModal) {
                        $scope.dialog = $ionicModal;
                        $scope.closeDialog = function() {
                            $scope.dialog.remove();
                            $rootScope.$broadcast('xrm.modal.hidden', $ionicModal);
                        };

                        if (callback !== undefined) {
                            $scope.onDataSelected = callback;
                        }
                    }, {
                        scope: $scope,
                        animation: 'slide-in-up'
                    }).then(function(d) {
                        d.show();
                        $rootScope.$broadcast('xrm.modal.shown', d);
                    });
                };

                /**
                 * 弹出提示对话框
                 * @param {String} title 消息提示的标题
                 * @param {String} content 消息提示的正文
                 * @param {string} okText 确定按钮的显示文字
                 */
                this.showAlertDialog = function(config) {
                    if (this.isNull(config)) {
                        config = {};
                    }

                    return $ionicPopup.alert({
                        title: config.title || "",
                        template: '<div style="text-align:center;">' + (config.content || "") + '</div>',
                        okText: config.okText || this.translate('component_OK'),
                        okType: "rt-dialog-button-primary"
                    });
                };

                /**
                 * 弹出提示对话框
                 * @param {String} title 消息提示的标题
                 * @param {String} content 消息提示的正文
                 */
                this.alert = function(title, content) {
                    return this.showAlertDialog({
                        "title": title,
                        "content": content
                    });
                }

                /**
                 * 弹出确认选择的对话框，如：是否要删除，包含确认和取消两个按钮
                 * @param {string} title 消息提示的标题
                 * @param {string} content 消息提示的正文
                 * @param {string} cancelText 取消按钮的显示文字
                 * @param {string} okText 确定按钮的显示文字
                 */
                this.showConfirmDialog = function(config) {
                    if (this.isNull(config)) {
                        config = {};
                    }

                    return $ionicPopup.confirm({
                        title: config.title || "",
                        content: config.content || "",
                        cancelText: config.cancelText || this.translate('component_Cancel'),
                        okText: config.okText || this.translate('component_OK'),
                        okType: "rt-dialog-button-primary"
                    });
                };

                /**
                 * 弹出确认选择的对话框，如：是否要删除，包含确认和取消两个按钮
                 * @param {string} title 消息提示的标题
                 * @param {string} content 消息提示的正文
                 */
                this.confirm = function(title, content) {
                    var deferred = $q.defer();

                    this.showConfirmDialog({
                        "title": title,
                        "content": content
                    }).then(function(res) {
                        if (res) {
                            deferred.resolve();
                        }
                    });

                    return deferred.promise;
                };

                this.getUrlParam = function(name) {
                    try {
                        var query = location.search.substring(1);
                        var pairs = query.split("&");
                        for (var i = 0; i < pairs.length; i++) {
                            var pos = pairs[i].indexOf('=');
                            if (pos == -1) continue;
                            var argname = pairs[i].substring(0, pos);
                            if (argname == name)
                                return pairs[i].substring(pos + 1);
                        }
                    } catch (e) {
                        alert(e);
                    }
                    return '';
                };

                this.convertGPS2BaiduLocation = function(longitude, latitude) {
                    var url = "http://api.map.baidu.com/geoconv/v1/?coords=" + longitude + "," + latitude + "&from=1&to=5&ak=ROninBdEIu93CBGDHc3fSPHE" + "&callback=JSON_CALLBACK";

                    return $http.jsonp(url);
                };

                this.extendController = function(childController, params) {
                    params.rt = this;

                    $injector.invoke(rtBaseController, childController, params);

                    return childController;
                };

                this.extendListController = function(childController, params) {
                    params.rt = this;

                    $injector.invoke(rtListController, childController, params);

                    return childController;
                }

                this.createCascadePickerDialog = function(config) {
                    var $scope = config.scope;

                    if (this.isNull($scope.cascadePicker)) {
                        $scope.cascadePicker = {};
                    }
                    $scope.cascadePicker.title = config.title || '';
                    $scope.cascadePicker.dataProvider = config.dataProvider || [];
                    $scope.cascadePicker.selectedValue = config.selectedValue || [];
                    $scope.cascadePicker.success = config.success;
                    $scope.cascadePicker.close = function() {
                        this.modal.hide();
                    };

                    return $ionicModal.fromTemplateUrl('component/cascadePickerDialog.html', function(ionicModal) {
                        $scope.cascadePicker.modal = ionicModal;
                    }, {
                        scope: $scope,
                        animation: 'slide-in-up'
                    });
                }

                this.getScreenWidth = function() {
                    return document.documentElement.clientWidth || document.body.clientWidth;
                }

                this.getScreenHeight = function(containHeader) {
                    return document.documentElement.clientHeight || document.body.clientHeight
                }

                this.showDatePickerDialog = function(config) {
                    var $scope = config.scope;

                    if (this.isNull($scope.datePicker)) {
                        $scope.datePicker = {};
                    }
                    $scope.datePicker.selectedValue = config.selectedValue;
                    $scope.datePicker.success = config.success;
                    $scope.datePicker.close = function() {
                        this.modal.hide();
                    };

                    return $ionicModal.fromTemplateUrl('component/datePickerDialog.html', function(ionicModal) {
                        $scope.datePicker.modal = ionicModal;
                    }, {
                        scope: $scope,
                        animation: 'slide-in-up'
                    }).then(function(d) {
                        d.show();
                    });
                }
            }
        ]);
})();
