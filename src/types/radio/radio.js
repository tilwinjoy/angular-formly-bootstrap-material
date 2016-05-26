angular.module('angularFormlyBootstrapMaterial')
  .factory('radio', function() {
    return {
      name: 'radio',
      templateUrl: 'src/types/radio/radio.html',
      wrapper: ['formGroup']
    }
  });
