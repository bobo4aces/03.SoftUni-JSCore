function validate() {
    let username = $("#username");
    let email = $("#email");
    let password = $("#password");
    let confirmPassword = $("#confirm-password");
    let isCompany = $("#company");
    let companyInfo = $("#companyInfo");
    let companyNumber = $("#companyNumber");
    let submitButton = $("#submit");
    let validationDiv = $("#valid");
    let allValid = true;
    isCompany.on("change", function () {
        if (isCompany.is(":checked")) {
            companyInfo.css("display","block");
        } else {
            companyInfo.css("display","none");
        }
    });
    submitButton.on("click", function (ev) {
        ev.preventDefault();
        isValid(username,/^[A-Za-z0-9]{3,20}$/g);
        isValid(email,/^.*?@.*?\..*$/g);
        if (password.val()===confirmPassword.val()) {
            isValid(password,/^\w{5,15}$/g);
            isValid(confirmPassword,/^\w{5,15}$/g);
        } else {
            password.css("border","solid red");
            confirmPassword.css("border","solid red");
            allValid=false;
        }
        if (isCompany.is(":checked")) {
            if (1000<=Number(companyNumber.val())&&Number(companyNumber.val())<=9999) {
                companyNumber.css("border","none")
            } else {
                companyNumber.css("border","solid red");
                allValid=false;
            }
        }
        if (allValid) {
            validationDiv.css("display","block");
        } else {
            validationDiv.css("display","none");
        }
        allValid=true;
    });
    function isValid(input,pattern) {
        if (pattern.test(input.val())) {
            input.css("border","none");
        } else {
            input.css("border","solid red");
            allValid=false;
        }
    }
}
