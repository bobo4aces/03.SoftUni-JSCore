function htmlList(items) {
    return console.log("<ul>\n" +
        items.map(escape).map(
            item => `  <li>${item}</li>`).join("\n") +
        "\n</ul>");
    function escape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}

htmlList(['<b>unescaped text</b>', 'normal text']);