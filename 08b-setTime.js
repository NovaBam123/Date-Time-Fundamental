/*  
    merupakan method dari instance date yang merubah waktu tersebut menjadi timeStamp 
    Syntax:
    -setTime(timeValue)
    Hasil dari setTime merupakan Timestamp waktu berlalu dari epochTime.
*/
const launchDate = new Date("July 1, 1999, 12:00:00")
const futureDate= new Date()
futureDate.setTime(launchDate.getTime());
console.log("01.", futureDate.toString());

const fiveMinutesinMills = 5*60*1000;
futureDate.setTime(futureDate.getTime()+ fiveMinutesinMills);
console.log("02.", futureDate.toString());


