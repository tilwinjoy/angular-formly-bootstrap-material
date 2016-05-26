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
    }, {
      type: 'radio',
      key: 'premium',
      templateOptions: {
        required: true,
        label: "Payment",
        options: [{
          name: "Credit",
          value: "credit"
        }, {
          name: "Net Banking",
          value: "net"
        }],
        errorMessages: $scope.errors
      }
    }, {
      type: "select",
      key: "frequency",
      templateOptions: {
        required: true,
        label: "Notification frequency",
        valueProp: "name",
        options: [{
          name: "Daily"
        }, {
          name: "Weekly"
        }, {
          name: "Monthly"
        }],
        errorMessages: $scope.errors
      }
    }, {
      type: 'checkboxGroup',
      key: 'roles',
      templateOptions: {
        label: 'Roles',
        options: [{
          id: 1,
          title: "Administrator"
        }, {
          id: 2,
          title: "User"
        }],
        valueProp: 'id',
        labelProp: 'title'
      }
    }]
  })
  .run(function(formlyConfig, wrappers, input, checkbox, radio, select, checkboxGroup) {
    formlyConfig.setWrapper(wrappers);
    formlyConfig.setType(input);
    formlyConfig.setType(checkbox);
    formlyConfig.setType(radio);
    formlyConfig.setType(select);
    formlyConfig.setType(checkboxGroup);
  });
