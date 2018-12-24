const app = Sammy("#main", function () {
    this.use("handlebars", "hbs");

    this.get("#/register", function () {
        this.partial("templates/register.hbs");
    });
    this.post("#/register", function (context) {
        kinveyController.register(context.params.username,context.params.pass,context.params.checkPass);
        this.redirect("#/login");
    });
    this.get("#/login", function () {
        this.partial("templates/login.hbs");
    });
    this.post("#/login", function (context) {
        kinveyController.login(context.params.username,context.params.pass);
        this.redirect("#/home");
    });
    this.get("#/home", function (context) {
        if (localStorage.getItem("authToken")!==null) {
            this.flights = kinveyController.getFlights();
            this.partial("templates/catalog.hbs");
        } else {
            this.partial("index.html");
        }
    });
    this.get("#/addFlight", function () {
        this.partial("templates/addFlight.hbs");
    });
    this.post("#/addFlight", function (context) {
        kinveyController.createFlight(context.params.destination, context.params.origin, [context.params.departureDate,
            context.params.departureTime], context.params.seats, context.params.cost, context.params.img, context.params.public);
        this.redirect("#/home");
    })
});
$(()=>{
    userLoggedOut();
    app.run();
});