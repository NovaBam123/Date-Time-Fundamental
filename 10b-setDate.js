/*
    Merupakan metode instance untuk merubah tanggal dalam suatu bulan dalam waktu setempat.
    Syntax:
    -setDate(dateValue)
    (0- 31): merupakan rentang waktu untuk date
*/
const dDay= new Date("August 19, 1975, 23:15:30");
dDay.setDate(24);
console.log("01.", dDay.getDate());
dDay.setDate(32);
console.log("02.", dDay.getDate());// menyesuaikan jadi tanggal 1 sep
console.log("03.", dDay);

