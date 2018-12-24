function startApp() {
    const adsDiv = $('#ads');
    const viewDetails = $('#viewDetailsAd');
    let editData;

    $('#menu a').show();
    navigateTo('', 'viewHome');

    function navigateTo(e, t) {
        let target = $(e.target).attr('data-target');
        $('section').hide();
        if (t) target = t;
        if (target === 'viewAds') loadAds();

        $('#' + target).show();
        $('#menu').find('a[data-target]').on('click', navigateTo);
        $('#buttonLoginUser').on('click', login);
        $('#buttonRegisterUser').on('click', register);
        $('#linkLogout').on('click', logout);
        $('#buttonCreateAd').on('click', createAd);
        $('#formEditAd').find('#buttonEditAd').on('click', () => updateAd(editData));


        $("#infoBox, #errorBox").on('click', function() {$(this).fadeOut()});

        $(document).on({
            ajaxStart: function() { $("#loadingBox").show() },
            ajaxStop: function() { $("#loadingBox").fadeOut() }
        });
    }
    function showInfo(message) {
        let infoBox = $('#infoBox');
        infoBox.text(message);
        infoBox.show();
        setTimeout(function() {
            $('#infoBox').fadeOut();
        }, 3000);
    }

    function showError(errorMsg) {
        let errorBox = $('#errorBox');
        errorBox.text("Error: " + errorMsg);
        errorBox.show();
    }

    function handleAjaxError(response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON && response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        showError(errorMsg);
    }

    let sendRequest = (() => {
        const baseUrl = 'https://baas.kinvey.com/';
        const appKey = 'kid_rJ20NEC4Q';
        const appSecret = '99e08c5a52e54564adf08defaf42d02a';

        function makeAuth(type) {
            if (type === 'basic') return 'Basic ' + btoa(appKey + ':' + appSecret);
            else return 'Kinvey ' + localStorage.getItem('authToken');
        }

        function makeRequest(method, module, urlExt, auth) {
            return {
                url: baseUrl + module + '/' + appKey + '/' + urlExt,
                method: method,
                headers: {Authorization: makeAuth(auth)}
            };
        }

        function get(module, urlExt, auth) {
            return $.ajax(makeRequest('GET', module, urlExt, auth));
        }

        function post(module, urlExt, data, auth) {
            let req = makeRequest('POST', module, urlExt, auth);
            req.data = JSON.stringify(data);
            req.contentType = "application/json";
            return $.ajax(req);
        }

        function update(module, urlExt, data, auth) {
            let req = makeRequest('PUT', module, urlExt, auth);
            req.data = JSON.stringify(data);
            req.contentType = "application/json";
            return $.ajax(req);
        }

        function remove(module, urlExt, auth) {
            return $.ajax(makeRequest('DELETE', module, urlExt, auth));
        }

        return {get, post, update, remove};
    })();

    if (localStorage.getItem('authToken') && localStorage.getItem('username')) {
        userLogIn();
    } else {
        userLogOut();
    }

    function userLogIn() {
        let welcome = $('#loggedInUser');
        welcome.text(`Welcome, ${localStorage.getItem('username')}!`);
        welcome.show();
        $('#linkLogin').hide();
        $('#linkRegister').hide();
        $('#linkListAds').show();
        $('#linkCreateAd').show();
        $('#linkLogout').show();
    }

    function userLogOut() {
        let welcome = $('#loggedInUser');
        welcome.text('');
        welcome.hide();
        $('#linkLogin').show();
        $('#linkRegister').show();
        $('#linkListAds').hide();
        $('#linkCreateAd').hide();
        $('#linkLogout').hide();
    }

    function session(data) {
        localStorage.setItem('username', data.username);
        localStorage.setItem('id', data._id);
        localStorage.setItem('authToken', data._kmd.authtoken);
        userLogIn();
    }

    async function login() {
        let form = $('#formLogin');
        let userData = {
            username: form.find('input[name="username"]').val(),
            password: form.find('input[name="passwd"]').val()
        };

        try {
            let data = await sendRequest.post('user', 'login', userData, 'basic');
            showInfo('Logged in');
            session(data);
            navigateTo('', 'viewAds');
        } catch (e) {
            handleAjaxError(e);
        }
    }

    async function register() {
        let form = $('#formRegister');
        let userData = {
            username: form.find('input[name="username"]').val(),
            password: form.find('input[name="passwd"]').val()
        };

        try {
            let data = await sendRequest.post('user', '', userData, 'basic');
            showInfo('Registered');
            session(data);
            navigateTo('', 'viewAds');
        } catch (e) {
            handleAjaxError(e);
        }
    }

    async function logout() {
        try {
            let data = await sendRequest.post('user', '_logout', {authtoken: localStorage.getItem('authToken')});
            localStorage.clear();
            showInfo('Logged out');
            userLogOut();
            navigateTo('', 'viewHome');
        } catch (e) {
            handleAjaxError(e);
        }
    }

    // Ads CRUD actions
    async function loadAds() {
        adsDiv.empty();
        let ads = await sendRequest.get('appdata', 'ads');

        if (ads.length === 0)
            return adsDiv.append($('<p>No advertisements available.</p>'));

        for (const ad of ads) {
            let buttons = [];
            if (ad._acl.creator === localStorage.getItem('id')){
                buttons.push($('<button class="ad-control">&#10006;</button>').on('click', () => deleteAd(ad._id)));
                buttons.push($('<button class="ad-control">&#9998;</button>').on('click', () => openEditAd(ad)));
            }
            buttons.push($('<button class="ad-control">&#9776;</button>').on('click', () => displayAdvert(ad)));

            $('<div>')
                .addClass('ad-box')
                .append(
                    $(`<div class="ad-title">${ad.title}</div>`)
                        .append(buttons),
                    $(`<div><img src="${ad.imageUrl}"></div>`),
                    $(`<div>Price ${ad.price.toFixed(2)} | by ${ad.publisher}</div>`)
                ).appendTo(adsDiv);
        }
    }

    async function createAd() {
        let dateSplit = (new Date()).toISOString().slice(0,10).split('-');

        let form = $('#formCreateAd');
        let adData = {
            title: form.find('input[name="title"]').val(),
            description: form.find('textarea[name="description"]').val(),
            date: dateSplit[1] + '/' + dateSplit[2] + '/' + dateSplit[0],
            price: +form.find('input[name="price"]').val(),
            imageUrl: form.find('input[name="image"]').val(),
            publisher: localStorage.getItem('username')
        };

        form.find('input[name="title"]').val('');
        form.find('textarea[name="description"]').val('');
        form.find('input[name="price"]').val('');
        form.find('input[name="image"]').val('');

        if (!adData.title)
            return showError('Title cannot be empty!');

        if (!adData.price)
            return showError('Price cannot be empty!');

        try {
            await sendRequest.post('appdata', 'ads', adData);
            showInfo('Ad created');
            navigateTo('', 'viewAds');
        } catch (e) {
            handleAjaxError(e)
        }
    }

    function openEditAd(ad) {
        console.log(ad);
        let form = $('#formEditAd');
        form.find('input[name="title"]').val(ad.title);
        form.find('textarea[name="description"]').val(ad.description);
        form.find('input[name="price"]').val(ad.price);
        form.find('input[name="image"]').val(ad.imageUrl);

        editData = [ad._id, ad.date, ad.publisher];

        navigateTo('', 'viewEditAd');
    }

    async function updateAd([id, date, publisher]) {
        let form = $('#formEditAd');
        let adData = {
            title: form.find('input[name="title"]').val(),
            description: form.find('textarea[name="description"]').val(),
            date: date,
            price: +form.find('input[name="price"]').val(),
            imageUrl: form.find('input[name="image"]').val(),
            publisher: publisher
        };

        if (!adData.title)
            return showError('Title cannot be empty!');

        if (!adData.price)
            return showError('Price cannot be empty!');

        try {
            await sendRequest.update('appdata', 'ads/' + id, adData);
            showInfo('Ad edited');
            navigateTo('', 'viewAds');
        } catch (e) {
            handleAjaxError(e)
        }
    }

    function displayAdvert(ad) {
        viewDetails.empty();
        $('<div>')
            .addClass('ad-view')
            .append(
                $(`<div class="ad-view-title">${ad.title}</div>`),
                $(`<div><img src="${ad.imageUrl}"></div>`),
                $(`<br /><label>Price: </label><p><b>${ad.price.toFixed(2)}</b></p>
                   <br /><label>Description: </label><p><b>${ad.description}</b></p>
                   <br /><label>Created by: </label><p><b>${ad.publisher}</b></p>
                   <br /><label>Created on: </label><p><b>${ad.date}</b></p>`),
            ).appendTo(viewDetails);

        navigateTo('', 'viewDetailsAd');
    }
    async function deleteAd(id) {
        try {
            await sendRequest.remove('appdata', 'ads/' + id);
            navigateTo('', 'viewAds');
        } catch (e) {
            handleAjaxError(e)
        }
    }
}