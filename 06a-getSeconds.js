/*
    Methode instanse objek Date yang mengembalikan hasil berupa detik dalam waktu setempat.
    Syntax:
    - getSeconds();
    (0- 59): rentang nilai detik
*/
const moonLanding= new Date("July 20, 1969 00:20:18")
console.log("01.", moonLanding.getSeconds());

const birthDay = new Date("August 01, 1978 15:40:50");
console.log(birthDay.getSeconds());

const pilihan = {
  weekday : "long",
  month: "long",
  year: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second : "numeric"
}
console.log(Intl.DateTimeFormat("id-ID", pilihan).format(new Date()));
console.log(Intl.DateTimeFormat("id-ID", pilihan).format(birthDay));