'use strict';

describe('Directive: fileUpload', function () {

  // load the controller's module
  beforeEach(module('sbAdminApp'));

  var $compile, $rootScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$compile_, _$rootScope_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
  }));

  it('should initialize with disabled upload button', function () {
      var element = $compile("<file-upload></file-upload>")($rootScope);
      // fire all the watches
      $rootScope.$digest();
      // Check that the compiled element contains the templated content
      console.log(element.html());
  });
});
