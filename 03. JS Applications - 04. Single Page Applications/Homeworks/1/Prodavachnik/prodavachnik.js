function startApp() {
    const baseUrl = 'https://baas.kinvey.com/';
    const appKey = 'kid_SJJtygUEQ';
    const appSecret = '0ffcf4db04d04f8c8d6a3f74caa8eeaa';

    const header = $('#menu');
    const linkHome = $('#linkHome');
    const linkLogin = $('#linkLogin');
    const linkRegister = $('#linkRegister');
    const linkListAds = $('#linkListAds');
    const linkCreateAd = $('#linkCreateAd');
    const linkLogout = $('#linkLogout');

    const loggedInUser = $('#loggedInUser');
    const loadingBox = $('#loadingBox');
    const infoBox = $('#infoBox');
    const errorBox = $('#errorBox');

    const viewHome = $('#viewHome');
    const viewLogin = $('#viewLogin');
    const viewRegister = $('#viewRegister');
    const viewAds = $('#viewAds');
    const viewCreateAd = $('#viewCreateAd');
    const viewEditAd = $('#viewEditAd');
    const viewMoreInfo = $('#viewMoreInfo');

    const ads = $('#ads');

    setGreeting();

    // Attach event listeners
    $('#buttonRegisterUser').on('click', register);
    $('#buttonLoginUser').on('click', login);
    $('#buttonCreateAd').on('click', createAdd);
    $(linkLogout).on('click', logout);
    $(linkHome).on('click', () => showView("home"));
    $(linkLogin).on('click', () => showView("login"));
    $(linkRegister).on('click', () => showView("register"));
    $(linkListAds).on('click', () => showView("list"));
    $(linkCreateAd).on('click', () => showView("create"));
    $(linkLogout).on('click', () => logout);

    // Notifications
    $(document).on({
        ajaxStart: () => $(loadingBox).show(),
        ajaxStop: () => $(loadingBox).hide()
    });

    function showInfo(message) {
        $(infoBox).text(message);
        $(infoBox).show();
        setTimeout(() => $(infoBox).fadeOut(), 1000);
    }

    function showError(message) {
        $(errorBox).text(message);
        $(errorBox).show();
        setTimeout(() => $(errorBox).fadeOut(), 2000);
    }

    function handleError(reason) {
        showError(reason.responseJSON.description);
    }

    // Navigation and header
    function showView(name) {
        $('section').hide();

        switch (name) {
            case "home":
                $(viewHome).show();
                break;
            case "login":
                $(viewLogin).show();
                break;
            case "register":
                $(viewRegister).show();
                break;
            case "list":
                $(viewAds).show();
                getAds();
                break;
            case "create":
                $(viewCreateAd).show();
                break;
            case "edit":
                $(viewEditAd).show();
                break;
            case "info":
                $(viewMoreInfo).show();
                break;
            case "loggedIn":
                $(loggedInUser).show();
                break;
        }
    }

    // User session
    function setGreeting() {
        let username = localStorage.getItem('username');
        if (username !== null) {
            $('#loggedInUser').text(`Welcome, ${username}!`);
            $(linkLogin).hide();
            $(linkRegister).hide();
            $(linkHome).show();
            $(linkListAds).show();
            $(linkCreateAd).show();
            $(linkLogout).show();
            showView("loggedIn");
        } else {
            $('#loggedInUser').text("");
            $(linkHome).show();
            $(linkLogin).show();
            $(linkRegister).show();
            $(linkListAds).hide();
            $(linkCreateAd).hide();
            $(linkLogout).hide();
            $(loggedInUser).hide();
            showView("home");
        }
    }

    function setStorage(data) {
        localStorage.setItem('authtoken', data._kmd.authtoken);
        localStorage.setItem('username', data.username);
        localStorage.setItem('userId', data._id);
        $('#loggedInUser').text(`Welcome, ${data.username}!`);
        setGreeting();
        showView("list");
    }

    function register() {

        let regForm = $('#formRegister');
        let username = $(regForm).find('input[name="username"]');
        let password = $(regForm).find('input[name="passwd"]');

        if (username.val().trim() !== "" && password.val().trim() !== "") {

            let req = {
                url: baseUrl + 'user/' + appKey,
                method: "POST",
                headers: {
                    'Authorization': 'Basic ' + btoa(appKey + ':' + appSecret),
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify({
                    username: username.val(),
                    password: password.val()
                }),
                success: (data) => {
                    showInfo("Registration successful");
                    setStorage(data);
                },
                error: handleError
            };

            $.ajax(req);
        } else {
            showError("Cannot read empty fields");
        }
    }

    function login() {
        let regForm = $('#formLogin');
        let username = $(regForm).find('input[name="username"]');
        let password = $(regForm).find('input[name="passwd"]');

        if (username.val().trim() !== "" && password.val().trim() !== "") {
            let req = {
                url: baseUrl + 'user/' + appKey + '/login',
                method: "POST",
                headers: {
                    'Authorization': 'Basic ' + btoa(appKey + ':' + appSecret),
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify({
                    username: username.val(),
                    password: password.val()
                }),
                success: (data) => {
                    showInfo("Login successful");
                    setStorage(data);
                },
                error: handleError
            };

            $.ajax(req);

            username.val("");
            password.val("");
        } else {
            showError("Cannot read empty fields");
        }
    }

    function logout() {
        let req = {
            url: baseUrl + 'user/' + appKey + '/_logout',
            method: "POST",
            headers: {
                'Authorization': 'Kinvey ' + localStorage.getItem('authtoken'),
                'Content-Type': 'application/json'
            },
            success: logoutSuccess,
            error: handleError
        };

        $.ajax(req);

        function logoutSuccess() {
            localStorage.clear();
            setGreeting();
        }
    }

    //Catalog
    function getAds() {

        let req = {
            url: baseUrl + "appdata/" + appKey + "/adverts",
            method: "GET",
            headers: {
                'Authorization': 'Kinvey ' + localStorage.getItem('authtoken'),
                'Content-Type': 'application/json'
            },
            success: displayAds,
            error: handleError
        };

        $.ajax(req);

        function displayAds(data) {
            $(ads).find('tbody>tr').not(':first').remove();
            for (let add of data) {

                let row = $('<tr>')
                    .append($('<td>')
                        .text(add.title))
                    .append($('<td>')
                        .text(add.publisher))
                    .append($('<td>')
                        .text(add.description))
                    .append($('<td>')
                        .text(Number(add.price).toFixed(2)))
                    .append($('<td>')
                        .text(add.date))
                    .append($('<td>')
                        .append($('<button>More Info</button>')
                            .on('click', () => moreInfo(add))));

                let actions = [];
                if (add._acl.creator === localStorage.getItem("userId")) {
                    actions.push($('<button>Delete</button>')
                        .on('click', () => deleteAdvertise(add._id)));
                    actions.push($('<button>Edit</button>')
                        .on('click', () => editAdvertise(add)));

                    $(row).append($('<td>')
                        .append(actions));
                }
                $(ads).find('tbody').append(row);
            }
        }
    }

    function createAdd() {
        let formCreate = $('#formCreateAd');
        let title = $(formCreate).find('input[name="title"]');
        let description = $(formCreate).find('textarea[name="description"]');
        let date = $(formCreate).find('input[name="datePublished"]');
        let price = $(formCreate).find('input[name="price"]');
        let img = $(formCreate).find('input[name="image"]');

        if (title.val().trim() !== "" &&
            description.val().trim() !== "" &&
            date.val().trim() !== "" &&
            price.val().trim() !== "" &&
            img.val().trim() !== "") {

            let req = {
                url: baseUrl + "appdata/" + appKey + "/adverts",
                method: "POST",
                headers: {
                    'Authorization': 'Kinvey ' + localStorage.getItem('authtoken'),
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify({
                    title: title.val(),
                    description: description.val(),
                    publisher: localStorage.getItem('username'),
                    date: date.val(),
                    price: price.val(),
                    image: img.val()
                }),
                success: createSuccess,
                error: handleError
            };

            $.ajax(req);

            function createSuccess() {
                getAds();
                showView('list');
            }
        } else {
            showError("Cannot read empty fields");
        }
    }

    function editAdvertise(add) {
        showView('edit');
        $('#buttonEditAd').on('click', edit);

        let formEdit = $('#formEditAd');
        let title = $(formEdit).find('input[name="title"]').val(add.title);
        let description = $(formEdit).find('textarea[name="description"]').val(add.description);
        let date = $(formEdit).find('input[name="datePublished"]').val(add.date);
        let price = $(formEdit).find('input[name="price"]').val(add.price);

        function edit() {
            if (title.val().trim() !== "" &&
                description.val().trim() !== "" &&
                date.val().trim() !== "" &&
                price.val().trim() !== "") {

                let req = {
                    url: baseUrl + "appdata/" + appKey + "/adverts/" + add._id,
                    method: "PUT",
                    headers: {
                        'Authorization': 'Kinvey ' + localStorage.getItem('authtoken'),
                        'Content-Type': 'application/json'
                    },
                    data: JSON.stringify({
                        title: title.val(),
                        description: description.val(),
                        publisher: localStorage.getItem('username'),
                        date: date.val(),
                        price: price.val(),
                    }),
                    success: () => {
                        showInfo("Advertise edited!");
                        showView('list');
                        getAds();
                    },
                    error: handleError
                };

                $.ajax(req);
            } else {
                showError("Cannot read empty fields");
            }
        }

    }

    function deleteAdvertise(id) {

        let req = {
            url: baseUrl + "appdata/" + appKey + "/adverts/" + id,
            method: "DELETE",
            headers: {
                'Authorization': 'Kinvey ' + localStorage.getItem('authtoken'),
                'Content-Type': 'application/json'
            },
            success: () => {
                showInfo("Advertise deleted!");
                showView("list");
            },
            error: handleError
        };

        $.ajax(req);
    }

    function moreInfo(add) {
        $('#infoImage').empty();
        showView('info');
        $('#buttonInfoGetBack').on('click', getBack);

        $('#infoTitle').text(add.title);
        $('#infoDescription').text(add.description);
        $('#infoDate').text(add.date);
        $('#infoPrice').text(add.price);
        $('#infoImage')
            .append($(`<img src="${add.image}">`));

        function getBack() {
            showView('list');
        }
    }
}