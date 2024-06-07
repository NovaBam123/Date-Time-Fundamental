/* 
    Method instance time yang merubah waktu menit pada waktu lokal.
    Syntax:
    -setMinutes(minutesValue)
    -setMinutes(minutesValue, secondsValue)
    -setMinutes(minutesValue, secondsValue, msValue)
    (0- 59): rentang value menit
    (0- 59): rentang value detik
    (0- 999): rentang value miliDetik
    - jika gunakan rentang waktu detik misal: 120 maka (minutesvalue + 1), maka akan ditambahkan 2 menit dari waktu sebelumnya. 
*/
const bigDay= new Date();
console.log("01.", bigDay.setMinutes(45));