/*
    _Merupakan Static Method yang mengurai string dari sebuah tanggal dan waktu, mengembalikan hasil berupa timestamp sebelum/setelah epoch time dalam waktu setempat.
    _namun hanya date time string format yang support terhadap method ini. (tergantung pada browser dan sebuah library dapat membantu mengakomodasi permasalah ini.)
    _Format string valid untuk parameter: 
    1. "YYYY-MMMM-DDTHH:mm:ss.sssZ" -> "2024-05-15T12:00:00.000Z"
    2. "YYYY-MM-DD" ex-> "2024-04-15"
    3. "MM/DD/YYYY" -> "05/15/2024"
    4. "MMM DD, YYYY" ->"May 15, 2024"

    _Syntax:
    Date.parse(dateString)

    Date.parse default-nya waktu local, jika tidak memberikan parameter-nya.
    untuk zona waktu lain maka perlu menyediakan zona waktu sesuai dengan standar ISO 8601 misal:
    Date.parse("2024-05-15T12:00:00+07:00")->zona waktu GMT+ 7.
*/
console.log("01.", Date.parse("2019-01-01"))
console.log("02.", Date.parse("2019-01-01T00:00:00.000Z"));

// UTC (Coordinate Universal time) sama dengan zona waktu di GMT.
const uTC = Date.parse("Jan 1970, 01 00:00:00 GMT")
console.log("03.", uTC);
const jsRelease = Date.parse("04 Dec 1995 00:12:00 GMT")
console.log("04.", jsRelease);

const options = {
  weekday : "long",
  month : "long",
  year: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
}
console.log("05.", Intl.DateTimeFormat("en-EN", options,).format(new Date()))

/* 
1. UTC (Coordinated Universal Time):
Penanda: UTC atau Z
Contoh: 2023-12-25T12:30:00.000Z

2.Waktu Standar Greenwich (GMT):
Penanda: GMT
Contoh: 2023-12-25T12:30:00.000GMT

3.Waktu Standar Timur (EST - Eastern Standard Time):
Penanda: -05:00 atau -0500
Contoh: 2023-12-25T07:30:00.000-05:00

4.Waktu Standar Pasifik (PST - Pacific Standard Time):
Penanda: -08:00 atau -0800
Contoh: 2023-12-25T04:30:00.000-08:00

5.Waktu Standar India (IST - Indian Standard Time):
Penanda: +05:30 atau +0530
Contoh: 2023-12-25T18:00:00.000+05:30

6.Waktu Standar Jepang (JST - Japan Standard Time):
Penanda: +09:00 atau +0900
Contoh: 2023-12-25T21:30:00.000+09:00*/