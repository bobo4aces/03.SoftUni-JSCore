function attachEvents() {
    const SUBMIT_BUTTON = $("#submit");
    const LOCATION_URL = "https://judgetests.firebaseio.com/locations.json";
    const LOCATION = $("#location");
    const CURRENT = $("#current");
    const UPCOMING = $("#upcoming");
    const CONDITIONS = {"Sunny": "&#x2600;", "Partly sunny": "&#x26C5;", "Overcast": "&#x2601;", "Rain": "&#x2614;", "Degrees": "&#176;", };
    SUBMIT_BUTTON.on("click", function () {
        $.get({
            url: LOCATION_URL
        }).then(getLocations).catch(handleError);
    });
    function getLocations(locations) {
        for (let location of locations) {
            if (location.name===LOCATION.val()) {
                $.get({
                    url: `https://judgetests.firebaseio.com/forecast/today/${location.code}.json`,
                }).then(getCurrentCondition).catch(handleError);
                $.get({
                    url: `https://judgetests.firebaseio.com/forecast/upcoming/${location.code}.json `,
                }).then(getThreeDayForecast).catch(handleError);
            }
        }
    }
    function getThreeDayForecast(conditionInfo) {
        UPCOMING.find("span").remove();
        let name = conditionInfo.name;
        for (let day in conditionInfo.forecast) {
            console.log(day);
            let upcomingSpan = $("#upcoming");
            let upcomingClass = $("<span class='upcoming'></span>");
            let lowTemp = conditionInfo.forecast[day].low;
            let highTemp = conditionInfo.forecast[day].high;
            let condition = conditionInfo.forecast[day].condition;
            let symbol = CONDITIONS[condition];
            upcomingClass.append(`<span class="symbol">${symbol}</span>`);
            upcomingClass.append(`<span class="forecast-data">${lowTemp}&deg;/${highTemp}&deg;</span>`);
            upcomingClass.append(`<span class="forecast-data">${condition}</span>`);
            upcomingSpan.append(upcomingClass);
            UPCOMING.append(upcomingSpan);
            $("#forecast").css("display","inline");
        }

    }
    function getCurrentCondition(conditionInfo) {
        CURRENT.find("span").remove();
        let name = conditionInfo.name;
        let lowTemp = conditionInfo.forecast.low;
        let highTemp = conditionInfo.forecast.high;
        let condition = conditionInfo.forecast.condition;
        let symbol = CONDITIONS[condition];
        CURRENT.append(`<span class="condition symbol">${symbol}</span>`);
        let spanCondition = $(`<span class="condition">`);
        spanCondition.append(`<span class="forecast-data">${name}</span>`);
        spanCondition.append(`<span class="forecast-data">${lowTemp}&deg;/${highTemp}&deg;</span>`);
        spanCondition.append(`<span class="forecast-data">${condition}</span>`);
        CURRENT.append(spanCondition);
        $("#forecast").css("display","inline");
    }
    function handleError(err) {
        console.log(err.status);
    }
}