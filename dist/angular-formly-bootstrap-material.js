angular.module('angularFormlyBootstrapMaterial', ['formly', 'angularBootstrapMaterial']);

angular.module('angularFormlyBootstrapMaterial')
  .config(['formlyConfigProvider', function (formlyConfigProvider) {
    formlyConfigProvider.setWrapper({
      name: 'formGroup',
      templateUrl: 'form-group.html'
    });
  }]);

angular.module('angularFormlyBootstrapMaterial')
  .config(['formlyConfigProvider', function (formlyConfigProvider) {
    formlyConfigProvider.setType({
      name: 'checkbox',
      templateUrl: 'checkbox.html',
      wrapper: ['formGroup']
    });
  }]);

angular.module('angularFormlyBootstrapMaterial')
  .config(['formlyConfigProvider', function (formlyConfigProvider) {
    return formlyConfigProvider.setType({
      name: 'checkboxGroup',
      templateUrl: 'checkbox-group.html',
      defaultOptions: {
        noFormControl: false,
        ngModelAttrs: {
          required: {
            attribute: '',
            bound: ''
          }
        }
      },
      controller: /* @ngInject */ ["$scope", function controller($scope) {
        var to = $scope.to;
        var opts = $scope.options;
        $scope.multiCheckbox = {
          checked: [],
          change: setModel
        };

        // initialize the checkboxes check property
        $scope.$watch('model', function modelWatcher(newModelValue) {
          var modelValue, valueProp;

          if (Object.keys(newModelValue).length) {
            modelValue = newModelValue[opts.key];

            $scope.$watch('to.options', function optionsWatcher(newOptionsValues) {
              if (newOptionsValues && Array.isArray(newOptionsValues) && Array.isArray(modelValue)) {
                valueProp = to.valueProp || 'value';
                for (var index = 0; index < newOptionsValues.length; index++) {
                  $scope.multiCheckbox.checked[index] = modelValue.indexOf(newOptionsValues[index][valueProp]) !== -1;
                }
              }
            });
          }
        }, true);

        function checkValidity(expressionValue) {
          var valid;

          if ($scope.to.required) {
            valid = angular.isArray($scope.model[opts.key]) && $scope.model[opts.key].length > 0 && expressionValue;

            $scope.fc.$setValidity('required', valid);
          }
        }

        function setModel() {
          $scope.model[opts.key] = [];
          angular.forEach($scope.multiCheckbox.checked, function (checkbox, index) {
            if (checkbox) {
              $scope.model[opts.key].push(to.options[index][to.valueProp || 'value']);
            }
          });

          // Must make sure we mark as touched because only the last checkbox due to a bug in angular.
          $scope.fc.$setTouched();
          checkValidity(true);

          if ($scope.to.onChange) {
            $scope.to.onChange();
          }
        }

        if (opts.expressionProperties && opts.expressionProperties['templateOptions.required']) {
          $scope.$watch(function () {
            return $scope.to.required;
          }, function (newValue) {
            checkValidity(newValue);
          });
        }

        if ($scope.to.required) {
          var unwatchFormControl = $scope.$watch('fc', function (newValue) {
            if (!newValue) {
              return;
            }
            checkValidity(true);
            unwatchFormControl();
          });
        }
	      }]
    })
  }]);

angular.module('angularFormlyBootstrapMaterial')
  .config(['formlyConfigProvider', function (formlyConfigProvider) {
    return formlyConfigProvider.setType({
      name: 'input',
      templateUrl: 'input.html',
      wrapper: ['formGroup']
    });
  }]);

angular.module('angularFormlyBootstrapMaterial')
  .config(['formlyConfigProvider', function (formlyConfigProvider) {
    return formlyConfigProvider.setType({
      name: 'radio',
      templateUrl: 'radio.html',
      wrapper: ['formGroup']
    });
  }]);

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

angular.module("angularFormlyBootstrapMaterial").run(["$templateCache", function($templateCache) {$templateCache.put("form-group.html","<abm-form-group ng-class=\"to.size ? \'form-group-\'+ to.size : \'\'\" error-messages=\"to.errorMessages\" error-messages-include=\"{{to.errorMessagesInclude || \'\'}}\">\n  <formly-transclude></formly-transclude>\n</abm-form-group>\n");
$templateCache.put("checkbox.html","<div class=\"checkbox\" abm-checkbox label=\"{{to.label}}\">\n  <input type=\"checkbox\" ng-model=\"model[options.key]\">\n</div>\n");
$templateCache.put("checkbox-group.html","<div class=\"checkbox\" ng-repeat=\"(key, option) in to.options\" abm-checkbox label=\"{{option[to.labelProp]}}\">\n  <input type=\"checkbox\" id=\"{{id + \'_\'+ $index}}\" ng-model=\"multiCheckbox.checked[$index]\" ng-change=\"multiCheckbox.change()\">\n</div>\n");
$templateCache.put("input.html","<label data-abm-label type=\"to.label.type\">{{to.label.text}}</label>\n<input type=\"text\" class=\"form-control\" ng-model=\"model[options.key]\" abm-form-control>\n");
$templateCache.put("radio.html","<label>{{to.label}}</label>\n<div class=\"radio-group\">\n  <div class=\"radio\" ng-repeat=\"(key, option) in to.options\" abm-radio label=\"{{option[to.labelProp || \'name\']}}\">\n    <input type=\"radio\" id=\"{{id + \'_\'+ $index}}\" ng-value=\"option[to.valueProp || \'value\']\" ng-model=\"model[options.key]\">\n  </div>\n</div>\n");
$templateCache.put("select.html","<label data-abm-label class=\"col-xs-2 control-label\">Select</label>\n<select class=\"form-control\" data-abm-form-control ng-model=\"model[options.key]\"></select>\n");}]);
