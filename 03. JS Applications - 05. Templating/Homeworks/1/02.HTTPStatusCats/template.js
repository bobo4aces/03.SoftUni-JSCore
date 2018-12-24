$(() => {
    const allCats = $("#allCats");
    const codes = {};
    renderCatTemplate();

    function renderCatTemplate() {
        let source = $("#cat-template").html();
        let template = Handlebars.compile(source);
        codes.cats = window.cats;
        allCats.html(template(codes));

        let showMoreBtn = $(".btn-primary");
        console.log(codes.cats[0].imageLocation)
        console.log("xax")

        showMoreBtn.on("click", function () {
            if ($(this).text() === "Show status code") {
                $(this).text("Hide status code");
            }else{
                $(this).text("Show status code");
            }
            $(this).next().toggle();
        });
    }
});
