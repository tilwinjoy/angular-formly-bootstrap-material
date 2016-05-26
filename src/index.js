angular.module('angularFormlyBootstrapMaterial', ['formly', 'angularBootstrapMaterial'])
  .controller('testCtrl', function($scope) {
    $scope.model = {};
    $scope.errors = {
      required: 'this field is mandatory!'
    };
    $scope.fields = [{
      type: 'input',
      key: 'name',
      defaultValue: 'test',
      templateOptions: {
        required: true,
        label: {
          text: 'name',
          type: 'floating'
        },
        size: 'lg',
        placeholder: 'something',
        errorMessages: $scope.errors
      }
    }]
  })
  .run(function(formlyConfig, wrappers, input) {
    formlyConfig.setWrapper(wrappers);
    formlyConfig.setType(input);
  });
