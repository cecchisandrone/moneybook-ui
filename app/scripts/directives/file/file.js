angular.module('sbAdminApp').directive('file', function() {
    return {
        restrict: 'A',
        scope: {
            file: '='
        },
        link: function(scope, el, attrs){
            el.bind('change', function(event){
                var files = event.target.files;
                var file = files[0];
                scope.file = file ? file : undefined;
                scope.$apply();
            });
        }
    };
});