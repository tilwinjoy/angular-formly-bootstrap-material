angular.module('angularFormlyBootstrapMaterial')
  .config(['formlyConfigProvider', function (formlyConfigProvider) {
    return formlyConfigProvider.setType({
      name: 'select',
      templateUrl: 'select.html',
      wrapper: ['formGroup'],
      defaultOptions: function defaultOptions(options) {
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        /* jshint maxlen:195 */
        var ngOptions = options.templateOptions.ngOptions || 'option[to.valueProp || "value"] as option[to.labelProp ||' + '"name"] group by option[to.groupProp || "group"] for option in to.options';
        return {
          ngModelAttrs: _defineProperty({}, ngOptions, {
            value: options.templateOptions.optionsAttr || 'ng-options'
          })
        };
      }
    });
  }]);
