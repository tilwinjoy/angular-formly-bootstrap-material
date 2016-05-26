angular.module('angularFormlyBootstrapMaterial')
  .factory('checkbox', function() {
    return {
      name: 'checkbox',
      templateUrl: 'src/types/checkbox/checkbox.html',
      wrapper: ['formGroup']
    }
  });
