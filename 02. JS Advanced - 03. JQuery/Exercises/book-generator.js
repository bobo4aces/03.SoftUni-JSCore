function createBook(selector, title, author, isbn) {
    let container = $(selector);
    let bookCounter = (function () {
        let counter = 0;
        counter++;
        return ()=>`book${counter}`;
    })();
    let bookDiv = $("<div>");
    $(bookDiv).attr("id",bookCounter());
    $(bookDiv).css("border","none");
    let titleParagraph = $("<p>");
    $(titleParagraph).attr("class","title");
    $(titleParagraph).text(title);
    $(titleParagraph).appendTo(bookDiv);
    let authorParagraph = $("<p>");
    $(authorParagraph).attr("class","author");
    $(authorParagraph).text(author);
    $(authorParagraph).appendTo(bookDiv);
    let isbnParagraph = $("<p>");
    $(isbnParagraph).attr("class","isbn");
    $(isbnParagraph).text(isbn);
    $(isbnParagraph).appendTo(bookDiv);
    let selectButton = $("<button>");
    selectButton.text("Select");
    let deselectButton = $("<button>");
    deselectButton.text("Deselect");
    selectButton.on("click", function () {
        $(bookDiv).css("border","2px solid blue")
    });
    deselectButton.on("click", function () {
        $(bookDiv).css("border","none")
    });
    $(selectButton).appendTo(bookDiv);
    $(deselectButton).appendTo(bookDiv);
    $(bookDiv).appendTo(container);
}
