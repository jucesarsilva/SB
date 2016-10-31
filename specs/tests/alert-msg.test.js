describe('AlertMsgTest', function () {

    beforeEach(module('directives'));

    var $rootScope, $controller, $compile;

    var template = '<div class="modal fade" data-backdrop="static">' +
                            '<div class="modal-dialog" ng-style="dialogStyle">' +
                                '<div class="modal-content">' +
                                    '<div class="modal-header">' +
                                        '<button ng-if="closeActive==true" type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                                        '<h4 class="modal-title" ng-bind-html="modalTitle"></h4>' +
                                    '</div>' +
                                    '<div class="modal-body">' +
                                        '<div ng-transclude></div>' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                        '</div>';
    
    beforeEach(inject(function(_$controller_, _$rootScope_, _$compile_){
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        $compile = _$compile_;
    }));

    
    describe('--> exists', function () {
        
        it("deve existir o método 'init()' ", function () {
            var $scope = $rootScope.$new();
            var element = $compile('<alert-msg></<alert-msg>')($scope);
            var controller = $controller('AlertMsgController', { $scope: $scope });
            expect($scope.init).toBeDefined();
		});	
	});
    
});