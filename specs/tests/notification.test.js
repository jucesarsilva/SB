describe('NotificationsTest', function () {

    beforeEach(module('services','directives'));

    var $rootScope, $controller, $notification, $compile;

    var template = '<div id="customAlert-container" class="customAlert-top-full-width" aria-live="polite" role="alert">'+
            '<div ng-class="[\'customAlert\', \'customAlert-\'+notification.type]" ng-repeat="notification in notifications"' +
                'auto-close="{{notification.autoClose}}" data-index="{{notification.id}}" data-delay="{{notification.delay}}">' +
                '<button id="alert-msg-close" class="close" ng-click="remove(notification.id)" ng-show="notification.closeable">&times;</button>' +
                '<div>' +
                    '<div class="toast-title">{{notification.title}}</div>' +
                    '<div class="toast-message">{{notification.message}}</div>' +
                '</div>' +
            '</div>' +
        '</div>';
    
    beforeEach(inject(function(_$notification_, _$controller_, _$rootScope_, _$compile_){
        $notification = _$notification_;
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        $compile = _$compile_;
    }));

    describe('--> exists', function () {
        
        it("deve existir o método 'remove()' ", function () {
            var $scope = $rootScope.$new();
            var element = $compile('<notifications></notifications>')($scope);
            var controller = $controller('NotificationsController', { $scope: $scope });
            expect($scope.remove).toBeDefined();
		});	
        
        it("deve existir armazenador", function () {
            var $scope = $rootScope.$new();
            var element = $compile('<notifications></notifications>')($scope);
            var controller = $controller('NotificationsController', { $scope: $scope });
            expect($scope.notifications).toBeDefined();
		});	
	});
    
    
     describe('--> notifications variable', function () {
        
        it("notifications deve ser vazio", function () {
            var $scope = $rootScope.$new();
            var element = $compile('<notifications></notifications>')($scope);
            var controller = $controller('NotificationsController', { $scope: $scope });
            expect($scope.notifications.length == 0).toBeTruthy();
		});	
	});

});