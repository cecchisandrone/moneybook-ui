'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
    .controller('ImportCtrl', function ($scope, $http) {

        $scope.send = function () {
            $http.get('http://localhost:9000/api/things').then(function (res) {
                debugger;
            }, function (err) {
                debugger;
            });
        };
    });
