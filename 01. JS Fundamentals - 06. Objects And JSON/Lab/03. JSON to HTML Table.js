function JsonToHtmlTable (objArr) {
    let objects = JSON.parse(objArr);
    let html = "<table>\n\t<tr>";
    for (let key of Object.keys(objects[0])) {
        html += `<th>${key}</th>`;
    }
    html += "</tr>\n";
    for (let object of objects) {
        html += "\t<tr>";
        for (let key of Object.keys(objects[0])) {
            html += `<td>${htmlEscape(object[key].toString())}</td>`;
        }
        html +="</tr>\n";
    }
    html+="</table>";
    console.log(html);
    function htmlEscape (text) {
        let map = {'"': '&quot;', '&': '&amp;', "'": '&#39;', '<': '&lt;', '>': '&gt;'};
        return text.replace(/[\"&'<>]/g, ch=>map[ch]);
    }
}
JsonToHtmlTable('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]');
JsonToHtmlTable('[{"Name":"Pesho <\div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]');