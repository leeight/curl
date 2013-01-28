curl(["er/Action", "er/controller", "er/locator", "template!jn/hello_app.tpl.html"],
function(A, controller, locator, template){
function HelloApp() {
    A.Action.call(this);
    this.view = 'VIEW_hello_app';
}
baidu.inherits(HelloApp, A.Action);

var hello_app = {
    config: {
        action: [
            {
                location: '/jn/hello_app',
                action: HelloApp
            },
        ]
    }
}
controller.addModule(hello_app);
controller.init();

locator.redirect('/jn/hello_app');
});