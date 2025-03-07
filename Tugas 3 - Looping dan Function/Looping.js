//No 1 Looping While
let Timer = 0;
let Angka = 2;
let HitungMaju = 0;
console.log("LOOPING PERTAMA");
while (Timer < 10) { // Loop akan terus berjalan selama nilai flag masih dibawah 10
    HitungMaju += Angka;
    console.log(`${HitungMaju} - I love coding`); // Menampilkan nilai flag pada iterasi tertentu
    Timer++; // Mengubah nilai flag dengan menambahkan 1 
}

let TimerMundur = 0;
let AngkaMundur = 2;
let HitungMundur = 20;
console.log("LOOPING KEDUA")
while (TimerMundur < 10) {
    console.log(`${HitungMundur} - I will become a mobile developer`);
    HitungMundur -= AngkaMundur;
    TimerMundur++;
}

//No 2 Looping For
let Out = 1
console.log("Output");
for (let Timer2 = 1; Timer2 <= 20; Timer2++ ) {
    if (Out % 2 == 0) {
        console.log(`${Out} - Berkualitas`)
    } else if (Out % 2 == 1) {
        if (Out % 3 == 0) {
            console.log(`${Out} - I Love Coding`);
        } else {
            console.log(`${Out} - Santai`);
        }
    }  else {
        console.log("Ada yang salah");
    }
    Out++
}

//No 3 Membuat Persegi Panjang #
function makeRectangle(panjang,lebar) {
    for (TimerLebar = 1; TimerLebar <= lebar; TimerLebar++) {
        let baris = "";
        for (TimerPanjang = 1; TimerPanjang <= panjang; TimerPanjang++) {
            baris += "#";
        }
        console.log(baris)
    }
  }
  
// TEST CASE
makeRectangle(10,4)


//No 4 Membuat Tangga #
let kosong1 = "";
function makeLadder(sisi) {
    for (TimerSegitiga = 1; TimerSegitiga <= sisi; TimerSegitiga++) {
        kosong1 += "#";
        console.log(kosong1)
    }
  }
  
// TEST CASE
makeLadder(7)