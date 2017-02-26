/*global angular:false */
/*global xrmApp:false */
ckApp.factory('HomeService', ['kuo', function (kuo) {
   'use strict';

   function _getTheList(){
      var api = "https://api.github.com/repos/channingwei/channingwei.github.io/issues?state=open";
      return kuo.get(api);
   }

   return {
      getTheList: _getTheList
   };
}]);
