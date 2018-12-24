$(() => {
    renderCatTemplate();

    function renderCatTemplate() {
        // TODO: Render cat template and attach events
        $(".btn-primary").click(function () {
            if ($(this).text() === 'Show status code') {
                $(this).text('Hide status code');
                let catNum = $(this).parent().parent().find("img").attr('src');
                let regex = /images\/([\w\d]+)\.jpg/;
                let html = $("#cat-template").html();
                let template = Handlebars.compile(html);
                if (regex.test(catNum)) {
                    $(this).parent().find('div').remove();
                    let catId = regex.exec(catNum)[1];
                    let cat = cats.find(c => c.catId === catId);
                    let result = template(cat);
                    $(this).parent().append(result);
                }
            } else {
                $(this).parent().find('div').remove();
                $(this).text('Show status code');
            }
        })

        let cats = [
            {catId: "cat100", id: "100", status: "Continue"},
            {catId: "cat200", id: "200", status: "Ok"},
            {catId: "cat204", id: "204", status: "No content"},
            {catId: "cat301", id: "301", status: "Moved permanently"},
            {catId: "cat304", id: "304", status: "Not modified"},
            {catId: "cat400", id: "400", status: "Bad request"},
            {catId: "cat404", id: "404", status: "Not Found"},
            {catId: "cat406", id: "406", status: "Not Acceptable"},
            {catId: "cat410", id: "410", status: "Gone"},
            {catId: "cat500", id: "500", status: "Internal Server Error"},
            {catId: "cat511", id: "511", status: "Network Authentication Required"},
        ];
    }
})
