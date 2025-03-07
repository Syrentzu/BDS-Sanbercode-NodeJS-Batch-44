//Soal no 1
let Input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
] 

function DataHandling(data) {
    let tampung = ""
    for (let i = 0; i < data.length; i++) {
        tampung += "Nomor ID: " + data[i][0] + "\n";
        tampung += "Nama Lengkap: " + data[i][1] + "\n";
        tampung += "TTL: " + data[i][2] + " " + data [i][3] + "\n";
        tampung += "Hobi: " + data[i][4] + "\n" + "\n";
    }
    return tampung
}

console.log(DataHandling(Input))

//Soal no 2
function balikKata(Tes) {
    let Output = "";
    let panjangString = Tes.length
    for (let a = panjangString-1; a>=0 ; a--) {
        Output += Tes[a]
    }
    return Output
}  
console.log(balikKata("SanberCode")) 

console.log(balikKata("racecar")) 

console.log(balikKata("kasur rusak"))

console.log(balikKata("haji ijah"))

console.log(balikKata("I am Sanbers"))