/*
    Method instance dari date yang mengembalikan hasil berupa jam dalam waktu lokal.
    Syntax:
    -getHours();
    rentang waktu(0-23)
*/
const birthday= new Date("March 13, 2008 04:20")
console.log("01.", birthday.getHours());

const birthDay = new Date("August 01, 1978 3:30:")
const options = {
  year: "numeric",
  month: "long",
  weekday: "long",
  day: "numeric"
}
console.log("02.", birthDay.getHours());
console.log("03.", Intl.DateTimeFormat("id-ID", options).format(birthDay));
