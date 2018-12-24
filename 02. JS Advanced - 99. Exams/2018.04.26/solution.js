class PublicTransportTable {
    constructor(town) {
        this.town = town;
        let str = $("caption").text().replace("{Town name}",this.town);
        str = str.replace("{Town name}",this.town);
        $("caption").text(str);
    }
    addVehicle(obj) {
        let vehicleInfoTable = $(".vehicles-info");
        let type = $("<td>").text(`${obj.type}`);
        let name = $("<td>").text(`${obj.name}`);
        let button = $("<button>").text("More Info");
        button.on("click",function (event) {
            console.log(event);
            if (button.text()==="More Info") {
                button.text("Less Info");
                $(".more-info").attr("hidden");
            } else {
                button.text("More Info");
                $(".more-info").removeAttr("hidden");
            }
        });
        let buttonTd = $("<td>").append(button);
        let row = $("<tr class='show-info'>").append(type).append(name).append(buttonTd);
        $(vehicleInfoTable).append(row);
        let route = $("<tr>").append($("<td>").text(`Route: ${obj.route}`));
        let price = $("<tr>").append($("<td>").text(`Price: ${obj.price}`));
        let driver = $("<tr>").append($("<td>").text(`Driver: ${obj.driver}`));
        let td = $("<td colspan=\"3\">");
        let tbody = $("<tbody>").append(route).append(price).append(driver);
        let table = $("<table>").append(tbody);
        let moreInfo = $("<tr class=\"more-info\">");
        let colspan = $("<td colspan=\"3\">");
        let moreInfoRow = $(moreInfo).append(td).append(table);
        $(vehicleInfoTable).append(moreInfoRow);
    }
}