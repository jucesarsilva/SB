describe('$notificationTest', function () {

    beforeEach(module('services'));

    var $notification;

    beforeEach(inject(function(_$notification_){
        $notification = _$notification_;
    }));

    describe('--> exists function', function () {
        
        it("deve existir o método 'success()' ", function () {
            expect($notification.success).toBeDefined();
		});	
        
        it("deve existir o método 'alert()' ", function () {
            expect($notification.alert).toBeDefined();
		});
        
        it("deve existir o método 'info()' ", function () {
            expect($notification.info).toBeDefined();
		});
        
        it("deve existir o método 'error()' ", function () {
            expect($notification.error).toBeDefined();
		});
        
        it("deve existir o método 'get()' ", function () {
            expect($notification.get).toBeDefined();
		});
        
        it("deve existir o método 'remove()' ", function () {
            expect($notification.remove).toBeDefined();
		});
        
        it("deve existir o método 'add()' ", function () {
            expect($notification.add).toBeDefined();
		});
        
        it("deve existir o método 'clear()' ", function () {
            expect($notification.clear).toBeDefined();
		});
        
        it("deve existir o método 'loading()' ", function () {
            expect($notification.loading).toBeDefined();
		});
        
        it("deve existir o método 'clearLoading()' ", function () {
            expect($notification.clearLoading).toBeDefined();
		});
        
        it("deve existir o método 'generateID()' ", function () {
            expect($notification.generateID).toBeDefined();
		});
	});
    
    describe('--> add/get notification function', function () {
        
        it("deve adicionar notificações a pilha", function () {
            $notification.success("notificação 1.");
            expect($notification.get().length == 1).toBeTruthy();
		});	
	});
    
    describe('--> remove notification function', function () {
        
        it("deve remover notificações a pilha", function () {
            $notification.success("notificação sucesso.");
            $notification.error("notificação erro.");
            $notification.info("notificação info.");
            $notification.alert("notificação alerta.");
            var notifications = $notification.get();
            $notification.remove(notifications[0].id);
            expect($notification.get().length == 3).toBeTruthy();
		});	
	});
    
    describe('--> generateID notification function', function () {
        
        it("deve retornar uma string", function () {
            
            expect( typeof $notification.generateID() === "string").toBeTruthy();
		});	
	});
    
    describe('--> clear notification function', function () {
        
        it("deve esvaziar a pilha de notificações", function () {
            $notification.success("notificação sucesso.");
            $notification.error("notificação erro.");
            $notification.info("notificação info.");
            $notification.alert("notificação alerta.");
            $notification.clear();
            expect($notification.get()).toEqual([]);
		});	
	});
    
});