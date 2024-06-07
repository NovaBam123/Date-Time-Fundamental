/*
    -Mengembalikan nilai bulan untuk instance obj tersebut berdasarkan waktu local. Nilai 0: january.
    -Syntax: 
    getMonth()
    -rentang(0- 11)
*/
const moonLanding= new Date("July 20, 69 00:20:16");
console.log("01.", moonLanding.getMonth());

const valentines= new Date("1995-02-14");
const monthVal= valentines.getMonth();
const monthNames= ["january", "February", "March", "April"];
console.log("02.", monthNames[monthVal]);

const sampleDate = new Date("1996-12-25T23:15:30");
//ini format iso 8601 dan T sebagai pemisah tanggal dan waktu
//format tanggal YYYY-MM-DD
//format waktu HH:mm:ss
console.log("03.", sampleDate.getMonth());

const independentDay = new Date ("1945-08-17")
const month = independentDay.getMonth();
const monthName= 
["Jan", "Feb", "Maret", "Apr", "Mei", "Juny", "July", "Agustus", "Sept", "Okt", "Nov", "Des"];
console.log("04.", monthName[month]);
const options = {
  weekday: 'long', // menampilkan nama hari
  year: 'numeric', // menampilkan tahun
  month: 'long',   // menampilkan nama bulan
  day: 'numeric',   // menampilkan tanggal
  hour: 'numeric',  // menampilkan jam
  minute: 'numeric', // menampilkan menit
  second: 'numeric' // menampilkan detik
};

console.log("05.", new Intl.DateTimeFormat("en-US", options).format(new Date()));
console.log("06.", new Intl.DateTimeFormat("en-US", options).format(independentDay));
console.log("07.", new Intl.DateTimeFormat("id-ID", options).format(independentDay));
console.log("08.", new Date().toString());
//utk format international "en-US"
//Utk format indonesia "id-ID"

/*Objek options yang digunakan dengan Intl.DateTimeFormat memiliki beberapa properti yang dapat dikonfigurasi untuk memformat tanggal dan waktu sesuai dengan preferensi pengguna. Beberapa properti umumnya termasuk:

weekday:
Mengontrol apakah menampilkan nama hari atau tidak.
Nilai yang mungkin: "narrow" (singkat), "short" (pendek), "long" (panjang).

Year: 
Mengontrol apakah menampilkan tahun atau tidak.
Nilai yang mungkin: "numeric" (angka), "2-digit" (dua digit).

Month:
Mengontrol cara menampilkan bulan.
Nilai yang mungkin: "numeric" (angka), "2-digit" (dua digit), "narrow" (singkat), "short" (pendek), "long" (panjang).

Day:
Mengontrol cara menampilkan hari.
Nilai yang mungkin: "numeric" (angka), "2-digit" (dua digit).

Hour:
Mengontrol cara menampilkan jam.
Nilai yang mungkin: "numeric" (angka), "2-digit" (dua digit).

Minute:
Mengontrol cara menampilkan menit.
Nilai yang mungkin: "numeric" (angka), "2-digit" (dua digit).

Second:
Mengontrol cara menampilkan detik.
Nilai yang mungkin: "numeric" (angka), "2-digit" (dua digit).*/

