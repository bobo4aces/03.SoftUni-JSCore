class ModalDialog {
    constructor(textMessage,callback) {
        this.textMessage = textMessage;
        this.callback = callback;
    }
    addInput(label, name, type) {
        this.dialog = `<div class="overlay">
  <div class="dialog">
    <p>${this.textMessage}</p>
    <label>${label}</label>
    <input name="${name}" type="${type}">
    <button>OK</button>
    <button>Cancel</button>
  </div>
</div>`;
        console.log($("button OK"));
    }
    render() {

    }
}