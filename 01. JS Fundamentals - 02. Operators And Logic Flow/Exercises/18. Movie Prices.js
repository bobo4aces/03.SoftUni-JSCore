    function calculateMovieTicketPrice (array) {
        let price = 0;
            if (array[0].toLowerCase() === "The Godfather".toLowerCase()) {
                if (array[1].toLowerCase() === "Monday".toLowerCase()) {
                    price = 12;
                } else if (array[1].toLowerCase() === "Tuesday".toLowerCase()) {
                    price = 10;
                } else if (array[1].toLowerCase() === "Wednesday".toLowerCase() || array[1].toLowerCase() === "Friday".toLowerCase()) {
                    price = 15;
                } else if (array[1].toLowerCase() === "Thursday".toLowerCase()) {
                    price = 12.50;
                } else if (array[1].toLowerCase() === "Saturday".toLowerCase()) {
                    price = 25;
                } else if (array[1].toLowerCase() === "Sunday".toLowerCase()) {
                    price = 30;
                } else {
                    console.log("error".toLowerCase());
                }

            } else if (array[1].toLowerCase() === "Monday".toLowerCase() || array[1].toLowerCase() === "Tuesday".toLowerCase() ||
                array[1].toLowerCase() === "Wednesday".toLowerCase() || array[1].toLowerCase() === "Thursday".toLowerCase() || array[1].toLowerCase() === "Friday".toLowerCase()) {
                if (array[0].toLowerCase() === "Schindler's List".toLowerCase()) {
                    price = 8.50;
                } else if (array[0].toLowerCase() === "Casablanca".toLowerCase()) {
                    price = 8;
                } else if (array[0].toLowerCase() === "The Wizard of Oz".toLowerCase()) {
                    price = 10;
                } else {
                    console.log("error".toLowerCase());
                }
            } else if (array[1].toLowerCase() === "Saturday".toLowerCase() || array[1].toLowerCase() === "Sunday".toLowerCase()) {
                if (array[0].toLowerCase() === "Schindler's List".toLowerCase() || array[0].toLowerCase() === "The Wizard of Oz".toLowerCase()) {
                    price = 15;
                } else if (array[0].toLowerCase() === "Casablanca".toLowerCase()) {
                    price = 10;
                } else {
                    console.log("error".toLowerCase());
                }
            } else {
                console.log("error".toLowerCase());
            }
            if (price!==0) {
                console.log(price);
            }
    }
calculateMovieTicketPrice([
    "The Godfather",
    "Friday"
]);
calculateMovieTicketPrice([
    "casablanca",
    "sunday"
]);
calculateMovieTicketPrice([
    "Schindler's LIST",
    "monday"
]);
calculateMovieTicketPrice([
    "SoftUni",
    "Nineday"
]);