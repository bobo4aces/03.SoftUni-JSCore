function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);
    let product = $(".custom-select");
    let price = $("#price");
    let quantity = $("#quantity");
    let capacity = $("#capacity");
    let sum = $("#sum");
    let submitButton = $(".button");
    product.on("input",function () {
        if (product.val()!=="") {
            submitButton.removeAttr("disabled");
        } else {
            submitButton.attr("disabled","disabled");
        }
    });
    submitButton.on("click",function () {
        let li = $("<li>").text(`Product: ${product.val()} Price: ${price.val()} Quantity: ${quantity.val()}`);
        capacity.val(Number(capacity.val())+Number(quantity.val()));
        submitButton.attr("disabled","disabled");
        if (capacity.val()>=150) {
            capacity.val("full");
            capacity.addClass("fullCapacity");
            product.attr("disabled","disabled");
            price.attr("disabled","disabled");
            quantity.attr("disabled","disabled");
        }
        sum.val(Number(sum.val())+Number(price.val()));
        $(".display").append(li);
        product.val("");
        price.val(1);
        quantity.val(1);
    })
}
