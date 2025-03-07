let hari = 29; 
let bulan = 2; 
let tahun = 1980;

let apakahKabisat;
if (tahun % 4 == 0) {
    if (tahun % 100 == 0) {
        if (tahun % 400 == 0) {
            apakahKabisat = true;
        } else {
            apakahKabisat = false;
        }
    } else {
        apakahKabisat = true;
    }
} else {
    apakahKabisat = false;
}

switch (bulan) {
    case 1: {
        if (hari <= 31) {
            console.log(`${hari} Januari ${tahun}`);
        } else {
            console.log("maaf, jumlah hari dibulan ini hanya 31 hari")
        }
        // console.log(`${hari} Januari ${tahun}`);
        break;
    } case 2: {
        if (apakahKabisat == true) {
            if (hari <= 29) {
                console.log(`${hari} Februari ${tahun}`);
            } else {
                console.log("maaf, tahunnya adalah tahun kabisat, dan hari yang kamu masukkan lebih dari 29");
            }
        } else {
            if (hari <= 28) {
                console.log(`${hari} Februari ${tahun}`);
            } else {
                console.log("maaf, jumlah harinya cuma 28 hari karena bukan tahun kabisat");
            }
        }
        break;
    } case 3: {
        if (hari <= 31) {
            console.log(`${hari} Maret ${tahun}`);
        } else {
            console.log("maaf, jumlah hari dibulan ini hanya 31 hari")
        }
        break;
    } case 4: {
        if (hari <= 30) {
            console.log(`${hari} April ${tahun}`);
        } else {
            console.log("maaf, jumlah hari dibulan ini hanya 30 hari")
        }
        break;
    } case 5: {
        if (hari <= 31) {
            console.log(`${hari} Mei ${tahun}`);
        } else {
            console.log("maaf, jumlah hari dibulan ini hanya 31 hari")
        }
        break;
    } case 6: {
        if (hari <= 30) {
            console.log(`${hari} Juni ${tahun}`);
        } else {
            console.log("maaf, jumlah hari dibulan ini hanya 30 hari")
        }
        break;
    } case 7: {
        if (hari <= 31) {
            console.log(`${hari} Juli ${tahun}`);
        } else {
            console.log("maaf, jumlah hari dibulan ini hanya 31 hari")
        }
        break;
    } case 8: {
        if (hari <= 31) {
            console.log(`${hari} Agustus ${tahun}`);
        } else {
            console.log("maaf, jumlah hari dibulan ini hanya 31 hari")
        }
        break;
    } case 9: {
        if (hari <= 30) {
            console.log(`${hari} September ${tahun}`);
        } else {
            console.log("maaf, jumlah hari dibulan ini hanya 30 hari")
        }
        break;
    } case 10: {
        if (hari <= 31) {
            console.log(`${hari} Oktober ${tahun}`);
        } else {
            console.log("maaf, jumlah hari dibulan ini hanya 31 hari")
        }
        break;
    } case 11: {
        if (hari <= 30) {
            console.log(`${hari} November ${tahun}`);
        } else {
            console.log("maaf, jumlah hari dibulan ini hanya 30 hari")
        }
        break;
    } case 12: {
        if (hari <= 31) {
            console.log(`${hari} Desember ${tahun}`);
        } else {
            console.log("maaf, jumlah hari dibulan ini hanya 31 hari")
        }
    }
}