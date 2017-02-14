/**
 * Created by lvdongbo on 2016/5/23.
 */
/*global ckApp*/

(function(){
    "use strict";
    ckApp.config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('ja-JP', {
            'LOGIN_CHOOSE_LANGUAGE': '請選擇語言',

            'LOGIN_REMEMBER_PASSWORD': '記住密碼',
            'LOGIN_SET_SERVER_URL': '設置服務器',

            'LOGIN_PLS_INPUT_USERNAME': '請輸入您的賬號',
            'LOGIN_PLS_INPUT_PASSWORD': '請輸入您的密碼',

            'LOGIN': 'Login'
        });
    }]);
})();