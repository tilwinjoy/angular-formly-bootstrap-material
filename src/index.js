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
    }, {
      type: 'checkbox',
      key: 'notify',
      templateOptions: {
        required: true,
        label: 'Notify',
        size: 'sm',
        errorMessages: $scope.errors
      },
      defaultValue: true,
    }]
  })
  .run(function(formlyConfig, wrappers, input, checkbox) {
    formlyConfig.setWrapper(wrappers);
    formlyConfig.setType(input);
    formlyConfig.setType(checkbox);
  });
