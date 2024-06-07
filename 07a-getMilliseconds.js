/*  
    Method instance data yang mengembalikan hasil dalam nilai milidetik dalam waktu setempat.
    Syntax: 
    -getMilliseconds()
    (0- 999): rentang nilai ms.
*/
const moonLanding= new Date("july 20, 1969 00:20:18");
moonLanding.setMilliseconds(123)
console.log("01.", moonLanding.getMilliseconds());

const birthDay = new Date("August 01, 1978 18:40:50:124")
console.log("02.", birthDay.getMilliseconds());

const options ={
  weekday: "long",
  month: "long",
  year: "numeric",
  day: "numeric",
  hour:"numeric",
  minute: "numeric"
}
console.log("03.", Intl.DateTimeFormat("id-ID", options).format(new Date()));