angular.module('angularFormlyBootstrapMaterial')
  .config(['formlyConfigProvider', function (formlyConfigProvider) {
    return formlyConfigProvider.setType({
      name: 'radio',
      templateUrl: 'radio.html',
      wrapper: ['formGroup']
    });
  }]);
