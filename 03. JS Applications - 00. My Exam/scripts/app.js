const handlers = {};

$(() => {
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');

        this.get('index.html', handlers.getWelcomePage);
        this.get('#/home', handlers.getWelcomePage);

        this.get('#/register', handlers.getRegisterForm);
        this.post('#/register', handlers.registerUser);
        this.get('#/login', handlers.getLoginForm);
        this.post('#/login', handlers.loginUser);
        this.get('#/logout', handlers.logout);

        this.get('#/catalog', handlers.getAllCars);

        this.get('#/create', handlers.getCreateForm);
        this.post('#/create', handlers.createListing);
        this.get('#/edit/:id', handlers.getEditForm);
        this.post('#/edit/:id', handlers.editListing);
        this.get('#/delete/:id', handlers.deleteListing);
        this.get('#/myListings', handlers.myCarListings);
        this.get('#/details/:id', handlers.getMyCarDetails);
    });

    app.run();
});