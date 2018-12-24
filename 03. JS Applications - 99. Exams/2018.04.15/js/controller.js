const BASE_URL = "https://baas.kinvey.com/";
const APP_KEY = "kid_BJPYVGNS7";
const APP_SECRET = "7a0ced8be8e049149070461987907b24";
const BASE_64 = btoa(APP_KEY + ":" + APP_SECRET);
const AUTH_HEADERS = {"Authorization": "Basic " + BASE_64};

const controller = (function () {
    function registerUser(username, password, repeatPassword) {
        $.ajax({
            method: "POST",
            url: BASE_URL + "user/" + APP_KEY + "/",
            headers: AUTH_HEADERS,
            data: {username, password}
        }).then(function(res) {
            saveAuth(res);
            console.log("Here");
        }).catch(handleError);
    }
    function loginUser(username, password) {
        $.ajax({
            method: "POST",
            url: BASE_URL + "user/" + APP_KEY + "/login",
            headers: AUTH_HEADERS,
            data: {username, password}
        }).then(function (res) {
            saveAuth(res);
            showSuccess("Login Successful.");
        }).catch(handleError);
    }
    function logoutUser() {
        $.ajax({
            method: "POST",
            url: BASE_URL + "user/" + APP_KEY + "/_logout",
            headers: {"Authorization": "Kinvey " + sessionStorage.getItem("authToken")},
        }).then(function () {
            sessionStorage.clear();
            showSuccess("Logout Successful.");
        }).catch(handleError);
    }
    function getActiveReceipt(userId) {
        $.ajax({
            method: "GET",
            url: BASE_URL + "appdata/" + APP_KEY + `/receipts?query={"_acl.creator":"${userId}","active":"true"}`,
            headers: {"Authorization": "Kinvey " + sessionStorage.getItem("authToken")}
        }).then(function (res) {

        }).catch(handleError);
    }
    function getEntriesByReceiptId(receiptId) {
        $.ajax({
            method: "GET",
            url: BASE_URL + "appdata/" + APP_KEY + `/entries?query={"receiptId":"${receiptId}"}`,
            headers: {"Authorization": "Kinvey " + sessionStorage.getItem("authToken")}
        }).then(function (res) {

        }).catch(handleError);
    }
    function createReceipt(active, productCount, total) {
        $.ajax({
            method: "POST",
            url: BASE_URL + "appdata/" + APP_KEY + `/receipts`,
            headers: {"Authorization": "Kinvey " + sessionStorage.getItem("authToken")},
            data: {active, productCount, total}
        }).then(function (res) {

        }).catch(handleError);
    }
    function addEntry(type, qty, price, receiptId) {
        $.ajax({
            method: "POST",
            url: BASE_URL + "appdata/" + APP_KEY + `/entries`,
            headers: {"Authorization": "Kinvey " + sessionStorage.getItem("authToken")},
            data: {type, qty, price, receiptId}
        }).then(function (res) {

        }).catch(handleError);
    }
    function deleteEntry(entryId) {
        $.ajax({
            method: "DELETE",
            url: BASE_URL + "appdata/" + APP_KEY + `/entries/${entryId}`,
            headers: {"Authorization": "Kinvey " + sessionStorage.getItem("authToken")},
        }).then(function (res) {

        }).catch(handleError);
    }
    function getMyReceipt() {
        let userId = sessionStorage.getItem("id");
        $.ajax({
            method: "GET",
            url: BASE_URL + "appdata/" + APP_KEY + `/receipts?query={"_acl.creator":"${userId}","active":"false"}`,
            headers: {"Authorization": "Kinvey " + sessionStorage.getItem("authToken")},
        }).then(function (res) {

        }).catch(handleError);
    }
    function getReceiptDetails(receiptId) {
        $.ajax({
            method: "GET",
            url: BASE_URL + "appdata/" + APP_KEY + `/receipts/${receiptId}`,
            headers: {"Authorization": "Kinvey " + sessionStorage.getItem("authToken")},
        }).then(function (res) {

        }).catch(handleError);
    }
    function commitReceipt(receiptId) {
        let receipt = getEntriesByReceiptId(receiptId);
        $.ajax({
            method: "PUT",
            url: BASE_URL + "appdata/" + APP_KEY + `/receipts/${receiptId}`,
            headers: {"Authorization": "Kinvey " + sessionStorage.getItem("authToken")},
            data: receipt
        }).then(function (res) {

        }).catch(handleError);
    }
    function saveAuth(data) {
        sessionStorage.setItem("authToken",data._kmd.authtoken);
        sessionStorage.setItem("username", data.username);
        sessionStorage.setItem("id", data._id);
    }
    function handleError(err) {
        console.log(err);
    }
    return {registerUser,loginUser,logoutUser,getActiveReceipt,createReceipt,addEntry,deleteEntry,getMyReceipt,
        getReceiptDetails,commitReceipt};
}());