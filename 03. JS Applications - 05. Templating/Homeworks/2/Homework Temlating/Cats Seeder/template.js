$(() => {
    renderCatTemplate();

    function renderCatTemplate() {
        let template = $('#cat-template').html();
        let templateHtml = Handlebars.compile(template);
        let data = {cats: window.cats};
        let result = templateHtml(data);

        $('#allCats').html(result);

        $('.btn-primary').click(function () {
            let element = $(this);
            if (element.text() === 'Show status code') {
                element.text('Hide status code')
            } else {
                element.text('Show status code')
            }
            element.next('div').toggle();
        });
    }
});
