'use strict';

describe('Directive: fileUpload', function () {

    var $compile, $scope, element;

    // load the controller's module
    beforeEach(function() {
        module('tpl');
        module('sbAdminApp');
    });

    // Angular strips the underscores when injecting
    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $scope = _$rootScope_.$new();
        element = $compile("<file-upload></file-upload>")($scope);
        $scope.$digest();
    }));

    it('should initialize with disabled upload button', function () {
        expect(element.find('button')).not.toBeVisible();
    });

    it('should initialize with disabled upload button', function () {
        element.find('button').triggerHandler('click');
        expect(element.find('button')).not.toBeVisible();
    });
});
