function startApp() {
    $("header").find("a").show();
    const adsDiv = $("#ads");

    function showView(view) {
        $("section").hide();
        switch (view) {
            case "home":
                $("#viewHome").show();
                break;
            case "login":
                $("#viewLogin").show();
                break;
            case "register":
                $("#viewRegister").show();
                break;
            case "ads":
                $("#viewAds").show();
                $("#ads table tr td").remove();
                loadAds();
                break;
            case "create":
                $("#viewCreateAd").show();
                $('input[name="title"]').val("");
                $('textarea[name="description"]').val("");
                $('input[name="datePublished"]').val("");
                $('input[name="price"]').val("");
                break;
            case "details":
                $("#viewDetailsAd").show();
                break;
            case "edit":
                $("#viewEditAd").show();
                break;
        }
    }

    $("#linkHome").on("click",()=>showView("home"));
    $("#linkListAds").on("click",()=>showView("ads"));
    $("#linkLogin").on("click",()=>showView("login"));
    $("#linkRegister").on("click",()=>showView("register"));
    $("#linkCreateAd").on("click",()=>showView("create"));
    $("#linkLogout").on("click", logout);

    $("#buttonLoginUser").on("click", login);
    $("#buttonRegisterUser").on("click", register);
    $("#buttonCreateAd").on("click", createAd);

    
    $(document).on({
        ajaxStart: () => $("#loadingBox").show(),
        ajaxStop: () => $("#loadingBox").fadeOut()
    });

    $("#infoBox").on("click", function (e) {
        $(e.target).hide()
    });
    $("#errorBox").on("click", function (e) {
        $(e.target).hide()
    });

    function showInfo(message) {
        $("#infoBox").text(message);
        $("#infoBox").show();
        setTimeout(()=>$("#infoBox").fadeOut(),3000);
    }

    function showError(message) {
        $("#infoBox").text(message);
        $("#infoBox").show();
    }

    function handleError(reason) {
        showError(reason.responseJSON.description);
    }
    let requester = (() => {
        const baseUrl = "https://baas.kinvey.com/";
        const appKey = "kid_Bkmy4k9EQ";
        const appSecret = "71419e487934419db066ef3d422e030f";

        function makeAuth(type) {
            if (type === "basic") {
                return "Basic " + btoa(appKey + ":" + appSecret);
            } else {
                return "Kinvey " + localStorage.getItem("authtoken");
            }
        }

        function makeRequest(method, module, url, auth) {
            return req = {
                url: baseUrl + module + "/" + appKey + "/" + url,
                method,
                headers: {"Authorization": makeAuth(auth)}
            };
        }

        function get(module, url, auth) {
            return $.ajax(makeRequest("GET", module, url, auth));
        }

        function post(module, url, data, auth) {
            let req = makeRequest("POST", module, url, auth);
            req.data = JSON.stringify(data);
            req.headers['Content-Type'] = "application/json";
            return $.ajax(req);
        }

        function update(module, url, data, auth) {
            let req = makeRequest("PUT", module, url, auth);
            req.data = JSON.stringify(data);
            req.headers['Content-Type'] = "application/json";
            return $.ajax(req);
        }

        function remove(module, url, auth) {
            return $.ajax(makeRequest("DELETE", module, url, auth));
        }

        return {get, post, update, remove};
    })();

    requester.get("appdata", "", "basic");

    if (localStorage.getItem("authtoken") !== null &&
        localStorage.getItem("username") !== null) {
        userLoggedIn();
    } else {
        userLoggedOut();
    }
    showView("home");

    function userLoggedIn() {
        $("#loggedInUser").text(`Welcome, ${localStorage.getItem("username")}!`);
        $("#loggedInUser").show();
        $("#linkLogin").hide();
        $("#linkRegister").hide();
        $("#linkLogout").show();
        $("#linkListAds").show();
        $("#linkCreateAd").show();
    }

    function userLoggedOut() {
        $("#loggedInUser").text("");
        $("#loggedInUser").hide();
        $("#linkLogin").show();
        $("#linkRegister").show();
        $("#linkLogout").hide();
        $("#linkListAds").hide();
        $("#linkCreateAd").hide();
    }

    function saveSession(data) {
        localStorage.setItem("username", data.username);
        localStorage.setItem("id", data._id);
        localStorage.setItem("authtoken", data._kmd.authtoken);
        userLoggedIn();
    }

    async function login() {
        let form = $("#formLogin");
        let username = form.find('input[name="username"]').val();
        let password = form.find('input[name="passwd"]').val();
        try {
            let data = await requester.post("user", "login", {username, password}, "basic");
            showInfo("Logged in");
            saveSession(data);
            showView("ads");
        } catch (err) {
            handleError(err);
        }

    }

    async function register() {
        let form = $("#formRegister");
        let username = form.find('input[name="username"]').val();
        let password = form.find('input[name="passwd"]').val();
        try {
            let data = await requester.post("user", "", {username, password}, "basic");
            showInfo("Registered");
            saveSession(data);
            showView("ads");
        } catch (err) {
            handleError(err);
        }
    }

    async function logout() {
        try {
            let data = await requester.post("user", "_logout", {authtoken: localStorage.getItem("authtoken")});
            localStorage.clear();
            showInfo("Logged out");
            userLoggedOut();
            showView("home");
        } catch (err) {
            handleError(err);
        }
    }
    
    async function loadAds() {
        let data = await requester.get("appdata","posts");
        let adsTable = $("#ads table");
        $("#ads table tr td").remove();
        if (data.length === 0) {
            adsDiv.append("<h3>Advertisements</h3>");
            adsDiv.append("<p>No advertisements available.</p>");
            return;
        }
        for (let ad of data) {
            let tr = $("<tr>")
                .append(`<td>${ad.title}</td>`)
                    .append(`<td>${ad.publisher}</td>`)
                    .append(`<td>${ad.description}</td>`)
                    .append(`<td>${Number(ad.price).toFixed(2)}</td>`)
                    .append(`<td>${ad.date}</td>`);
            if (ad._acl.creator === localStorage.getItem("id")) {
                let deleteBtn = $('<a href="#">[Delete]</a>');
                let editBtn = $('<a href="#">[Edit]</a>');
                deleteBtn.on("click", ()=>deleteAd(ad._id));
                editBtn.on("click", ()=>openEditAd(ad));
                let td = $("<td>").append(deleteBtn).append(editBtn);
                tr.append(td);
            }
            adsTable.append(tr);
        }
    }
    
    async function deleteAd(id) {
        await requester.remove("appdata","posts/"+id);
        showInfo("Ad deleted");
        showView("ads");
    }

    async function openEditAd(ad) {
        let form = $("#formEditAd");
        form.find('input[name="title"]').val(ad.title);
        form.find('textarea[name="description"]').val(ad.description);
        form.find('input[name="datePublished"]').val(ad.date);
        form.find('input[name="price"]').val(Number(ad.price).toFixed(2));

        form.find("#buttonEditAd").on("click",()=>editAd(ad._id, ad.date));
        showView("edit");
    }
    
    async function editAd(id, date) {
        let form = $("#formEditAd");
        let title = form.find('input[name="title"]').val();
        let description = form.find('textarea[name="description"]').val();
        let datePublished = form.find('input[name="datePublished"]').val();
        let price = form.find('input[name="price"]').val();
        price = Number(price).toFixed(2);
        let publisher = localStorage.getItem("username");
        if (title.length === 0) {
            showError("Title cannot be empty");
            return;
        }
        if (description.length === 0) {
            showError("Description cannot be empty");
            return;
        }
        if (date.length === 0) {
            showError("Date cannot be empty");
            return;
        }
        if (price.length === 0) {
            showError("Price cannot be empty");
            return;
        }

        let editedAd = {title,description,price,date,publisher};
        try {
            await requester.update("appdata", "posts/" + id, editedAd);
            showInfo("Ad edited");
            showView("ads");
        } catch (err) {
            handleError(err);
        }
    }
    
    async function createAd() {
        let form = $("#formCreateAd");
        let title = form.find('input[name="title"]').val();
        let description = form.find('textarea[name="description"]').val();
        let date = form.find('input[name="datePublished"]').val();
        let price = form.find('input[name="price"]').val();
        price = Number(price).toFixed(2);
        let publisher = localStorage.getItem("username");
        if (title.length === 0) {
            showError("Title cannot be empty");
            return;
        }
        if (description.length === 0) {
            showError("Description cannot be empty");
            return;
        }
        if (date.length === 0) {
            showError("Date cannot be empty");
            return;
        }
        if (price.length === 0) {
            showError("Price cannot be empty");
            return;
        }

        let newAd = {title,description,price,date,publisher};
        try {
            await requester.post("appdata", "posts", newAd);
            showInfo("Ad created");
            showView("ads");
        } catch (err) {
            handleError(err);
        }
    }
}