/*
    merupakan method incstance object yang mengembalikan hasil hari dalam satu minggu dalam waktu setempat. (hasil berupa nilai numeric).
    Syntax: 
    -getDay()
    Sama seperti bulan january =0 -> jan-Des= 0-11
    Hari minggu disini = 0 -> minggu - sabtu = 0-6
*/

const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
const birthDay = new Date("August 01, 1978 23:15:30");
const day = birthDay.getDay()
console.log("01.", day,"=",dayNames[day]);

const birthDay2 = new Date("january 31, 2001 15:40:20")
const day2 = birthDay2.getDay()
console.log("02.", dayNames[day2]);

const options = {
  weekday : "long",
  month: "long",
  year : "numeric",
  day: "numeric"
}
console.log("03.", Intl.DateTimeFormat("id-ID", options).format(birthDay));
console.log("04.", Intl.DateTimeFormat("id-ID", options).format(new Date()));

