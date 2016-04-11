describe('registerValidator', function() {
    var defaultTemplate = '<register-validator></register-validator>';
    var $compile;
    var elem;
    var $scope;
    var $controller;

    beforeEach(module('myApp'));
    // beforeEach(module('modules/views/login/templates/login-register.html'));

    beforeEach(function() {
        inject(function(_$compile_, _$rootScope_) {
            $compile = _$compile_;
            $scope = _$rootScope_.$new();
            elem = compileDirective(defaultTemplate, $scope);
            _$rootScope_.$digest();
        });
    });

    function compileDirective(template, scope) {
        var elm = angular.element('<input ng-model="vm.registerPassword" register-validator>');
        $compile(elm)(scope);
        scope.$apply();
        return elm;
    }

    it('should create directive correctly', function() {
        $scope.$digest();
        expect(elem.length).to.equal(1);
    });

    it('should have 8 characters', function() {
        var str = 'Pickle@15';
        expect(str).to.have.length.of.at.least(8);
    });

    it('should have at least 1 number', function() {
        var str = 'Pickle@15';
        expect(str).to.match(/\d/);
    });

    it('should have at least 1 upperCaseLetter', function() {
        var str = 'Pickle@15';
        expect(str).to.match(/[A-Z]/);
    });

    it('should have at least 1 lowerCaseLetter', function() {
        var str = 'Pickle@15';
        expect(str).to.match(/[a-z]/);
    });

    it('should have not have leading and trailing spaces', function() {
        var str = 'Pickle@15';
        expect(str).to.match(/^(?!\s)([a-zA-Z0-9 _.'"()!?&@]){1,}(?!\s)$/);
    });
});
