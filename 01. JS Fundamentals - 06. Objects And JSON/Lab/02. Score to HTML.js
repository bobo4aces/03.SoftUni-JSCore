function scoreToHtml (objArr) {
    let objects = JSON.parse(objArr);
    let html = "<table>\n\t<tr><th>name</th><th>score</th></tr>\n";
    for (let object of objects) {
        html+=`\t<tr><td>${htmlEscape(object["name"])}</td><td>${object["score"]}</td></tr>\n`;
    }
    console.log(html+"</table>");
    function htmlEscape (text) {
        let map = {'"': '&quot;', '&': '&amp;', "'": '&#39;', '<': '&lt;', '>': '&gt;'};
        return text.replace(/[\"&'<>]/g, ch=>map[ch]);
    }
}
scoreToHtml('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');
scoreToHtml('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]');