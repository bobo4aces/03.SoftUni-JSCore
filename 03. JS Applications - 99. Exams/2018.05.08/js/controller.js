const BASE_URL = "https://baas.kinvey.com/";
const APP_KEY = "kid_B1F0dCzBX";
const APP_SECRET = "2bd27f2d5edf4b3e851c5da8040c671f";
const BASE64 = btoa(`${APP_KEY}:${APP_SECRET}`);
const AUTH_HEADERS = {"Authorization": `Basic ${BASE64}`};

const kinveyController = (function () {
    function register(username,password,repeatPassword) {
        if (typeof username !== "string") {
            showError("Username must be string!");
            return false;
        } else if (username.length<5) {
            showError("Username must be at least 5 characters long!");
            return false;
        } else if (password.length===0) {
            showError("Password must not be empty!");
            return false;
        } else if (password !== repeatPassword) {
            showError("Passwords does not match!");
            return false;
        } else {
            $.ajax({
                method: "POST",
                url: BASE_URL + "user/" + APP_KEY + "/",
                headers: AUTH_HEADERS,
                data: {username,password}
            }).then(function (res) {
                showInfo("Registration successful.");
                saveAuth(res);
                userLoggedOut();
            }).catch(handleError);
        }
    }
    function login(username,password) {
        if (typeof username !== "string") {
            showError("Username must be string!");
        } else if (username.length<5) {
            showError("Username must be at least 5 characters long!");
        } else if (password.length===0) {
            showError("Password must not be empty!");
        } else {
            $.ajax({
                method: "POST",
                url: BASE_URL + "user/" + APP_KEY + "/login",
                headers: AUTH_HEADERS,
                content: "application/json",
                data: {username, password}
            }).then(function (res) {
                showInfo("Login successful.");
                saveAuth(res);
                userLoggedIn();
            }).catch(handleError);
        }
    }
    function logout() {
        $.ajax({
            method: "POST",
            url: BASE_URL + "user/" + APP_KEY + "/_logout",
            headers: {"Authorization": "Kinvey " + localStorage.getItem("authToken")},
        }).then(function () {
            localStorage.clear();
            showInfo("Logout successful.");
            userLoggedOut();
        }).catch(handleError);
    }
    function getFlights() {
        $.ajax({
            method: "GET",
            url: BASE_URL + "appdata/" + APP_KEY + '/flights?query={"isPublished":"on"}',
            headers: {"Authorization": "Kinvey " + localStorage.getItem("authToken")},
        }).then(function (flightsData) {
            console.log(flightsData);
            showInfo("Successfully loaded flights.");
            //$("#viewCatalog").show();
        }).catch(showError("Error: Invalid flights"));
    }
    function createFlight(destination, origin, departure, seats, cost, image, isPublished) {
        if (destination.length === 0) {
            showError("Destination must not be empty");
        } else if (origin.length === 0) {
            showError("Destination must not be empty");
        } else if (Number.isNaN(Number(seats))) {
            showError("Number of Seats must be number");
        } else if (Number(seats)<=0) {
            showError("Number of Seats must be a positive number");
        } else if (Number.isNaN(Number(cost))) {
            showError("Cost per seat must be number");
        } else if (Number(cost)<=0) {
            showError("Cost per seat must be a positive number");
        } else {
            $.ajax({
                method: "POST",
                url: BASE_URL + "appdata/" + APP_KEY + '/flights',
                headers: {"Authorization": "Kinvey " + localStorage.getItem("authToken")},
                data: {destination, origin, departure, seats, cost, image, isPublished}
            }).then(function () {
                showInfo("Created flight.");
            }).catch(handleError);
        }
    }
    function editFlight(id, destination, origin, departure, seats, cost, image, isPublished) {
        $.ajax({
            method: "PUT",
            url: BASE_URL + "appdata/" + APP_KEY + '/flights/' + id,
            headers: {"Authorization": "Kinvey " + localStorage.getItem("authToken")},
            content: "application/json",
            data: {destination, origin, departure, seats, cost, image, isPublished}
        }).then(function () {
            showInfo("Successfully edited flight.");
        }).catch(showError("Error: Invalid input"));
    }
    function deleteFlight(id) {
        $.ajax({
            method: "DELETE",
            url: BASE_URL + "appdata/" + APP_KEY + '/flights/' + id,
            headers: {"Authorization": "Kinvey " + localStorage.getItem("authToken")}
        }).then(function () {
            showInfo("Successfully deleted flight.");
        }).catch(showError("Error: Invalid flight"));
    }
    function flightDetails(id) {
        $.ajax({
            method: "GET",
            url: BASE_URL + "appdata/" + APP_KEY + '/flights/' + id,
            headers: {"Authorization": "Kinvey " + localStorage.getItem("authToken")}
        }).then(function () {
            showInfo("Successfully loaded flight details.");
        }).catch(showError("Error: Invalid flight"));
    }
    function myFlights() {
        $.ajax({
            method: "GET",
            url: BASE_URL + "appdata/" + APP_KEY + '/flights?query={"_acl.creator":"' + localStorage.getItem("id") + '"}',
            headers: {"Authorization": "Kinvey " + localStorage.getItem("authToken")}
        }).then(function () {
            showInfo("Successfully loaded my flight details.");
        }).catch(showError("Error: Invalid flights"));
    }

    function saveAuth(userData) {
        localStorage.setItem("authToken",userData._kmd.authtoken);
        localStorage.setItem("username",userData.username);
        localStorage.setItem("id",userData._id);
    }
    function validateUser(username,password,repeatPassword) {
        if (typeof username !== "string") {
            showError("Username must be string!");
            return false;
        } else if (username.length<5) {
            showError("Username must be at least 5 characters long!");
            return false;
        } else if (repeatPassword.length===0) {
            showError("Password must not be empty!");
            return false;
        } else if (password !== repeatPassword) {
            showError("Passwords does not match!");
            return false;
        } else {
            return true;
        }
    }
    function handleError(err) {
        console.log(err);
    }
    return {register,login,logout,getFlights,createFlight};
}());