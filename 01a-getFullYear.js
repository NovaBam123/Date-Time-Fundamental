/* 
    -method dari Date instance yang mengembalikan tahun pada tanggal saat ini dalam waktu setempat.
    syntax:
    getFullYear();
*/
const sampleDate = new Date("1996-12-25T23:15:30");
//ini format iso 8601 dan T sebagai pemisah tanggal dan waktu
//format tanggal YYYY-MM-DD
//format waktu HH:mm:ss
console.log("01.", sampleDate.getFullYear());

//Format Umum
const moonLanding = new Date("02.", "July 20, 69 00:20:18")
//format MM DD, YYYY sebagai format tanggal
//format waktu HH:mm:ss sebagai format waktu  

const options= {
  weekday : "long",
  month: "long",
  year: "numeric",
  day: "numeric"
}
console.log("03.", Intl.DateTimeFormat("id-ID", options).format(new Date()));
console.log("04.", new Date().toString());

// MENGGUNAKAN GETFULLYEAR()
const xmas= new Date("1995-12-25T23:15:30")
console.log("05.", xmas.getFullYear());
