/*
    Method instance object yang merubah detik dan milidetik dalam waktu setempat.
    Syntax:
    -setSeconds(secondsValue)
    -setSeconds(secondsValue, msValue) 
*/
const dDay= new Date("August 19, 1975 23:15:30")
dDay.setSeconds(19)
console.log("01.", dDay);
console.log("02.", dDay.getSeconds());