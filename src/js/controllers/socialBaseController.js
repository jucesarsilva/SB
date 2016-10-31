/**
 * @function Controller TODO list
 * 
 * @author  Julio Cesar da Silva
 * @version 1.0
 * @since   06-05-2016 
 */
(function (angular, $) {

    'use strict';

    //~SETTER (overwrite) modules into app.js
    angular
        .module('SocialBaseApp', ['services', 'directives']);

    //~GETTER
    angular
        .module('SocialBaseApp')
        .controller('SocialBaseController', SocialBaseController)
        .config(Config);
       
    Config.$inject= [];
    SocialBaseController.$inject = ['$scope', '$notification'];    
            
    /**
     * @function Configuracao de controller
     * @name Config
     * @memberOf Provider
     * @param
     */
    function Config( ){
        
    };
    
    /**
     * @function Controller TODO list
     * @name SocialBaseController
     * @memberOf Controller
     * @param {Object} $scope
     * @param {Object} $notification
     */
    function SocialBaseController($scope, $notification){
         
        /**
         * @function Create
         * @param
         * @returns
         */
        $scope.create = function __create(){

             $scope.node = {
                Id: 0,
                description: "",
                active: true
            };
        };
        
         /**
          * @function Salvar
          * @param {Object} $form 
          * @returns
          */
        $scope.save = function __save($form){
          
            if($form.$valid){
                
                if($scope.currentIndex !== undefined) {
                    $scope.nodes[$scope.currentIndex] = angular.copy($scope.node);
                    $scope.currentIndex = undefined;
                }
                else {
                    if($scope.nodes.length !== 0)
                        $scope.node.Id =   $scope.nodes[0].Id + 1;
                    else
                        $scope.node.Id = $scope.nodes.length + 1;
                    $scope.nodes.unshift(angular.copy($scope.node));
                }
                $scope.create();
                $scope.nodeForm.$setPristine(true);
            }
            else{
                $notification.alert("O formulário possúi irregularidades!");
            }
        };
        
        /**
         * @function Atualizar
         * @param {Object} node 
         * @param {int} $indexNode 
         * @returns
         */
        $scope.update = function __update(node, $indexNode){
          
            $scope.node = angular.copy(node);
            $scope.currentIndex = $indexNode;
            
        };
        
        /**
         * @function Confirmar Delete
         * @param {int} $indexNode 
         * @returns
         */
        $scope.confirmRemove = function __confirmRemove($indexNode){
          
            $scope.currentIndex = $indexNode;
            if($('#deleteModal').modal !== undefined)
                $('#deleteModal').modal({backdrop:'static'});
        };

        /**
         * @function Fechar Modal
         * @param
         * @returns
         */
        $scope.closeDeleteModal = function __closeDeleteModal(){
          
            $scope.currentIndex = undefined;
            if($('#deleteModal').modal !== undefined)
                $('#deleteModal').modal('hide');
        };
        
        /**
         * @function Delete
         * @param 
         * @returns
         */
        $scope.remove = function __update(){
          
            $scope.selected = undefined;
            $scope.nodes.splice($scope.currentIndex, 1);
            $scope.currentIndex = undefined;
            $notification.success("Item removido com sucesso!");
        };
        
        /**
         * @function Inicializar
         * @param
         * @returns
         */
        $scope.init = function __init(){
            
            $scope.nodes = [];
            $scope.currentIndex = undefined;
            $scope.create();
        };
    }; 
   
})(angular, jQuery);