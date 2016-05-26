angular.module('angularFormlyBootstrapMaterial')
  .config(['formlyConfigProvider', function (formlyConfigProvider) {
    return formlyConfigProvider.setType({
      name: 'input',
      templateUrl: 'input.html',
      wrapper: ['formGroup']
    });
  }]);
