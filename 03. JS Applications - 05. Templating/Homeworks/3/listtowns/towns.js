function attachEvents() {
    $("#btnLoadTowns").click(function () {
        let towns = $("#towns").val().split(', ').map(e=> ({name: e}));
        applyTemplate(towns);
    });

    function applyTemplate(towns) {
        let html = $("#towns-template").html();
        let template = Handlebars.compile(html);
        let result = template(
            {
                t:towns
            });
        $("#root").append(result);
    }
}