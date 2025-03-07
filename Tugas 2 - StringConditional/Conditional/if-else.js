let nama = 'Fahrul';
let peran = 'guard';

if (nama && peran) {    
    let DaftarPeran = peran.toLowerCase();
    console.log(`Selamat datang di Dunia Werewolf, ${nama}`)
    if (DaftarPeran == "penyihir") {
        console.log(`Halo Penyihir ${nama}, kamu dapat melihat siapa yang menjadi werewolf!`)
    } else if (DaftarPeran == "guard") {
        console.log(`Halo Guard ${nama}, kamu akan membantu melindungi temanmu dari serangan werewolf.`)
    } else if (DaftarPeran == "werewolf") {
        console.log(`Halo Werewolf ${nama}, Kamu akan memakan mangsa setiap malam!`)
    } else {
        console.log(`Peran tersebut tidak ada, peran yang tersedia adalah:
        1. Penyihir
        2. Guard
        3. Werewolf`)
    }
} else if (nama == true || peran == false) {
    console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`)
} else {
    console.log("Nama harus diisi")
}