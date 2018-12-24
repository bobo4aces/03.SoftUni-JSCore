function attachEvents() {
    $("#btnLoadTowns").on("click", function () {
        let obj = {};
        obj.towns = ($("#towns").val()).split(", ").map(e => {
            return {town: e}
        });

        let template = $("#towns-template").html();
        let func = Handlebars.compile(template);

        let result = func(obj);
        $("#root").html(result);
    });
}