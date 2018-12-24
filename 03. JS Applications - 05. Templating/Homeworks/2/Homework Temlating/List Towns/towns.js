async function attachEvents() {
    const root = $('#root');
    let temp = $('#towns-template').html();
    let template = Handlebars.compile(temp);
    $('#btnLoadTowns').on('click', function () {
        let townsInput = $('#towns').val();
        if (townsInput !== '') {
            let townsArr = townsInput.split(', ');
            let html = template({towns: townsArr});
            $('#root').append(html)
        }
    });
}