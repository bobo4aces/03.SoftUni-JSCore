
function lastMonth (array) {
    let day = Number(array[0]);
    let month = Number(array[1]);
    let year = Number(array[2]);
    let date = new Date();
    if (month<2) {
        date = new Date(year-1,10-month,day);
    } else {
        date = new Date(year,month-2,day);
    }
    let lastMonthDay = new Date();
    function addDays(date, days) {
        let result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }
    for (let i=date; i<addDays(date,31); i=addDays(i,1)) {
        if (i.getDate()>=lastMonthDay.getDate()) {
            lastMonthDay = i;
        }
    }
    console.log(lastMonthDay.getDate());
}

lastMonth([17, 3, 2002]);
lastMonth([13, 12, 2004]);
lastMonth([13, 1, 2004]);