enum days {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

enum months {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
}

console.log(days.Sunday);

//html elements

let pTodayDate = document.getElementById("p--today-date");
let bdayBtn = document.getElementById("button--birthday");
let bdayMsg = document.getElementById("p--birthday-message");
let bdayPick = document.getElementById("input--date-picker");


let today : Date = new Date();

console.log(today.getMonth());

//Part 1
pTodayDate.innerHTML = `Today is ${days[today.getDay()]} ${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;

//Part 2

function makeDateString(inputDate: Date) : string{

    // if today is user's birthday
    if((inputDate.getDate()) === today.getDate())
    {
      return 'Happy Birthday';
    }

    //today is not user's birthday
    let thisYearsBday = new Date();
    thisYearsBday.setDate(inputDate.getDate());
    thisYearsBday.setFullYear(inputDate.getFullYear());
    thisYearsBday.setMonth(inputDate.getMonth());

    return `Your birthday is ${days[thisYearsBday.getDay()]} ${months[inputDate.getMonth()]} ${inputDate.getDate()}, ${today.getFullYear()}`
}

bdayBtn.onclick = function () {
  //get bday from input
  let userBday : string = bdayPick.value;
  let userBdate : Date = new Date(userBday);

  //output bday message
  bdayMsg.innerHTML = makeDateString(userBdate);

}
