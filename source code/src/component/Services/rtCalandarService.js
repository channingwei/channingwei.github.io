(function() {
    'use strict';
    angular.module('ckApp')
        .service('rtCalandar', [function() {
            this.getCalandar = function(year, month) {
                var calendar = [];

                var daynumber = GetMDay(year, month); //当月天数

                var firstnumber = WeekNumber(year, month, 1); //当月第一天星期

                var lastnumber = WeekNumber(year, month, daynumber); //当月最后一天星期

                var weeknumber = (daynumber - (7 - firstnumber) - (lastnumber + 1)) / 7; //除去第一个星期和最后一个星期的周数

                var day = 1;

                //第一个星期
                calendar.push([]);
                for (var i = 0; i < firstnumber; i++) {
                    calendar[0].push({
                        "text": "",
                        "value": null
                    });
                }
                for (var i = firstnumber; i < 7; i++) {
                    calendar[0].push({
                        "text": day < 10 ? '0' + day : '' + day,
                        "value": new Date(year, month - 1, day)
                    });
                    day++;
                }

                //其他星期
                for (var i = 1; i <= weeknumber; i++) {
                    calendar.push([]);

                    for (var k = daynumber - (7 - firstnumber) - (weeknumber - 1) * 7; k < daynumber - (7 - firstnumber) - (weeknumber - 1) * 7 + 7; k++) {
                        calendar[i].push({
                            "text": day < 10 ? '0' + day : '' + day,
                            "value": new Date(year, month - 1, day)
                        });
                        day++;
                    }
                }

                //最后一个星期
                calendar.push([]);
                for (var i = 0; i < lastnumber + 1; i++) {
                    calendar[calendar.length - 1].push({
                        "text": day < 10 ? '0' + day : '' + day,
                        "value": new Date(year, month - 1, day)
                    });
                    day++;
                }
                for (var i = lastnumber + 1; i < 7; i++) {
                    calendar[calendar.length - 1].push({
                        "text": "",
                        "value": null
                    });
                }

                return calendar;
            };

            // 给定年月获取当月天数  
            function GetMDay(y, m) {
                var mday = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

                if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) //判断是否是闰月
                {
                    mday[1] = 29;
                }

                return mday[m - 1];
            }

            // 获取星期数
            function WeekNumber(y, m, d) {
                var wk;
                if (m <= 12 && m >= 1) {
                    for (var i = 1; i < m; ++i) {
                        d += GetMDay(y, i);
                    }
                }

                /*根据日期计算星期的公式*/
                wk = (y - 1 + (y - 1) / 4 - (y - 1) / 100 + (y - 1) / 400 + d) % 7;

                //0对应星期天，1对应星期一
                return parseInt(wk);
            }
        }])
})();
