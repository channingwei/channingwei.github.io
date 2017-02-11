/*global angular:false */
/*global _:false */
/*global xrmApp:false */
/*global wx:false */
(function() {
    'use strict';
    angular.module('xrmApp')
        .service('rtWechat', ['$http', '$q', 'rtRestClient', 'rtUtils', function($http, $q, rtRestClient, rtUtils) {

            /**
             * 微信定位方法
             * @param success
             * @param error
             */
            this.getLocation = function() {
                var deferred = $q.defer();

                wx.getLocation({
                    type: 'wgs84', // 默认为wgs84的gps坐标，
                    // 如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                    success: function(res) {
                        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                        var speed = res.speed; // 速度，以米/每秒计
                        var accuracy = res.accuracy; // 位置精度

                        var latitude = res.latitude;
                        var longitude = res.longitude;

                        //调用百度的API将GPS坐标转换成百度的火星坐标
                        rtUtils.convertGPS2BaiduLocation(longitude, latitude)
                            .success(function(d) {
                                if (d === undefined || d === null || d.status !== 0 || d.result === null || d.result.length === 0) {
                                    deferred.reject("调用百度火星坐标转换的API错误,错误码：" + d.status);
                                    return;
                                }

                                var newLongitude = d.result[0].x;
                                var newLatitude = d.result[0].y;
                                // 创建地理编码实例
                                var myGeo = new BMap.Geocoder();
                                // 根据坐标得到地址描述
                                myGeo.getLocation(new BMap.Point(newLongitude, newLatitude), function(result) {
                                    deferred.resolve({
                                        latitude: result.point.lat,
                                        longitude: result.point.lng,
                                        address: result.address
                                    });
                                });

                            })
                            .error(function(errorMessage) {
                                deferred.reject(errorMessage);
                            });

                    },
                    fail: function(error) {
                        deferred.reject(error.errorMsg);
                    }
                });

                return deferred.promise;
            };

            this.chooseImage = function(config) {
                var deferred = $q.defer();

                wx.chooseImage({
                    count: config.count, // 默认9
                    sizeType: config.sizeType, // 可以指定是原图还是压缩图，默认二者都有
                    sourceType: config.sourceType, // 可以指定来源是相册还是相机，默认二者都有
                    success: function(res) {
                        deferred.resolve(res); // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                    }
                });

                return deferred.promise;
            }

            /**
             * 预览照片
             * @param config
             */
            this.previewImage = function(config) {
                wx.previewImage(config);
            };

            /**
             * 上传单张照片
             * @param config
             */
            this.uploadImage = function(config) {
                var deferred = $q.defer();

                wx.uploadImage({
                    localId: config.localId, // 需要上传的图片的本地ID，由chooseImage接口获得
                    isShowProgressTips: config.isShowProgressTips, // 默认为1，显示进度提示
                    success: function(res) {
                        deferred.resolve(res); // 返回图片的服务器端ID
                    },
                    error: function(error) {
                        deferred.reject(error.errMsg);
                    }
                });

                return deferred.promise;
            };

            /**
             * 下载图片
             * @param config
             */
            this.downloadImage = function(config) {
                var deferred = $q.defer();

                wx.downloadImage({
                    serverId: config.serverId, // 需要下载的图片的服务器端ID，由uploadImage接口获得
                    isShowProgressTips: config.isShowProgressTips, // 默认为1，显示进度提示
                    success: function(res) {
                        deferred.resolve(res); // 返回图片下载后的本地ID
                    }
                });

                return deferred.promise;
            }

            /**
             * 获取网络状态
             * @param config
             */
            this.getNetworkType = function() {
                var deferred = $q.defer();

                wx.getNetworkType({
                    success: function(res) {
                        deferred.resolve(res);
                    }
                });

                return deferred.promise;
            }

            /**
             * 扫描二维码
             */
            this.scanQRCode = function(config) {
                var deferred = $q.defer();

                if (rtUtils.isNull(config)) {
                    config = {};
                }

                if (rtUtils.isNull(config.desc)) {
                    config.desc = "";
                }
                if (rtUtils.isNull(config.scanType)) {
                    config.scanType = ["qrCode", "barCode"];
                }

                wx.scanQRCode({
                    desc: config.desc,
                    needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                    scanType: config.scanType, // 可以指定扫二维码还是一维码，默认二者都有
                    success: function(res) {
                        var resultStr = res.resultStr;
                        var resultList = resultStr.split(",");
                        if (resultList.length > 1) {
                            resultStr = resultList[1];
                        }
                        deferred.resolve(resultStr);
                    },
                    error: function(res) {
                        if (res.errMsg.indexOf('function_not_exist') > 0) {
                            deferred.reject('版本过低请升级')
                        } else {
                            deferred.reject(res.errMsg);
                        }
                    }
                });

                return deferred.promise;
            }

            /**
             * 关闭页面
             */
            this.closeWindow = function() {
                wx.closeWindow();
            };

            /**
             * 打开页面
             */
            this.openWindow = function(url, params) {
                //
            };

            /**
             * 注销账号
             */
            this.logout = function() {
                //
            };

            /**
             * 退出程序
             */
            this.exit = function() {
                //
            };

            /**
             * 打开邮箱
             */
            this.openEmail = function() {
                //
            };

            /**
             * 获取设备类型
             */
            this.getDeviceType = function(config) {
                //
            };

            this.getAppId = _getAppId;

            this.getAppName = _getAppName;

            function _getAppName() {
                return rtUtils.getUrlParam("appName");
            }

            function _getAppId() {
                return localStorage["Wechat_" + _getAppName() + "_AppId"];
            }

            function _setAppId(appId) {
                localStorage["Wechat_" + _getAppName() + "_AppId"] = appId;
            }

            /**
             * 通过config接口注入权限验证配置
             */
            function _config() {
                var appId = _getAppId();

                var promises = [];
                promises.push(rtRestClient.get("api/WeChat/GetJsApiTicket"));
                //如果appId还没获取过，则从服务器端获取
                if (rtUtils.isNullOrEmptyString(appId)) {
                    promises.push(rtRestClient.get("api/WeChat/GetAppId"));
                }

                $q.all(promises)
                    .then(function(responses) {
                        var ticket = responses[0].data;
                        if (rtUtils.isNullOrEmptyString(appId)) {
                            appId = responses[1].data;

                            _setAppId(appId);
                        }

                        var timestamp = Date.parse(new Date());
                        var locationUrl = window.location.href.split('#')[0];
                        var sign = 'jsapi_ticket=' + ticket + '&noncestr=HcGwOqUaLR2oCR6P&timestamp=' +
                            timestamp + '&url=' + locationUrl;
                        var signature = hex_sha1(sign);

                        wx.config({
                            debug: false,
                            appId: appId,
                            timestamp: timestamp,
                            nonceStr: 'HcGwOqUaLR2oCR6P',
                            signature: signature,
                            jsApiList: [
                                'checkJsApi',
                                'onMenuShareTimeline',
                                'onMenuShareAppMessage',
                                'onMenuShareQQ',
                                'onMenuShareWeibo',
                                'onMenuShareQZone',
                                'hideMenuItems',
                                'showMenuItems',
                                'hideAllNonBaseMenuItem',
                                'showAllNonBaseMenuItem',
                                'translateVoice',
                                'startRecord',
                                'stopRecord',
                                'onVoiceRecordEnd',
                                'playVoice',
                                'onVoicePlayEnd',
                                'pauseVoice',
                                'stopVoice',
                                'uploadVoice',
                                'downloadVoice',
                                'chooseImage',
                                'getLocalImgData',
                                'previewImage',
                                'uploadImage',
                                'downloadImage',
                                'getNetworkType',
                                'openLocation',
                                'getLocation',
                                'hideOptionMenu',
                                'showOptionMenu',
                                'closeWindow',
                                'scanQRCode',
                                'chooseWXPay',
                                'openProductSpecificView',
                                'addCard',
                                'chooseCard',
                                'openCard'
                            ], fail: function(errMsg){
                                alert(errMsg);
                            }
                        });
                    });
            }

            var hexcase = 0;
            /* hex output format. 0 - lowercase; 1 - uppercase        */
            var chrsz = 8;
            /* bits per input character. 8 - ASCII; 16 - Unicode      */

            function hex_sha1(s) {
                return binb2hex(core_sha1(str2binb(s), s.length * chrsz));
            }

            /*
             * Calculate the SHA-1 of an array of big-endian words, and a bit length
             */
            function core_sha1(x, len) {
                /* append padding */
                x[len >> 5] |= 0x80 << (24 - len % 32);
                x[((len + 64 >> 9) << 4) + 15] = len;

                var w = new Array(80);
                var a = 1732584193;
                var b = -271733879;
                var c = -1732584194;
                var d = 271733878;
                var e = -1009589776;

                for (var i = 0; i < x.length; i += 16) {
                    var olda = a;
                    var oldb = b;
                    var oldc = c;
                    var oldd = d;
                    var olde = e;

                    for (var j = 0; j < 80; j++) {
                        if (j < 16) w[j] = x[i + j];
                        else w[j] = rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
                        var t = safe_add(safe_add(rol(a, 5), sha1_ft(j, b, c, d)),
                            safe_add(safe_add(e, w[j]), sha1_kt(j)));
                        e = d;
                        d = c;
                        c = rol(b, 30);
                        b = a;
                        a = t;
                    }

                    a = safe_add(a, olda);
                    b = safe_add(b, oldb);
                    c = safe_add(c, oldc);
                    d = safe_add(d, oldd);
                    e = safe_add(e, olde);
                }
                return [a, b, c, d, e];

            }

            /*
             * Perform the appropriate triplet combination function for the current
             * iteration
             */
            function sha1_ft(t, b, c, d) {
                if (t < 20) return (b & c) | ((~b) & d);
                if (t < 40) return b ^ c ^ d;
                if (t < 60) return (b & c) | (b & d) | (c & d);
                return b ^ c ^ d;
            }

            /*
             * Determine the appropriate additive constant for the current iteration
             */
            function sha1_kt(t) {
                return (t < 20) ? 1518500249 : (t < 40) ? 1859775393 :
                    (t < 60) ? -1894007588 : -899497514;
            }

            /*
             * Add integers, wrapping at 2^32. This uses 16-bit operations internally
             * to work around bugs in some JS interpreters.
             */
            function safe_add(x, y) {
                var lsw = (x & 0xFFFF) + (y & 0xFFFF);
                var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
                return (msw << 16) | (lsw & 0xFFFF);
            }

            /*
             * Bitwise rotate a 32-bit number to the left.
             */
            function rol(num, cnt) {
                return (num << cnt) | (num >>> (32 - cnt));
            }

            /*
             * Convert an 8-bit or 16-bit string to an array of big-endian words
             * In 8-bit function, characters >255 have their hi-byte silently ignored.
             */
            function str2binb(str) {
                var bin = [];
                var mask = (1 << chrsz) - 1;
                for (var i = 0; i < str.length * chrsz; i += chrsz)
                    bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (32 - chrsz - i % 32);
                return bin;
            }

            /*
             * Convert an array of big-endian words to a hex string.
             */
            function binb2hex(binarray) {
                var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
                var str = "";
                for (var i = 0; i < binarray.length * 4; i++) {
                    str += hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8 + 4)) & 0xF) +
                        hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8)) & 0xF);
                }
                return str;
            }

            _config();
        }]);
})();
