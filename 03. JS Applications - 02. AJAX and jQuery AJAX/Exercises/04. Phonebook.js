function attachEvents() {
    const LOAD_BUTTON = $("#btnLoad");
    const CREATE_BUTTON = $("#btnCreate");
    const PHONEBOOK = $("#phonebook");
    const URL = "https://phonebook-nakov.firebaseio.com/phonebook";
    const PERSON = $("#person");
    const PHONE = $("#phone");
    LOAD_BUTTON.on("click",loadContacts);
    CREATE_BUTTON.on("click",createContact);
    function loadContacts() {
        $.ajax({
            method: "GET",
            url: URL+".json"
        }).then(displayContacts).catch(handleError);
    }

    function displayContacts(contacts) {
        PHONEBOOK.empty();
        let keys = Object.keys(contacts);
        keys.sort((a,b)=>contacts[a].person.localeCompare(contacts[b].person));
        for (let id of keys) {
            let li = $("<li>").text(`${contacts[id].person}: ${contacts[id].phone}`);
            let deleteButton = $("<button>").text("[Delete]");
            deleteButton.on("click",function () {
                $.ajax({
                    method: "DELETE",
                    url: URL+`/${id}.json`,
                }).then(function () {
                    li.remove();
                }).catch(handleError);
            });
            li.append(deleteButton);
            PHONEBOOK.append(li);
        }
    }

    function createContact() {
        let currentPerson = PERSON.val();
        let currentPhone = PHONE.val();
        if (currentPerson.trim()!==""&&currentPhone.trim()!=="") {
            $.ajax({
                method: "POST",
                url: URL+".json",
                data: JSON.stringify({person: currentPerson,phone: currentPhone})
            }).then(loadContacts).catch(handleError);
        }
        PERSON.val("");
        PHONE.val("");
    }
    function handleError(err) {
        console.log(err);
    }
}