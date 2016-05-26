angular.module('angularFormlyBootstrapMaterial')
  .config(['formlyConfigProvider', function (formlyConfigProvider) {
    formlyConfigProvider.setWrapper({
      name: 'formGroup',
      templateUrl: 'form-group.html'
    });
  }]);
