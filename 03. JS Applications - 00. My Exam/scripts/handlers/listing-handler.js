handlers.getAllCars = function (ctx) {
    ctx.username = sessionStorage.getItem("username");
    listing.listAllCars().then((allCars) => {
        ctx.allCars = allCars;
        ctx.loadPartials({
            nav: './templates/common/nav.hbs',
            listing: './templates/listings/listing.hbs',
            footer: './templates/common/footer.hbs'
        }).then(function () {
            this.partial('./templates/listings/car-listings.hbs');
        })
    }).catch(notify.handleError);
};
handlers.getCreateForm = function (ctx) {
    ctx.username = sessionStorage.getItem("username");
    ctx.loadPartials({
        nav: './templates/common/nav.hbs',
        createForm: './templates/forms/create-form.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function () {
        this.partial('./templates/listings/create-listing.hbs');
    }).catch(notify.handleError);
};
handlers.createListing = function (ctx) {
    const title = ctx.params.title;
    const description = ctx.params.description;
    const brand = ctx.params.brand;
    const model = ctx.params.model;
    const year = ctx.params.year;
    const imageUrl = ctx.params.imageUrl;
    const fuel = ctx.params.fuelType;
    const price = ctx.params.price;
    const seller = sessionStorage.getItem("username");
    const isAuthor = sessionStorage.getItem("userId") === seller;

    if (title.length > 33) {
        notify.showError("Title must not exceed 33 characters!");
    } else if (description.length > 450) {
        notify.showError("Description must not exceed 450 characters!");
    } else if (description.length < 30) {
        notify.showError("Description should be at least 30 characters!");
    } else if (brand.length > 11) {
        notify.showError("Brand must not exceed 11 characters!");
    } else if (fuel.length > 11) {
        notify.showError("Fuel Type must not exceed 11 characters!");
    } else if (model.length > 11) {
        notify.showError("Model must not exceed 11 characters!");
    } else if (model.length < 4) {
        notify.showError("Model should be at least 4 characters!");
    } else if (year.length !== 4) {
        notify.showError("Year must be only 4 chars long!");
    } else if (Number.isNaN(price)) {
        notify.showError("Price must be a number!");
    } else if (Number(price) > 1000000) {
        notify.showError("The maximum price is 1000000$");
    } else if (imageUrl.slice(0,4) !== "http") {
        notify.showError("Link url should always start with http");
    } else {
        listing.createCarListing(brand, description, fuel, imageUrl, isAuthor, model, price, seller, title, year)
            .then(function () {
                notify.showInfo("listing created.");
                ctx.redirect("#/catalog");
            }).catch(notify.handleError);
    }
};
handlers.getEditForm = function (ctx) {
    ctx.username = sessionStorage.getItem("username");
    const id = ctx.params.id;
    listing.getListingById(id)
        .then((listing) => {
            console.log(listing);
            ctx.title = listing.title;
            ctx.carId = listing._id;
            ctx.title = listing.title;
            ctx.description = listing.description;
            ctx.brand = listing.brand;
            ctx.model = listing.model;
            ctx.year = listing.year;
            ctx.imageUrl = listing.imageUrl;
            ctx.fuelType = listing.fuel;
            ctx.price = listing.price;
            ctx.isAuthor = listing.isAuthor;
            ctx.seller = listing.seller;
            ctx.loadPartials({
                nav: './templates/common/nav.hbs',
                editForm: './templates/forms/edit-form.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/listings/edit-listing.hbs');
            })}).catch(notify.handleError);
};
handlers.editListing = function (ctx) {
    const carId = ctx.params.carId;
    const title = ctx.params.title;
    const description = ctx.params.description;
    const brand = ctx.params.brand;
    const model = ctx.params.model;
    const year = ctx.params.year;
    const imageUrl = ctx.params.imageUrl;
    const fuel = ctx.params.fuelType;
    const isAuthor = ctx.params.isAuthor;
    const seller = sessionStorage.getItem('username');
    const price = ctx.params.price;

    console.log(ctx);
    if (title.length > 33) {
        notify.showError("Title must not exceed 33 characters!");
    } else if (description.length > 450) {
        notify.showError("Description must not exceed 450 characters!");
    } else if (description.length < 30) {
        notify.showError("Description should be at least 30 characters!");
    } else if (brand.length > 11) {
        notify.showError("Brand must not exceed 11 characters!");
    } else if (fuel.length > 11) {
        notify.showError("Fuel Type must not exceed 11 characters!");
    } else if (model.length > 11) {
        notify.showError("Model must not exceed 11 characters!");
    } else if (model.length < 4) {
        notify.showError("Model should be at least 4 characters!");
    } else if (year.length !== 4) {
        notify.showError("Year must be only 4 chars long!");
    } else if (Number.isNaN(price)) {
        notify.showError("Price must be a number!");
    } else if (Number(price) > 1000000) {
        notify.showError("The maximum price is 1000000$");
    } else if (imageUrl.slice(0,4) !== "http") {
        notify.showError("Link url should always start with http");
    } else {
        listing.editCarListing(carId, brand, description, fuel, imageUrl, isAuthor, model, price, seller, title, year )
            .then(function () {
                notify.showInfo(`Listing ${title} updated.`);
                ctx.redirect("#/catalog");
            }).catch(notify.handleError);
    }
};
handlers.deleteListing = function (ctx) {
    console.log(ctx);
    const carId = ctx.params.id;
    listing.deleteCarListing(carId).then(() => {
        notify.showInfo('Listing deleted.');
        ctx.redirect('#/catalog');
    }).catch(notify.handleError);
};
handlers.myCarListings = async function (ctx) {
    const username = sessionStorage.getItem("username");
    ctx.allMyCars = await listing.getMyCarListings(username);
    ctx.loadPartials({
        nav: './templates/common/nav.hbs',
        myListing: './templates/listings/my-listing.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function () {
        this.partial('./templates/listings/my-listings.hbs');
    })
};
handlers.getMyCarDetails = function (ctx) {
    ctx.username = sessionStorage.getItem("username");
    let id = ctx.params.id;
    const carId = ctx.params.carId;
    const title = ctx.params.title;
    const description = ctx.params.description;
    const brand = ctx.params.brand;
    const model = ctx.params.model;
    const year = ctx.params.year;
    const imageUrl = ctx.params.imageUrl;
    const fuel = ctx.params.fuelType;
    const price = ctx.params.price;
    const isAuthor = ctx.params.isAuthor;
    const seller = ctx.params.seller;
    listing.getListingById(id).then((listing) => {
        ctx.title = listing.title;
        ctx.carId = listing._id;
        ctx.title = listing.title;
        ctx.description = listing.description;
        ctx.brand = listing.brand;
        ctx.model = listing.model;
        ctx.year = listing.year;
        ctx.imageUrl = listing.imageUrl;
        ctx.fuelType = listing.fuel;
        ctx.price = listing.price;
        ctx.isAuthor = listing.isAuthor;
        ctx.seller = listing.seller;
        ctx.loadPartials({
            nav: './templates/common/nav.hbs',
            footer: './templates/common/footer.hbs'
        }).then(function () {

            this.partial('./templates/listings/listing-details.hbs');
        })}).catch(notify.handleError);
};