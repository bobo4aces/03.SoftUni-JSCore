$(() => {
    const app = Sammy('#main', function () {
        // TODO: Define all the routes
        this.use("Handlebars", "hbs");

        this.get("#/about", function () {
            this.loadPartials({
                header: "templates/common/header.hbs",
                footer: "templates/common/footer.hbs"
            }).then(function (context) {
                this.partial("templates/about/about.hbs");
            });

        });
        this.get("#/details", function () {
            this.partial("templates/catalog/details.hbs");
        });
        this.get("#/team", function () {
            this.partial("templates/catalog/team.hbs");
        });
        this.get("#/teamCatalog", function () {
            this.partial("templates/catalog/teamCatalog.hbs");
        });
        this.get("#/teamControls", function () {
            this.partial("templates/catalog/teamControls.hbs");
        });
        this.get("#/teamMember", function () {
            this.partial("templates/catalog/teamMember.hbs");
        });
        this.get("#/createForm", function () {
            this.partial("templates/create/createForm.hbs");
        });
        this.get("#/createPage", function () {
            this.partial("templates/create/createPage.hbs");
        });
        this.get("#/editForm", function () {
            this.partial("templates/edit/editForm.hbs");
        });
        this.get("#/editPage", function () {
            this.partial("templates/edit/editPage.hbs");
        });
        this.get("#/home", function () {
            this.loadPartials({
                header: "templates/common/header.hbs",
                footer: "templates/common/footer.hbs"
            }).then(function (context) {
                this.partial("templates/home/home.hbs");
            });
        });
        this.get("#/login", function () {
            this.loadPartials({
                header: "templates/common/header.hbs",
                loginForm: "templates/login/loginForm.hbs",
                footer: "templates/common/footer.hbs"
            }).then(function (context) {
                this.partial("templates/login/loginPage.hbs");
            });
        });
        //this.post("#/login", function () {
        //    this.loadPartials({
        //        header: "templates/common/header.hbs",
        //        loginForm: "templates/login/loginForm.hbs",
        //        footer: "templates/common/footer.hbs"
        //    }).then(function (context) {
        //        this.partial("templates/login/loginPage.hbs");
        //    });
        //});
        this.get("#/register", function () {
            this.loadPartials({
                header: "templates/common/header.hbs",
                registerForm: "templates/register/registerForm.hbs",
                footer: "templates/common/footer.hbs"
            }).then(function (context) {
                this.partial("templates/register/registerPage.hbs");
            });
        });
        this.post("#/register", function (context) {
            auth.register(context.params.username,context.params.password,context.params.repeatPassword);
            this.redirect("#/login");
        });
    });

    app.run();
});