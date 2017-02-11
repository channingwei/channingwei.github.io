/**
 * Created by lvdongbo on 2016/5/23.
 */
/*global xrmApp*/

(function(){
    "use strict";
    xrmApp.config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('1041', {
            'KEY': 'VALUE'
        });
    }]);
})();