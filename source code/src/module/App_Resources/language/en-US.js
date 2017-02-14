/*global ckApp*/

(function () {
    "use strict";
    ckApp.config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('1033', {
            'KEY': 'VALUE'
        });
    }]);
})();
