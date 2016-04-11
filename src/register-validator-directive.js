(function() {
  'use strict';

  angular
    .module('myApp', []);
})();

(function() {
  'use strict';

  angular
    .module('myApp')
    .controller('Ctrl', Ctrl);

  Ctrl.$inject = [];

  function Ctrl() {

  }
})();

(function() {
  'use strict';
  angular
    .module('myApp')
    .directive('registerValidator', registerValidator);

  registerValidator.$inject = [];


  function registerValidator() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function(viewValue) {
        var classPwdSuccess = 'text-success fa fa-check-circle';
        var classPwdFail = 'text-danger fa fa-exclamation-circle';
          scope.selected = true;
          scope.lengthValidator = (viewValue && viewValue.length >= 8 ? classPwdSuccess : classPwdFail);
          scope.uppercaseValidator = (viewValue && /[A-Z]/.test(viewValue)) ? classPwdSuccess : classPwdFail;
          scope.lowercaseValidator = (viewValue && /[a-z]/.test(viewValue)) ? classPwdSuccess : classPwdFail;
          scope.numberValidator = (viewValue && /\d/.test(viewValue)) ? classPwdSuccess : classPwdFail;
          scope.spacesValidator = (viewValue && /^(?!\s)([a-zA-Z0-9 _.'"()!?&@]){1,}(?!\s)$/.test(viewValue)) ? classPwdSuccess : classPwdFail;

          if (scope.lengthValidator &&
            scope.uppercaseValidator &&
            scope.lowercaseValidator &&
            scope.numberValidator &&
            scope.spacesValidator) {
            ctrl.$setValidity('pwd', true);
            if (scope.lengthValidator == classPwdSuccess &&
              scope.uppercaseValidator == classPwdSuccess &&
              scope.lowercaseValidator == classPwdSuccess &&
              scope.numberValidator == classPwdSuccess &&
              scope.spacesValidator == classPwdSuccess) {
              scope.selected = false;
            }
            return viewValue;
          } else {
            ctrl.$setValidity('pwd', false);
            return undefined;
          }
        });
      }
    };
  }
})();
