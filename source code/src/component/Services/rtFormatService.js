/********************************************************
 Copyright @ 苏州瑞泰信息技术有限公司 All rights reserved.
 创建人   : joe Song
 创建时间 : 2016-03-10
 说明     : 格式化数据的Filter
 *********************************************************/
/*global angular*/

(function() {
    'use strict';
    angular.module('xrmApp')
        .filter('friendlyFormatDateTime', function() {

            function formatDateTime(d, format) {
                var o = {
                    "M+": d.getMonth() + 1, //month
                    "d+": d.getDate(), //day
                    "h+": d.getHours(), //hour
                    "m+": d.getMinutes(), //minute
                    "s+": d.getSeconds(), //second
                    "q+": Math.floor((d.getMonth() + 3) / 3), //quarter
                    "S": d.getMilliseconds() //millisecond
                };

                if (/(y+)/.test(format)) {
                    format = format.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
                }

                for (var k in o) {
                    if (new RegExp("(" + k + ")").test(format)) {
                        format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
                    }
                }
                return format;
            }

            return function(input) {
                var d;
                if (typeof input === 'string') {
                    d = moment(input).toDate()
                } else {
                    d = input;
                }

                var today = new Date();
                today.setHours(23, 59, 59, 999);

                var friendlyDateString;

                var internalDays = Math.floor((today.getTime() - d.getTime()) / (1000 * 60 * 60 * 24));
                if (internalDays >= -2 && internalDays <= 2) {
                    switch (internalDays) {
                        case -2:
                            friendlyDateString = "后天" + formatDateTime(d, " hh:mm");
                            break;
                        case -1:
                            friendlyDateString = "明天" + formatDateTime(d, " hh:mm");
                            break;
                        case 0:
                            friendlyDateString = "今天" + formatDateTime(d, " hh:mm");
                            break;
                        case 1:
                            friendlyDateString = "昨天" + formatDateTime(d, " hh:mm");
                            break;
                        case 2:
                            friendlyDateString = "前天" + formatDateTime(d, " hh:mm");
                            break;
                        default:
                            friendlyDateString = formatDateTime(d, "yyyy-MM-dd hh:mm");
                            break;
                    }

                    return friendlyDateString;
                }

                if (today.getMonth() == d.getMonth() && today.getFullYear() == d.getFullYear()) {
                    return "本月" + formatDateTime(d, "dd") + '号';
                }

                if (today.getFullYear() == d.getFullYear()) {
                    return formatDateTime(d, "MM") + "月" + formatDateTime(d, "dd") + '号';
                }

                return "";

            };
        })
        .filter('friendlyFormatDate', function() {

            function formatDateTime(d, format) {
                var o = {
                    "M+": d.getMonth() + 1, //month
                    "d+": d.getDate(), //day
                    "h+": d.getHours(), //hour
                    "m+": d.getMinutes(), //minute
                    "s+": d.getSeconds(), //second
                    "q+": Math.floor((d.getMonth() + 3) / 3), //quarter
                    "S": d.getMilliseconds() //millisecond
                };

                if (/(y+)/.test(format)) {
                    format = format.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
                }

                for (var k in o) {
                    if (new RegExp("(" + k + ")").test(format)) {
                        format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
                    }
                }
                return format;
            }

            return function(input) {
                if (input === undefined || input === null)
                    return;

                var d;
                if (typeof input === 'string') {
                    d = moment(input).toDate()
                } else {
                    d = input;
                }

                var today = new Date();
                today.setHours(23, 59, 59, 999);

                var friendlyDateString;

                var internalDays = Math.floor((today.getTime() - d.getTime()) / (1000 * 60 * 60 * 24));
                switch (internalDays) {
                    case -2:
                        friendlyDateString = "后天";
                        break;
                    case -1:
                        friendlyDateString = "明天";
                        break;
                    case 0:
                        friendlyDateString = "今天" + formatDateTime(d, " hh:mm");
                        break;
                    case 1:
                        friendlyDateString = "昨天";
                        break;
                    case 2:
                        friendlyDateString = "前天";
                        break;
                    default:
                        if (today.getFullYear() == d.getFullYear()) {
                            friendlyDateString = formatDateTime(d, "MM-dd");
                        } else {
                            friendlyDateString = formatDateTime(d, "yyyy-MM-dd");
                        }
                        break;
                }

                return friendlyDateString;
            };
        });
})();
