/*  
  Mengubah bulan dan hari dari instance object berdasarkan waktu lokal.
  Syntax: 
  -setMonth(monthValue)
  -setMonth(monthValue, dateValue)
  parameter:
  (0-11): January-Desember
  (1-31): tanggal
  - jika param tidak disertakan defaut parameter: getDate() 
*/
const urDay= new Date();
console.log("01.", urDay);

const bigDay = new Date("August 19, 1975 23:15:20");
bigDay.setMonth(3);
console.log(bigDay.getMonth());
console.log(bigDay.toString());
console.log(bigDay.toISOString());

const endOfMonth= new Date(2016, 7, 31)//7: month, 31: date
endOfMonth.setMonth(1);
console.log(endOfMonth.toString());//karena februari berisi 29 hari maka js menyesuaikan-nya pd tgl 2 maret hasil: Wed 2 Mar 2016 00:00:00