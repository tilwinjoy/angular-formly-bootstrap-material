angular.module('angularFormlyBootstrapMaterial')
  .factory('input', function() {
    return {
      name: 'input',
      templateUrl: 'src/types/input/input.html',
      wrapper: ['formGroup']
    }
  });
