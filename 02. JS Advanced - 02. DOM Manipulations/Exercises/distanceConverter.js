function attachEventsListeners() {
    let button = document.getElementById("convert");
    button.addEventListener("click", function () {
        let inputValue = document.getElementById("inputDistance").value;
        let inputUnit = document.getElementById("inputUnits").value;
        let outputUnit = document.getElementById("outputUnits").value;
        let meters = 0;
        switch (inputUnit) {
            case "km": meters=inputValue*1000; break;
            case "m": meters=inputValue; break;
            case "cm": meters=inputValue*0.01; break;
            case "mm": meters=inputValue*0.001; break;
            case "mi": meters=inputValue*1609.34; break;
            case "yrd": meters=inputValue*0.9144; break;
            case "ft": meters=inputValue*0.3048; break;
            case "in": meters=inputValue*0.0254; break;
        }
        let result=0;
        switch (outputUnit) {
            case "km": result=meters/1000; break;
            case "m": result=meters; break;
            case "cm": result=meters/0.01; break;
            case "mm": result=meters/0.001; break;
            case "mi": result=meters/1609.34; break;
            case "yrd": result=meters/0.9144; break;
            case "ft": result=meters/0.3048; break;
            case "in": result=meters/0.0254; break;
        }
        console.log(result);
        document.getElementById("outputDistance").value=result;
    });
}
