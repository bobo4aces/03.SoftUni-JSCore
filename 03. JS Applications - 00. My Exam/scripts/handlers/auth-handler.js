handlers.getWelcomePage = function (ctx) {
    ctx.username = sessionStorage.getItem("username");
    ctx.isAuth = auth.isAuth();
    ctx.loadPartials({
        nav: './templates/common/nav.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function () {
        this.partial('./templates/welcome.hbs');
    })
};
handlers.getRegisterForm = function (ctx) {
    ctx.loadPartials({
        nav: './templates/common/nav.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function () {
        this.partial('./templates/forms/register-form.hbs');
    })
};
handlers.registerUser = function (ctx) {
    const username = ctx.params.username;
    const password = ctx.params.password;
    const passwordCheck = ctx.params.repeatPass;

    if(username.length < 3){
        notify.showError('Username must be at least 3 symbols long!');
    } else if (!/^[A-Za-z]+$/.test(username)) {
        notify.showError('Username must contain only english alphabet letters!');
    } else if (password.length < 6) {
        notify.showError('Password must be at least 6 symbols long!');
    } else if (!/^[A-Za-z0-9]+$/.test(password)) {
        notify.showError('Password must contain only english alphabet letters and digits!');
    } else if (password !== passwordCheck) {
        notify.showError('Both passwords must match!');
    } else {
        auth.register(username, password)
            .then((userData) => {
                auth.saveSession(userData);
                notify.showInfo('User registration successful.');
                ctx.redirect('#/catalog');
            })
            .catch(notify.handleError)
    }
};
handlers.getLoginForm = function (ctx) {
    ctx.loadPartials({
        nav: './templates/common/nav.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function () {
        this.partial('./templates/forms/login-form.hbs');
    })
};
handlers.loginUser = function (ctx) {
    const username = ctx.params.username;
    const password = ctx.params.password;

    if(username.length < 3){
        notify.showError('Username must be at least 3 symbols long!');
    } else if (!/^[A-Za-z]+$/.test(username)) {
        notify.showError('Username must contain only english alphabet letters!');
    } else if (password.length < 6) {
        notify.showError('Password must be at least 6 symbols long!');
    } else if (!/^[A-Za-z0-9]+$/.test(password)) {
        notify.showError('Password must contain only english alphabet letters and digits!');
    } else {
        auth.login(username, password)
            .then((userData) => {
                auth.saveSession(userData);
                notify.showInfo('Login successful.');
                //$("#login").trigger("reset");
                ctx.redirect('#/catalog');
            })
            .catch(notify.handleError);
    }
};
handlers.logout = function (ctx) {
    auth.logout()
        .then(() => {
            sessionStorage.clear();
            notify.showInfo('Logout successful.');
            ctx.redirect('#/home');
        })
};