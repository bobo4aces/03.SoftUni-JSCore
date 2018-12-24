class PaymentManager {
    constructor(title) {
        this.title = title;
    }
    render(id) {
        let table = `<table>
    <caption>${this.title} Payment Manager</caption>
    <thead>
    <tr>
        <th class="name">Name</th>
        <th class="category">Category</th>
        <th class="price">Price</th>
        <th>Actions</th>
    </tr>
    </thead>
    <tbody class="payments">
    </tbody>
    <tfoot class="input-data">
    <tr>
        <td><input name="name" type="text"></td>
        <td><input name="category" type="text"></td>
        <td><input name="price" type="number"></td>
        <td><button>Add</button></td></tr>
    </tfoot>
</table>`;
        $(`#${id}`).append(table);
        let addButton = $(`#${id} table .input-data button`);
        let inputName = $(`#${id} table input[name='name']`);
        let categoryName = $(`#${id} table input[name='category']`);
        let priceName = $(`#${id} table input[name='price']`);
        addButton.on("click",function () {
            let name = inputName.val();
            let category = categoryName.val();
            let price = priceName.val();
            if (name===""||category===""||price==="") {
                return;
            }
            let nameTd = $("<td>").text(name);
            let categoryTd = $("<td>").text(category);
            let priceTd = $("<td>").text(Math.round(Number(price)*100)/100);
            let deleteButton = $(`<button>`).text("Delete");
            deleteButton.on("click", function (ev) {
                let row = ev.target.parentNode;
                row.remove();
            });
            let inputRow = $("<tr>").append(nameTd).append(categoryTd).append(priceTd).append(deleteButton);
            $(`#${id} table .payments`).append(inputRow);
            inputName.val("");
            categoryName.val("");
            priceName.val("");
        });


    }
}