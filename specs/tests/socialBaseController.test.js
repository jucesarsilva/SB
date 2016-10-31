describe('SocialBaseControllerTest', function () {

    beforeEach(module('services', 'directives', 'SocialBaseApp'));

    var $document, $controller, $notification, $compile, $rootScope;

    beforeEach(inject(function(_$document_, _$rootScope_, _$controller_, _$notification_, _$compile_){
        $rootScope = _$rootScope_;
        $controller = _$controller_;
        $notification = _$notification_;
        $compile = _$compile_;
    }));

    /******************* bloco de teste para verificação se funções são definidas ***********************/
    describe('--> exists function', function () {
        
        it("deve existir o método 'init()' ", function () {
			var $scope = $rootScope.$new();
			var controller = $controller('SocialBaseController', { $scope: $scope });
            expect($scope.init).toBeDefined();
		});	
        
        it("deve existir o método 'remove()' ", function () {
			var $scope = $rootScope.$new();
			var controller = $controller('SocialBaseController', { $scope: $scope });
            expect($scope.remove).toBeDefined();
		});	
        
        it("deve existir o método 'confirmRemove()' ", function () {
			var $scope = $rootScope.$new();
			var controller = $controller('SocialBaseController', { $scope: $scope });
            expect($scope.confirmRemove).toBeDefined();
		});	
        
        it("deve existir o método 'create()' ", function () {
			var $scope = $rootScope.$new();
			var controller = $controller('SocialBaseController', { $scope: $scope });
            expect($scope.create).toBeDefined();
		});	
        
        it("deve existir o método 'save()' ", function () {
			var $scope = $rootScope.$new();
			var controller = $controller('SocialBaseController', { $scope: $scope });
            expect($scope.save).toBeDefined();
		});	
        
        it("deve existir o método 'update()' ", function () {
			var $scope = $rootScope.$new();
			var controller = $controller('SocialBaseController', { $scope: $scope });
            expect($scope.update).toBeDefined();
		});	
	});
    
    /******************** teste para comportamento da função init ***************************/
    describe("--> init() called", function () {
        
        it("deve chamar o método 'create()' ", function () {
            var $scope = $rootScope.$new();
            var controller = $controller('SocialBaseController', { $scope: $scope });
            spyOn($scope, "create");
            $scope.init();
            expect($scope.create).toHaveBeenCalled();
        });	
        
        it(" 'currentIndex' deve ser undefined ", function () {
            var $scope = $rootScope.$new();
            var controller = $controller('SocialBaseController', { $scope: $scope });
            $scope.init();
            expect($scope.currentIndex).not.toBeDefined();
        });	
        
        it(" 'nodes' deve ser array vazio ", function () {
            var $scope = $rootScope.$new();
            var controller = $controller('SocialBaseController', { $scope: $scope });
            $scope.init();
            expect($scope.nodes).toBeDefined();
            expect($scope.nodes instanceof Array).toBe(true);
            expect($scope.nodes.length === 0).toBe(true);
        });	

	});
    
    /******************** teste para comportamento da função init ***************************/
    describe("--> create() called", function () {
        
        it(" 'node' deve existir", function () {
            var $scope = $rootScope.$new();
            var controller = $controller('SocialBaseController', { $scope: $scope });
            $scope.create();
            expect($scope.node).toBeDefined();
        });
        
        it(" 'description' em 'node' deve ter length zero", function () {
            var $scope = $rootScope.$new();
            var controller = $controller('SocialBaseController', { $scope: $scope });
            $scope.create();
            expect($scope.node.description.length == 0).toBeTruthy();
        });
        
        it(" 'Id' em 'node' deve ser zero", function () {
            var $scope = $rootScope.$new();
            var controller = $controller('SocialBaseController', { $scope: $scope });
            $scope.create();
            expect($scope.node.Id == 0).toBeTruthy();
        });	
        
        it(" 'active' em 'node' deve ser true", function () {
            var $scope = $rootScope.$new();
            var controller = $controller('SocialBaseController', { $scope: $scope });
            $scope.create();
            expect($scope.node.active).toBeTruthy();
        });	
    });
    
    /******************** teste para comportamento da função update ***************************/
    describe('--> update() called', function () {
        
        it("deve copiar o objeto 'node' para variavel '$scope.node' ", function () {
			var $scope = $rootScope.$new();
			var controller = $controller('SocialBaseController', { $scope: $scope });
             var node = {
                Id: 1,
                description: "save 1.",
                active: true
            };
            $scope.update(node, 1);
            expect($scope.currentIndex == 1).toBeTruthy();
            expect($scope.node).toEqual(node);
		});	
	});
    
    /******************** teste para comportamento da função save ***************************/
    describe("--> save() called", function () {
        
        it("paramêtro -> $form.$valid == false, o deve chamar service de notificação e informar erregularidades no formulário.", function () {
            var $scope = $rootScope.$new();
            var controller = $controller('SocialBaseController', { $scope: $scope });
            var $form = {$valid: false};
            spyOn($notification, "alert");
            $scope.save($form);
            expect($notification.alert).toHaveBeenCalled();
        });	
        
        it("'currentIndex' == undefinid deve seguir a rotina de save", function () {
            var $scope = $rootScope.$new();
            var controller = $controller('SocialBaseController', { $scope: $scope });
            $scope.nodes = [];
            $scope.node = {
                Id: 0,
                description: "teste de save.",
                active: true
            };
            $scope.nodeForm = {
                $valid: true,
                $setPristine: function(value){ 
                    $scope.nodeForm.$valid = value;
                }
            };
            spyOn($scope, "create");
            $scope.save($scope.nodeForm);
            expect($scope.nodes).toEqual([$scope.node]);
            expect($scope.create).toHaveBeenCalled();
        });	
        
        it("'currentIndex' == 1 deve seguir a rotina de update", function () {
            var $scope = $rootScope.$new();
            var controller = $controller('SocialBaseController', { $scope: $scope });
            $scope.nodes = [{
                    Id: 1,
                    description: "save 1.",
                    active: true
                },
                {
                    Id: 2,
                    description: "save 2.",
                    active: true
                }           
            ];
            $scope.node = $scope.nodes[1];
            $scope.node.description = "save 1 atualizado";
            $scope.currentIndex=1;
            $scope.nodeForm = {
                $valid: true,
                $setPristine: function(value){ 
                    $scope.nodeForm.$valid = value;
                }
            };
            spyOn($scope, "create");
            $scope.save($scope.nodeForm);
            expect($scope.nodes[1].Id == 2).toBeTruthy();
            expect($scope.nodes[1].description).toBe("save 1 atualizado");
            expect($scope.create).toHaveBeenCalled();
        });	
    });
    
    /******************** teste para comportamento da função confirmRemove ***************************/
    describe('--> confirmRemove() called', function () {
        
        it("deve atualizar a variavel $scope.currentIndex ", function () {
			var $scope = $rootScope.$new();
			var controller = $controller('SocialBaseController', { $scope: $scope }); 
            $scope.confirmRemove(1);
            expect($scope.currentIndex == 1).toBeTruthy();
		});	
	});
    
    /******************** teste para comportamento da função closeDeleteModal ***************************/
    describe('--> closeDeleteModal() called', function () {
        
        it("deve atualizar a variavel $scope.currentIndex ", function () {
			var $scope = $rootScope.$new();
			var controller = $controller('SocialBaseController', { $scope: $scope }); 
            $scope.closeDeleteModal();
            expect($scope.currentIndex).not.toBeDefined();
		});	
	});
    
    /******************** teste para comportamento da função confirmRemove ***************************/
    describe('--> remove() called', function () {
        
        it("deve remover o elemento ", function () {
			var $scope = $rootScope.$new();
			var controller = $controller('SocialBaseController', { $scope: $scope }); 
            $scope.nodes = [{
                    Id: 1,
                    description: "save 1.",
                    active: true
                },
                {
                    Id: 2,
                    description: "save 2.",
                    active: true
                }           
            ];
            $scope.currentIndex=1;
            spyOn($notification, "success");
            $scope.remove();
            expect($scope.currentIndex).not.toBeDefined();
            expect($scope.nodes.length == 1).toBeTruthy();
            expect($notification.success).toHaveBeenCalled();
		});	
	});
});