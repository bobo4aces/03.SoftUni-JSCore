class Dialog {
    constructor(message,func) {
        this.message = message;
        this.func = func;
        this.objects = {};
    }
    set message(value) {
        if (typeof value === "string") {
            this._message = value;
        }
    }
    set func(value) {
        if (typeof value === "function") {
            this._func = value;
        }
    }
    addInput(label, name, type) {
        let inputField = `<div class="overlay">
  <div class="dialog">
    <p>${this._message}</p>
    <label>${label}</label>
    <input name="${name}" type="${type}">
  </div>
</div>`;
        $("body").append(inputField);
        let okButton = $("<button>").text("OK");
        let cancelButton = $("<button>").text("Cancel");
        let obj = {};
        okButton.on("click", function() {
            let inputVal = $(`input[name=${name}]`).val();
            if (inputVal!=="") {
                obj[`${name}`] = inputVal;
            }
            console.log(obj);
            $(".overlay").remove()
        });
        cancelButton.on("click", function () {
            $(".overlay").remove()
        });
        $(".dialog").append(okButton);
        $(".dialog").append(cancelButton);

    }
    render() {
        //;
    }
}