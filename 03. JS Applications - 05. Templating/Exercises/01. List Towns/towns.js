function attachEvents() {
    const inputField = $("#towns");
    const loadButton = $("#btnLoadTowns");
    const root = $("#root");
    loadButton.on("click",listTowns);
    function listTowns() {
        if (inputField.val().length>0) {
            root.empty();
            let towns = inputField.val().split(", ").map(e => ({name: e}));
            renderTowns(towns);
            inputField.val("");
        }
    }
    function renderTowns(towns) {
        let source = $("#towns-template").html();
        let template = Handlebars.compile(source);
        let rendered = template({towns: towns});
        $("#root").html(rendered);
    }
}