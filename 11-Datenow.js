/*
    Static method yang mengembalikan hasil timestamp waktu berlalu dalam millisecond saat sekarang dari waktu epoch Time.
    _Epoch Unix Time adalah titik referensi dalam sistem Unix, yang didefinisikan sebagai 1 Januari 1970 00:00:00 UTC.
    timestamp: adalah nilai milidetik yang telah berlalu sejak waktu tersebut.
    _-Z: Zulu Time, menunjukan waktu yang ditampilkan adalah dalam format UTC.
    -UTC: Coordinate Universal Time: standar waktu international yang digunakan sebagai referensi waktu global, dan tidak terpengaruh zona waktu lokal.
    Syntax:
    - Date.now() -> tanpa parameter
    jika dimasukan parameter apapun maka js akan mengabaikan-nya
*/
const mulai = Date.now();
console.log("starting timer...")
setTimeout(() => {
  const millis = Date.now() - mulai
  console.log(`01. selisih waktu = ${Math.floor(millis/1000)} detik`)
}, 2000);

//  MENGUKUR WAKTU EKSEKUSI SEBUAH KODE DENGAN DATENOW()
let start= Date.now()
for(let i= 0; i<= 10; i++){
    console.log("02.", Math.sqrt(i).toFixed(2))   
}
let end=Date.now()
console.log(`03. operation took: ${end- start}ms`)


