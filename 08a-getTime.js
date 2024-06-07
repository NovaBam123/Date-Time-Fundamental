/*  
    Method date instance yang mengembalikan hasil ""timeStamp" miliDetik pada tanggal(this date) dan dihitung dari tanggal epoch time. 
    Epoch Unix adalah titik referensi dalam sistem Unix, yang didefinisikan sebagai 1 Januari 1970 00:00:00 UTC.
    timestamp: adalah nilai milidetik yang telah berlalu sejak waktu tersebut.
    Syntax: 
    -getTime()
    perhitungan dengan manual kurang akurat kecuali memperhatikan perhitungan tahun kabisat.
*/
const moonLanding = new Date("July 20, 1969 20:17:40 GMT+00:00");
console.log("01.", moonLanding.getTime());

// MENGGUNAKAN GETTIME() UNTUK MENYALIN TANGGAL DAN WAKTU
const dDay= new Date(1994, 12, 10)// karena bulan dihitung mulai dari 0 maka 12= bulan January, dan tahun menyesuaikan menjadi 1995.
console.log("02. bulan 12 jadi January:", dDay.toString())

const copy= new Date()
const result1= copy.setTime(dDay.getTime())
console.log("03. Hasil dalam timeStamp:", result1)

const birthday= new Date("August 1, 1978, 12:00:00")
const copyBirthday= new Date(birthday.getTime());
console.log("04.", copyBirthday.toString());

const dDay2= new Date("january 01, 1970 07:00:01")
console.log("05. selisih ke EpochTime:", dDay2.getTime());

/*  MENGUKUR WAKTU EKSEKUSI SEBUAH KODE
    hasil getTime() mengembalikan jumlah ms sejak Epoch time.
    maka jika kita membuat ini berturut2 pada suatu kode maka akan didapat selisih waktu kode itu dieksekusi.  
    _Namun getTime() adalah method object date yang membutuhkan instance object dalam pemanggilannya, yaitu dengan harus membentuk newDate() ini akan memerlukan alokasi memori tambahan.
    _dateNow() merupakan properti static method yang tidak membutuhkan instance object dalam eksekusi-nya sehingga jauh lebih efisien dalam hal kineraja.
    note: Math.sqrt-> "menghitung akar kuadrat dari suatu nilai"   
*/
let end, start;
start= new Date();
for(let i=0; i<10; i++){
    console.log("06.", Math.sqrt(i).toFixed(2));
}
end= new Date()
console.log("07.", `Time operation: ${end.getTime()- start.getTime()} ms`)

//  Penggunaan dateNow() dalam perhitungan waktu operasi
let end3, start3;
start3= Date.now()
for(let i=0; i<10; i++){
    console.log("08.", Math.sqrt(i).toFixed(2));
}
end3= Date.now()
console.log("08. timeOperation:", `${end3- start3}ms`);

// const birthDay = new Date("August 01, 1978 15:00");
// console.log(birthDay.getTime());

// const detikPerHari = 60*60*24;
// const detikPerTahun = (detikPerHari*365)*8;
// const jamMenit = ((20*60*60) + (17*60)) + 40;
// const total = (detikPerTahun + jamMenit)/1000

// console.log("detik/hari:", detikPerHari);
// console.log("detik/tahun:", detikPerTahun);
// console.log("jamMenit", jamMenit);
// console.log("selisih moonLanding ke epoch time", 0-total);
// console.log(new Date().getTime());

const options= {
  weekday: "long",
  month: "long",
  year: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric"
}
console.log("09.", Intl.DateTimeFormat("id-ID", options).format(new Date()));

