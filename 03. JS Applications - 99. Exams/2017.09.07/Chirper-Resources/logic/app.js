$(() => {
    const app = Sammy("#main", function () {
        this.use("Handlebars", "hbs");

        this.get("skeleton.html", function (context) {
            this.loadPartials({
                header: "./common/header.hbs",
                formLogin: "./forms/formLogin.hbs",
                footer: "./common/footer.hbs"
            }).then(function(){
                this.partial("./views/viewLogin.hbs")
            });
        });
        this.get("#/register", function () {
            this.loadPartials({
                header: "./common/header.hbs",
                formRegister: "./forms/formRegister.hbs",
                footer: "./common/footer.hbs"
            }).then(function(){
                this.partial("./views/viewRegister.hbs")
            });
        });
        this.post("#/register", function (context) {
            controller.register(context.params.username, context.params.password, []);
            this.redirect("#/feed");
        });
        this.get("#/feed", function (context) {
            this.loadPartials({
                header: "./common/header.hbs",
                navigation: "./common/navigation.hbs",
                formSubmitChirp: "./forms/formSubmitChirp.hbs",
                userStats: "./partials/userStats.hbs",
                articles: "./partials/articles.hbs",
                footer: "./common/footer.hbs"
            }).then(function (context) {
                let chirpsCount = controller.countChirps();
                let followingCount = controller.countFollowing();
                let followersCount = controller.countFollowers();

                this.partial("./views/viewFeed.hbs")

            });
        });
        //this.get("#/logout", function (context) {
        //    controller.logout();
        //    this.redirect("index.html");
        //});
    app.run();
    });
});