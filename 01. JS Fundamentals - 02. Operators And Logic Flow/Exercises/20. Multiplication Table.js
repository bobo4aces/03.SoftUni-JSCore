function printMultiplicationTable (number) {
    let n = Number(number);
    let output = "<table border=\"1\">\n";
    output+="<tr>";
    for (let i = 0; i <=n; i++) {
        if (i===0) {
            output+=`<th>x</th>`;
        } else {
            output+=`<th>${i}</th>`;
        }
    }
    output+="</tr>\n";
    for (let i = 1; i <=n; i++) {
        output+="<tr>";
        for (let j = 0; j <=n; j++) {
            if (j===0) {
                output+=`<th>${i}</th>`;
            } else {
                output+=`<td>${i*j}</td>`;
            }
        }
        output+="</tr>\n";
    }
    output+="</table>";
    console.log(output);
}
printMultiplicationTable(5);