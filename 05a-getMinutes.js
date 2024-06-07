/*  
    method instance object date yang mengembalikan hasil berupa menit dalam waktu setempat.
    syntax: 
    -getMinutes()
    (0- 59): rentang minute
*/
const dDay= new Date("March 13, 2008 04:17")
console.log("01.", dDay.getMinutes());

const birthday = new Date("August 01 1978, 15:30");
const options = {
  weekday : "long",
  month: "long",
  year: "numeric",
  day : "numeric",
  hour: "numeric",
  minute: "numeric"
}
console.log(new Intl.DateTimeFormat("en-US", options).format(birthday));
console.log(new Intl.DateTimeFormat("id-ID", options).format(new Date()));
