/**
 * function Diretiva para dialog (modal)
 * 
 * @author  Julio Cesar da Silva
 * @version 1.0
 * @since   07-05-2016 
 */
(function (angular, $) {

    'use strict';

    angular
        .module('directives')
        .directive('alertMsg', alertMsg)
        .controller('AlertMsgController', AlertMsgController);
    
    alertMsg.$inject = [];
    AlertMsgController.$inject = ['$scope'];
    
    function AlertMsgController(scope) {
        
        scope.init = function __init(element, attrs){
            
            if (scope.method) {
                element.on('shown.bs.modal', function (e) {
                    scope.method();
                });
            }

            scope.dialogStyle = {};

            if (attrs.width)
                scope.dialogStyle.width = attrs.width;

            if (attrs.height)
                scope.dialogStyle.height = attrs.height;
        };
    };
    
    function alertMsg() {
        
        var _template = '<div class="modal fade" data-backdrop="static">' +
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

        var _directive = {
            restrict: 'EA',
            controller:'AlertMsgController',
            controllerAs:'AlertMsgController',
            scope: {
                modalTitle: '@',
                method: '&onComplete',
                closeActive:"@"
            },
            replace: true,
            transclude: true,
            link: _link,
            template: _template
        };

        function _link(scope, element, attrs) {
            scope.init(element, attrs);  
        }

        return _directive;
    }    
})(angular, jQuery);