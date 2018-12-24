const BASE_URL = "https://baas.kinvey.com/";
const APP_KEY = "kid_r1dOnl8S7";
const APP_SECRET = "09526455112849419aeab473e1195daa";
const BASE_64 = btoa(APP_KEY + ":" + APP_SECRET);
const AUTH = {"Authorization": "Basic " + BASE_64};

const controller = (function () {
    function register(username, password, subscriptions) {
        $.ajax({
            method: "POST",
            url: BASE_URL + "user/" + APP_KEY + "/",
            headers: AUTH,
            data: {username, password, subscriptions}
        }).then(function (data) {
            saveAuth(data);
            showSuccess("User registration successful.");
            $("#formRegister").trigger("reset");
        }).catch(handleError);
    }
    function login(username, password) {
        $.ajax({
            method: "POST",
            url: BASE_URL + "user/" + APP_KEY + "/login",
            headers: AUTH,
            data: {username, password}
        }).then(function (data) {
            saveAuth(data);
            showSuccess("Successful login!");
        }).catch(handleError);
    }
    function logout() {
        $.ajax({
            method: "POST",
            url: BASE_URL + "user/" + APP_KEY + "/_logout",
            headers: {"Authorization": "Kinvey " + localStorage.getItem("authToken")}
        }).then(function () {
            localStorage.clear();
            showSuccess("Successful logout!");
        }).catch(handleError);
    }
    function list(subscriptions) {
        $.ajax({
            method: "GET",
            url: BASE_URL + "appdata/" + APP_KEY + `/chirps?query={"author":{"$in": [${subscriptions}]}}&sort={"_kmd.ect": 1}`,
            headers: {"Authorization": "Kinvey " + localStorage.getItem("authToken")}
        }).then(function (data) {
            showSuccess("Successful listing!");
        }).catch(handleError);
    }
    function create(text) {
        let author = localStorage.getItem("username");
        $.ajax({
            method: "POST",
            url: BASE_URL + "appdata/" + APP_KEY + `/chirps`,
            headers: {"Authorization": "Kinvey " + localStorage.getItem("authToken")},
            data: {text, author}
        }).then(function (data) {
            showSuccess("Chirp published.");
        }).catch(handleError);
    }
    function deleteChirp(id) {
        $.ajax({
            method: "DELETE",
            url: BASE_URL + "appdata/" + APP_KEY + `/chirps/${id}`,
            headers: {"Authorization": "Kinvey " + localStorage.getItem("authToken")},
        }).then(function (data) {
            showSuccess("Successful deletion!");
        }).catch(handleError);
    }
    function userChirps() {
        let username = localStorage.getItem("username");
        $.ajax({
            method: "GET",
            url: BASE_URL + "appdata/" + APP_KEY + `chirps?query={"author":"${username}"}&sort={"_kmd.ect": 1}`,
            headers: {"Authorization": "Kinvey " + localStorage.getItem("authToken")},
        }).then(function (data) {
            showSuccess("Successful userChirps!");
        }).catch(handleError);
    }
    function countChirps() {
        let username = localStorage.getItem("username");
        $.ajax({
            method: "GET",
            url: BASE_URL + "appdata/" + APP_KEY + `/chirps?query={"author":"${username}"}`,
            headers: {"Authorization": "Kinvey " + localStorage.getItem("authToken")},
        }).then(function (data) {
            showSuccess("Successful count!");
            return data.length;
        }).catch(handleError);
    }
    function countFollowing() {
        let username = localStorage.getItem("username");
        $.ajax({
            method: "GET",
            url: BASE_URL + "appdata/" + APP_KEY + `/?query={"username":"${username}"}`,
            headers: {"Authorization": "Kinvey " + localStorage.getItem("authToken")},
        }).then(function (data) {
            showSuccess("Successful count!");
            return data.subscriptions.length;
        }).catch(handleError);
    }
    function countFollowers() {
        let username = localStorage.getItem("username");
        $.ajax({
            method: "GET",
            url: BASE_URL + "appdata/" + APP_KEY + `/?query={"subscriptions":"${username}"}`,
            headers: {"Authorization": "Kinvey " + localStorage.getItem("authToken")},
        }).then(function (data) {
            showSuccess("Successful count!");
            return data.length;
        }).catch(handleError);
    }
    function discoverPage() {
        let username = localStorage.getItem("username");
        $.ajax({
            method: "GET",
            url: BASE_URL + "user/" + APP_KEY + `/`,
            headers: {"Authorization": "Kinvey " + localStorage.getItem("authToken")},
        }).then(function (data) {
            showSuccess("Successful discoverPage!");
            return data.map(e=>e.username).filter(e=>e!==username);
        }).catch(handleError);
    }
    function follow(id) {
        let subscriptions = localStorage.getItem("subscriptions");
        $.ajax({
            method: "PUT",
            url: BASE_URL + "user/" + APP_KEY + `/${id}`,
            headers: {"Authorization": "Kinvey " + localStorage.getItem("authToken")},
            data: {subscriptions}
        }).then(function (data) {
            showSuccess("Successful follow!");
        }).catch(handleError);
    }
    function unfollow(id) {
        let subscriptions = localStorage.getItem("subscriptions");
        $.ajax({
            method: "PUT",
            url: BASE_URL + "user/" + APP_KEY + `/${id}`,
            headers: {"Authorization": "Kinvey " + localStorage.getItem("authToken")},
            data: {subscriptions}
        }).then(function (data) {
            showSuccess("Successful follow!");
        }).catch(handleError);
    }
    function handleError(err) {
        console.log(err);
    }
    function saveAuth(data) {
        localStorage.setItem("id", data._id);
        localStorage.setItem("username", data.username);
        localStorage.setItem("subscriptions", data.subscriptions);
        localStorage.setItem("authToken", data._kmd.authtoken);
    }
    return {register, login, logout, list, create, deleteChirp, userChirps, countChirps, countFollowing, countFollowers,
        discoverPage, follow, unfollow};
}());


function calcTime(dateIsoFormat) {
    let diff = new Date - (new Date(dateIsoFormat));
    diff = Math.floor(diff / 60000);
    if (diff < 1) return 'less than a minute';
    if (diff < 60) return diff + ' minute' + pluralize(diff);
    diff = Math.floor(diff / 60);
    if (diff < 24) return diff + ' hour' + pluralize(diff);
    diff = Math.floor(diff / 24);
    if (diff < 30) return diff + ' day' + pluralize(diff);
    diff = Math.floor(diff / 30);
    if (diff < 12) return diff + ' month' + pluralize(diff);
    diff = Math.floor(diff / 12);
    return diff + ' year' + pluralize(diff);
    function pluralize(value) {
        if (value !== 1) return 's';
        else return '';
    }
}