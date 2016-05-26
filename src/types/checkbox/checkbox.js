angular.module('angularFormlyBootstrapMaterial')
  .config(['formlyConfigProvider', function (formlyConfigProvider) {
    formlyConfigProvider.setType({
      name: 'checkbox',
      templateUrl: 'checkbox.html',
      wrapper: ['formGroup']
    });
  }]);
