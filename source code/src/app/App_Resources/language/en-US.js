/**
 * Created by lvdongbo on 2016/5/23.
 */
/*global xrmApp*/

(function () {
    "use strict";
    xrmApp.config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('en-US', {
            'LOGIN_CHOOSE_LANGUAGE': 'Choose Language',

            'LOGIN_REMEMBER_PASSWORD': 'Remember password',
            'LOGIN_SET_SERVER_URL': 'Set ServerUrl',

            'LOGIN_PLS_INPUT_USERNAME': 'Please input account name',
            'LOGIN_PLS_INPUT_PASSWORD': 'Please input password',

            'LOGIN': 'Login'
        });
    }]);
})();