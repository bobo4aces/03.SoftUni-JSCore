function calendar([day, month, year])
{
    // TODO: return the HTML text holding the calendar table
    let calendarTable = "<table>\n\t<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n\t<tr>";
    let date = new Date(year,month-1,day);
    let startDate = new Date();
    //validation for start date
    if (date.getMonth()===0) {
        startDate.setFullYear(year-1,11,31);
    } else {
        startDate.setFullYear(year,month-1,1);
    }
    //loop for setting start date of the first week of the month
    while (startDate.getDay()!== 0) {
        startDate.setDate(startDate.getDate()-1);
    }
    let endDate = new Date();
    //validation for end date
    if (date.getMonth()===11) {
        endDate.setFullYear(year+1,0,1);
    } else {
        endDate.setFullYear(year,month,1);
    }
    //loop for setting end date of the last week of the month
    while (endDate.getDay()< 6&&endDate.getDay()!==0) {
        endDate.setDate(endDate.getDate()+1);
    }
    if (endDate.getDay()===0) {
        endDate.setDate(endDate.getDate()-1);
    }
    for (let i=startDate; i<=endDate; i.setDate(i.getDate()+1)) {
        let monthClass="";
        if (i.getMonth() !== date.getMonth()) {
            monthClass=" class=\"prev-month\"";
            if (i.getMonth() === endDate.getMonth()) {
                monthClass = " class=\"next-month\"";
            }
        } else if (i.getDate() === date.getDate()) {
            monthClass=" class=\"today\"";
        }
        calendarTable+=`<td${monthClass}>${i.getDate().toString()}</td>`;
        if (i.getDay()===6) {
            if ((i.getDate()!==endDate.getDate())||(i.getMonth()!==endDate.getMonth())) {
                calendarTable+="</tr>\n\t<tr>";
            } else {
                calendarTable+="</tr>\n</table>";
            }
        }
    }
    console.log(calendarTable);
}
calendar([1,1,1990]);