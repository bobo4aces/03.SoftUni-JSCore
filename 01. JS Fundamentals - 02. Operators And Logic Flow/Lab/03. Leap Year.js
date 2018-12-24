function isLeapYear (year) {
    if ((Number(year)%4===0&&Number(year)%100!==0)||Number(year)%400===0) {
        console.log("yes");
    } else {
        console.log("no");
    }
}
isLeapYear(1999);
isLeapYear(2000);
isLeapYear(1900);