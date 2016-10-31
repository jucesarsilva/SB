/**
 * Notificações do sistema
 * @namespace Directive
 * 
 * @author  Julio Cesar da Silva
 * @version 1.0
 * @since   06-05-2016 
 */
(function (angular, $) {

    'use strict';

    angular.module('services')
        .directive('notifications', Notifications)
        .directive('autoClose', AutoClose)
        .controller('NotificationsController', NotificationsController);
    
    Notifications.$inject = ['$notification'];
    AutoClose.$inject = ['$timeout'];
    NotificationsController.$inject = ['$scope', '$notification'];
    
    /**
     * @namespace Notifications
     * @desc Sistema de mensagens
     * @memberOf Directive
     */
    function Notifications ($notification) {
        
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

        return {
            restrict: 'E',
            scope: {},
            controller:'NotificationsController',
            controllerAs:'NotificationsController',
            bindToController:true,
            template: template,
            replace: true,
            link: function ( $scope, elem, attrs ) { }
        };
    };

    /**
     * @namespace AutoClose
     * @desc Fechar o sistema de mensagens
     * @memberOf Directive
     */
    function AutoClose ($timeout) {

        var increase = 100;
        var delay = 8000;

        return {
            restrict: 'A',
            require: '^notifications',
            link: function ($scope, elem, attrs, Notifications) {

                delay += increase;
                Notifications = $scope.$parent;
                attrs.$observe("autoClose", function (autoClose) {

                    if (autoClose) {

                        $timeout(function () {

                            $(elem).fadeTo(500, 0).slideUp(500, function () {

                                // Remove
                                delay += -increase;
                                var id = $(elem).data('index');
                                Notifications.remove(id);
                            });
                        }, delay);
                    }
                });
            }
        };
    };
    
    /**
     * @namespace NotificationsController
     * @desc Sistema de mensagens
     * @memberOf Directive
     */
    function NotificationsController($scope, $notification) {
        
        // Obtem-se a lista de notificações do service
        $scope.notifications = $notification.get();

        $scope.$watch('notifications', function () {
            $scope.notifications = $notification.get();
        });

        // Remove uma notificação
        $scope.remove = function (id) {
            $notification.remove(id);
        };
    };

})(angular, jQuery);