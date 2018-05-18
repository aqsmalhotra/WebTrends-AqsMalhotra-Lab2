var days;
(function (days) {
    days[days["Sunday"] = 0] = "Sunday";
    days[days["Monday"] = 1] = "Monday";
    days[days["Tuesday"] = 2] = "Tuesday";
    days[days["Wednesday"] = 3] = "Wednesday";
    days[days["Thursday"] = 4] = "Thursday";
    days[days["Friday"] = 5] = "Friday";
    days[days["Saturday"] = 6] = "Saturday";
})(days || (days = {}));
var months;
(function (months) {
    months[months["January"] = 0] = "January";
    months[months["February"] = 1] = "February";
    months[months["March"] = 2] = "March";
    months[months["April"] = 3] = "April";
    months[months["May"] = 4] = "May";
    months[months["June"] = 5] = "June";
    months[months["July"] = 6] = "July";
    months[months["August"] = 7] = "August";
    months[months["September"] = 8] = "September";
    months[months["October"] = 9] = "October";
    months[months["November"] = 10] = "November";
    months[months["December"] = 11] = "December";
})(months || (months = {}));
console.log(days.Sunday);
//html elements
var pTodayDate = document.getElementById("p--today-date");
var bdayBtn = document.getElementById("button--birthday");
var bdayMsg = document.getElementById("p--birthday-message");
var bdayPick = document.getElementById("input--date-picker");
var today = new Date();
console.log(today.getMonth());
//Part 1
pTodayDate.innerHTML = "Today is " + days[today.getDay()] + " " + months[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear();
//Part 2
function makeDateString(inputDate) {
    // if today is user's birthday
    if ((inputDate.getDate()) === today.getDate()) {
        return 'Happy Birthday';
    }
    //today is not user's birthday
    var thisYearsBday = new Date();
    thisYearsBday.setDate(inputDate.getDate());
    thisYearsBday.setFullYear(inputDate.getFullYear());
    thisYearsBday.setMonth(inputDate.getMonth());
    return "Your birthday is " + days[thisYearsBday.getDay()] + " " + months[inputDate.getMonth()] + " " + inputDate.getDate() + ", " + today.getFullYear();
}
bdayBtn.onclick = function () {
    //get bday from input
    var userBday = bdayPick.value;
    var userBdate = new Date(userBday);
    //output bday message
    bdayMsg.innerHTML = makeDateString(userBdate);
};
