function attachEvents() {
    $("#refresh").on("click",getInfo);
    $("#submit").on("click",postInfo);
    function getInfo() {
        $.ajax({
            method: "GET",
            url: "https://messenger-b8716.firebaseio.com/.json",
        }).then(displayMessages)
            .catch(displayError);
        function displayMessages(messages) {
            let output = "";
            for (let message in messages) {
                output+=`${messages[message].author}: ${messages[message].content}\n`;
            }
            $("#messages").text(output);
        }
        function displayError(messages) {
            $("#messages").text("Error");
        }
    }
    function postInfo() {
        if ($("#author").val()===""||$("#content").val()==="") {
            return;
        }
        $.ajax({
            method: "POST",
            url: "https://messenger-b8716.firebaseio.com/.json",
            data: JSON.stringify({"author": $("#author").val(),"content":$("#content").val(),"timestamp": Date.now()})
        }).then(postMessages)
            .catch(displayError);
        function postMessages(messages) {
            getInfo();
            $("#author").val("");
            $("#content").val("");
        }
        function displayError(messages) {
            $("#messages").text("Error");
            $("#author").val("");
            $("#content").val("");
        }
    }
}