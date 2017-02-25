/*global angular:false */
/*global xrmApp:false */
ckApp.factory('HomeService', ['kuo', function (kuo) {
   'use strict';

   function _getTheList(){
      var api = "https://api.github.com/repos/channingwei/iPassword-swift/issues?state=closed";
      return kuo.get(api);
   }

   return {
      getTheList: _getTheList
   };
}]);
