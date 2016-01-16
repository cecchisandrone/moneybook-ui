'use strict';

describe('Directive: fileUpload', function () {

    var $compile, $scope;

    // load the controller's module
    beforeEach(function() {
        module('tpl');
        module('sbAdminApp');
    });

    // Angular strips the underscores when injecting
    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $scope = _$rootScope_.$new();
    }));

    it('should initialize with disabled upload button', function () {
        var element = $compile("<file-upload></file-upload>")($scope);
        // fire all the watches
        $scope.$digest();
        // Check that the compiled element contains the templated content
        console.log(element.html());
    });
});
