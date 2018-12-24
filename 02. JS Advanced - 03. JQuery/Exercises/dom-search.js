function domSearch(selector,isCaseSensitive) {
    let container = $(selector);
    container.attr("class","items-control");

    let addDiv = $("<div>");
    addDiv.attr("class", "add-controls");
    let addLabel = $("<label>");
    addLabel.text("Enter text:");
    addLabel.appendTo(addDiv);
    let addInput=$("<input>");
    addInput.appendTo(addLabel);
    let addButton = $("<a>");
    addButton.attr("class","button");
    addButton.css("display","inline-block");
    addButton.text("Add");
    addButton.appendTo(addDiv);
    addDiv.appendTo(container);

    let searchDiv = $("<div>");
    searchDiv.attr("class", "search-controls");
    let searchLabel = $("<label>");
    searchLabel.text("Search:");
    searchLabel.appendTo(searchDiv);
    let searchInput=$("<input>");
    searchInput.appendTo(searchLabel);
    searchDiv.appendTo(container);

    let resultDiv = $("<div>");
    resultDiv.attr("class", "result-controls");
    let list = $("<ul>");
    list.attr("class","items-list");
    list.appendTo(resultDiv);
    resultDiv.appendTo(container);
    addButton.on("click", addItem);
    searchInput.on("input", function () {
        let listArray = $(".result-controls li").toArray();
        let searchText = new RegExp(searchInput.val(),isCaseSensitive ? "" : "i");
        for (let element of listArray) {
            if (searchText.test(element.textContent.slice(1))) {
                $(element).css("display","block");
            } else {
                $(element).css("display","none");
            }
        }
    });

    function addItem() {
        let input = $("<strong>");
        input.text(addInput.val());
        let listItem = $("<li>");
        listItem.attr("class","list-item");
        let listButton = $("<a>");
        listButton.attr("class","button");
        listButton.text("X");
        listButton.on("click", function () {
            listItem.remove();
        });
        listButton.appendTo(listItem);
        input.appendTo(listItem);
        listItem.appendTo(list);
        addInput.val("");
    }
    container.appendTo("body");
}
