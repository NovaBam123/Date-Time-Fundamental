/* 
    Method dari instance yang merubah hari dalam waktu lokal.
    Syntax: 
    setDate(dateValue)
    -Z: Zulu Time, menunjukan waktu yang ditampilkan adalah dalam format UTC.
    -UTC: Coordinate Universal Time: standar waktu international yang digunakan sebagai referensi waktu global, dan tidak terpengaruh zona waktu lokal.
*/
const urDay= new Date("August 19, 1975, 23:15:30");
result= urDay.toString()
console.log("01.", result)

const birthday = new Date("July 19, 1978 23:15:30");
birthday.setDate(24);
console.log("02.", birthday);
birthday.setDate(32);
console.log("03.", birthday.toString());
const currentDate = new Date();
console.log("04.", currentDate.toString());

const bigDay = new Date(1962, 6, 7, 12);
console.log("05.", bigDay.toString())
bigDay.setDate(-50);//50 hari sebelum tanggal tersebut
console.log("06.", bigDay.toString());

const a= new Date(1978, 7, 1)
console.log("07.", a);