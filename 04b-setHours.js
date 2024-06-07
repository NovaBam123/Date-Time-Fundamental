/*
    Method instance yang merubah Jam, menit, detik pada waktu lokal
    Syntax:
    -setHours(hoursValue)
    -setHours(hoursValue, minuteValue)
    -setHours(hoursValue, minuteValue, secondsValue)
    -setHours(hoursValue, minuteValue, secondsValue, miliSecValue)
    (0- 23) rentang waktu: jam
    (0- 59) rentang waktu: menit dan detik
    (0- 999) rentang waktu: milidetik
    Epoch Unix adalah titik referensi dalam sistem Unix, yang didefinisikan sebagai 1 Januari 1970 00:00:00 UTC.
    timestamp: adalah nilai milidetik yang telah berlalu sejak waktu tersebut.
*/

const bigDay= new Date();
const result= bigDay.setHours(7) // ini hasilnya berupa timestamp 1715647646715 yang dihitung milidetik sejak Epoch Unix 
const year= date.getFullYear()
