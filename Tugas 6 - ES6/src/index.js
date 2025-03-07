import { sapa, konversi,check } from "./lib/function.js";

const args = process.argv.slice(2)  
//tugas 1 -  menerima satu parameter berupa string nama. function tersebut me-return kalimat sapaan
sapa(args)

// tugas 2 - menerima tiga parameter yaitu nama, domisili, dan umur. function akan mengembalikan object berisi data dari parameter yang diberikan
konversi(args)

//tugas 3 - menerima satu parameter berupa string. string tersebut berisi data-data yang dipisahkan dengan tanda koma(,) dan titik dua (:). Function tersebut mengolah data parameter menjadi sebuah object berdasarkan data yang dikirim dari parameter.
check(args)

