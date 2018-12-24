function jsonsTable (array) {
    let html = "<table>\n";
    for (let i=0; i<array.length; i++) {
        let employeeData = JSON.parse(array[i]);
        html+=`	<tr>\n\t\t<td>${employeeData['name']}</td>\n`;
        html+=`\t\t<td>${employeeData['position']}</td>\n`;
        html+=`\t\t<td>${employeeData['salary']}</td>\n\t<tr>\n`;
    }
    console.log(html+"</table>");
}
jsonsTable([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
]);