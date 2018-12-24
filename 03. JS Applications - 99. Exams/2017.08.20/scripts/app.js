const handlers = {};

$(() => {
    const app = Sammy("#container", function () {
        this.use("Handlebars", "hbs");

        this.get("index.html", handlers.getWelcomePage);
        this.get("#/home", handlers.getWelcomePage);

        this.post("#/register", handlers.registerUser);
        this.post("#/login", handlers.loginUser);
        this.get("#/logout", handlers.logout);

        this.get("#/catalog", handlers.getAllPosts);

        this.get("#/submit", handlers.getSubmitPage);
        this.post("#/submit", handlers.submitPost);
    });
    app.run();
});