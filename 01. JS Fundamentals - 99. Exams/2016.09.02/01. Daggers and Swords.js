function daggersAnsSwords (array) {
    let html="<table border=\"1\">\n" +
        "<thead>\n" +
        "<tr><th colspan=\"3\">Blades</th></tr>\n" +
        "<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>\n" +
        "</thead>\n" +
        "<tbody>\n";
    for (let i = 0; i < array.length; i++) {
        let length = parseInt(array[i]);
        if (length>10) {
            let type="dagger";
            if (length>40) {
                type="sword";
            }
            let application="";
            if (length%5===1) {
                application="blade";
            } else if (length%5===2) {
                application="quite a blade";
            } else if (length%5===3) {
                application="pants-scraper";
            } else if (length%5===4) {
                application="frog-butcher";
            } else if (length%5===0) {
                application="*rap-poker";
            }
            html+=`<tr><td>${length}</td><td>${type}</td><td>${application}</td></tr>\n`;
        }
    }
    html+="</tbody>\n" +
        "</table>\n";
    console.log(html);
}
daggersAnsSwords([
    "17.8",
    "19.4",
    "13",
    "55.8",
    "126.96541651",
    "3"
]);