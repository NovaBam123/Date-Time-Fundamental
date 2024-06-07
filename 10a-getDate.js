/*
    merupakan instance Method yang mengembalikan hasil berupa tanggal dalam waktu tersebut dalam waktu lokal.
    Syntax:
    -getDate()
    
    (1- 31): rentang waktu tanggal
    NaN jika data tidak valid
*/
const birthday= new Date("August 19, 1975, 23:15:30");
console.log("01.", birthday.getDate());

const xmas= new Date("1995-12-25T23:15:30")
console.log("02.", xmas.getDate())