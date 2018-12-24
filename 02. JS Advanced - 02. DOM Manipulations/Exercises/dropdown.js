function addItem () {
    let newText = document.getElementById("newItemText");
    let newValue = document.getElementById("newItemValue");
    let optionElement = document.createElement("option");
    optionElement.text = newText.value;
    optionElement.value = newValue.value;
    let selectMenu = document.getElementById("menu");
    selectMenu.appendChild(optionElement);
    newText.value="";
    newValue.value="";
}