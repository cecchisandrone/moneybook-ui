'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('MainCtrl', function($scope) {
  	$scope.awesomeThings = [1, 2, 3];

  	$scope.add = function() {
        var f = document.getElementById('file').files[0];
        var r = new FileReader();
        r.onloadend = function(e) {
            var data = e.target.result;
            console.log('log');
            debugger;
            //send you binary data via $http or $resource or do anything else with it
        };
        r.readAsBinaryString(f);
    };
  });
