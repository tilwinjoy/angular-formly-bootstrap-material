angular.module('angularFormlyBootstrapMaterial')
  .factory('select', function() {
    return {
      name: 'select',
      templateUrl: 'src/types/select/select.html',
      wrapper: ['formGroup'],
      defaultOptions(options) {
        var ngOptions = options.templateOptions.ngOptions || `option[to.valueProp || 'value'] as option[to.labelProp || 'name'] group by option[to.groupProp || 'group'] for option in to.options`;
        return {
          ngModelAttrs: {
            [ngOptions]: {
              value: options.templateOptions.optionsAttr || 'ng-options'
            }
          }
        };
      }
    }
  });
