/*
  Membuat instance object date baru yang mewakili tanggal, bulan, tahun dan waktu saat ini berdasarkan waktu lokal, objek date ini dapat diatur untuk mewakili tanggal dan waktu tertentu dg berbagai argument.
  Syntax: 
  -new Date();
  -new Date(value);
  -new Date(dateString)
  -new Date(dateObject)
  -new Date(year, monthIndex)
  -new Date(year, monthIndex, day, hours)
  -new Date(year, monthIndex, day, hours, minutes, seconds)
  -new Date(year, monthIndex, day, hours, minutes, seconds, ms)
  Date()
  
  FORMAT VALID PARAMETERS: 
  1. ISO Date: "YYYY-MM-DDTHH:MM:SS"-> "2024-05-13T21:00:00"
  2. Short Date: "MM/DD/YYYY"-> "05/18/2024"
  3. Long Date: "Month DD, YYYY"-> "May 18, 2024"
  4. Short Date and Time: "MM/DD/YYYY HH:MM:SS"-> "05/18/2024 21:00:00"
  5. Long Date and Time: "Month DD, YYYY HH:MM:SS"-> "May 15, 2024 21:00:00"
  6. UNIX TimeStamp" "milliseconds"-> "1715784051290" 

/*  TANPA PARAMETERS
    ketika parameter tidak disertakan, maka akan membuat object yang menampilkan waktu saat ini dalam waktu lokal.
    waktu tersebut akan sama dengan metode Date.now() hanya saja perbedaan bentuk timeStamp(ms) dengan waktu yang mudah dibaca manusia.
*/
let dDay= new Date().toString();
console.log("01.", dDay);

// MENGKONVERSI HASIL TIMESTAMP DARI DATE.NOW KE TIME AND DATE 
const dDay2= Date.now()
console.log("02.", dDay2)
const date= new Date(dDay2);
const year= date.getFullYear();
const month= date.getMonth()
const hours= date.getHours()//..dst
console.log("03.", year,"-",month)

// CARA KE-2 UNTUK KONVERSI
const options= {
    weekday: "long",
    month: "long",
    year: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hours12: true
}
console.log("04.", Intl.DateTimeFormat("id-ID", options).format(date));

const formatter= Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    month: "long",
    year: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hours12: true
})
console.log("05.", formatter.format(date));
// DATE STRING







