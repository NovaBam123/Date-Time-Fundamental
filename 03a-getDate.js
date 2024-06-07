/*  
    Method date dari object instance yang mengembalikan hasil tanggal pada hari tersebut, dalam waktu lokal.
    Syntax: 
    getDate();
    1-31 integer yang mempresentasikan tanggal jika data tidak valid hasil akan NaN. 
*/
const xMas= new Date("1995-12-25T23:15:30").getDate()
console.log("01.", xMas);

const birthday = new Date("August 01 1978, 15:15:30");
const date1= birthday.getDate();
console.log("02.", date1);