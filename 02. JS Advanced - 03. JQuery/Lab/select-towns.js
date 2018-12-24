function attachEvents() {
    $("ul#items li").on("click", selectTown);
    $("#showTownsButton").on("click",showAll);
    function selectTown () {
        if ($(this).attr("data-selected")) {
            $(this).removeAttr("data-selected");
            $(this).css("background-color","");
        } else {
            $(this).attr("data-selected",true);
            $(this).css("background","#DDD");
        }

    }
    function showAll () {
        let selectedTowns = $("#items li[data-selected=true]");
        let towns = selectedTowns.toArray().map(li=>li.textContent).join(", ");
        $("#selectedTowns").text(`Selected towns: ${towns}`);
    }
}
