/**
 * Created by lvdongbo on 2016/5/23.
 */
/*global ckApp*/

(function(){
    "use strict";
    ckApp.config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('zh-CN', {
            'LOGIN_CHOOSE_LANGUAGE':'选择语言',

            'LOGIN_REMEMBER_PASSWORD': '记住密码',
            'LOGIN_SET_SERVER_URL': '设置服务器',

            'LOGIN_PLS_INPUT_USERNAME':'请输入账号',
            'LOGIN_PLS_INPUT_PASSWORD':'请输入密码',

            'LOGIN':'登录'
        });
    }]);
})();