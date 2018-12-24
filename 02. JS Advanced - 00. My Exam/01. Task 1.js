function addSticker() {
    let title = $(".title");
    let text = $(".content");
    let addStickerButton = $("#add-sticker");
    let stickerList = $("#sticker-list");
    if (title.val()!=="" && text.val()!=="") {
        let li = $("<li>").addClass("note-content");
        let buttonLink = $("<a>").addClass("button").text("x");
        buttonLink.on("click",function (ev) {
            let parent = ev.target.parentNode;
            parent.remove();
        });
        let h2 = $("<h2>").text(title.val());
        let hr = $("<hr>");
        let textP = $("<p>").text(text.val());
        let sticker = $(li).append(buttonLink).append(h2).append(h2).append(hr).append(textP);
        $(stickerList).append(sticker);
        title.val("");
        text.val("");
    }
}