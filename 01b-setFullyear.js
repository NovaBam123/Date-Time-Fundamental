/*  
    - Berfungsi untuk mengubah tahun, bulan dan tanggal berdasarkan waktu lokal time.
    Syntax: 
    - setfullYear(yearValue);
    - setfullYear(yearValue, monthValue);
    - setfullYear(yearValue, monthValue, dateValue);
    
    integer yang mewakili bulan-> 0: January 1: February  
    setFullYear() akan mengubah objek Date dan akan mempengaruhi waktu lokal. sehingga saat merubah tanggal dan waktu perlu diperhatikan pengaturan zona waktu saat perubahan tsb.
*/
const yourDate= new Date("August 19, 1975 23:15:30");
yourDate.setFullYear(1969);
console.log("01.", yourDate.getFullYear());
yourDate.setFullYear(10);
console.log("02.", yourDate.getFullYear());

/* setFullYear mengembalikan nilai dalam bentuk timestamp dari object date yang sudah diubah, yang merupakan reprentasi dari tanggal dan waktu yang telah diatur.
    -jika parameter pada setFullYear() bukanlah nilai numerik yang valid-> NaN atau undefined maka akan mengembalikan hasil "NaN" sebagai timeStamp-nya.
*/

/*  DESCRIPTION
    - ketika parameter tidak disertakan maka nilai default-nya yg dikembalikan adalah getMonth() dan getDate()
    - jika memberikan parameter diluar rentang yang diharapkan misal: 15 maka object akan menyesuaikan..rentang valid(0- 11) maka: 15- (yearValue+ 1)= 3 maka bulan diatur pada bulan April. 
*/

const birthday = new Date("August 01, 1978, 10.15");
birthday.setFullYear(1980, 0, 31);
console.log("03.", birthday.getFullYear());
birthday.setFullYear(2002);
console.log("04.", birthday.getFullYear());
const options = {
  weekday : "long",
  month: "long",
  year: "numeric",
  day: "numeric"
}
console.log("05.", Intl.DateTimeFormat("id-ID", options).format(birthday))

//rentang bulan 0-11 saat dibuat setFullYear di 15
//dia mengatur ('yearvalue + 1`) dan nilai 3 utk bulan-nya
/*toISOString():
Metode ini mengembalikan string yang merepresentasikan tanggal dan waktu dalam format ISO 8601.
Format umumnya seperti "YYYY-MM-DDTHH:mm:ss.sssZ", di mana:
YYYY adalah tahun empat digit.
MM adalah bulan dua digit (01 hingga 12).
DD adalah tanggal dua digit (01 hingga 31).
THH:mm:ss.sss adalah jam, menit, detik, dan milidetik (opsional).
Z menunjukkan bahwa waktu dalam UTC (Zulu Time).*/

const currentDate = new Date();
console.log("06.", currentDate.toISOString()); 
currentDate.setFullYear(2025, 15, 10);
console.log("07.", currentDate.toString());