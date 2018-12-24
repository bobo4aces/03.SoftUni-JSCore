$(() => {
    const app = Sammy("#welcome-section", function () {
        this.use("Handlebars", "hbs");


        this.get("#/login", function (context) {
            this.redirect("#/home");
        });
        this.post("#/login", function (context) {
            controller.loginUser(context.params["username-login"],context.params["password-login"]);
            this.redirect("#/home");
        });
        this.post("#/register", function (context) {
            console.log(context.params["username-register"]);
            console.log(context.params["password-register"]);
            console.log(context.params["password-register-check"]);
            console.log(context);
            controller.registerUser(context.params["username-register"],context.params["password-register"],
                context.params["password-register-check"]);
            showSuccess("Registration Successful.");
        });
        this.get("#/logout",function () {
            controller.logoutUser();
            this.redirect("");
        });
        this.get("#/home", function () {
            let username = sessionStorage.getItem("username");
            this.username = {username: username};
            this.loadPartials({
                username: './templates/partials/header.hbs',
            }).then(function(context) {
                this.partial('./templates/create.hbs');
            });
        });
        this.get("#/overview",function () {
            let receipts = controller.getMyReceipt();
            this.receipts = receipts;
            this.partial("templates/all.hbs");

        });
        this.post("#/overview",function () {
            controller.getMyReceipt();
        });
    });
    app.run();
});