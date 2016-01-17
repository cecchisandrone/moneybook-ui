angular.module('sbAdminApp').directive('fileUpload', function () {
    return {
        restrict: 'E',
        templateUrl: 'scripts/directives/fileupload/fileupload.html',
        controller: function ($scope) {
            
            $scope.upload = function (file) {                
                var reader = new FileReader();
                reader.onloadend = function (e) {
                    var data = e.target.result;
                    console.log('log');
                    debugger;
                    //send you binary data via $http or $resource or do anything else with it
                };
                reader.readAsBinaryString(file);
            };
        }
    };
});
