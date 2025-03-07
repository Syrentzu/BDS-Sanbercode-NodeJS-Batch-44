//Tugas 1
export const sapa = (input) => {
    console.log(`halo selamat pagi, ${input}`)
}

//Tugas 2
export const konversi = (input) => {
    const [nama , domisili , umur] = input
    const tampung = {nama , domisili , umur}
    console.log(tampung)
}

//Tugas 3
export const check = (input) => {
    let tampung = input
    let tampung2 = tampung.toString()
    let tampung3 = tampung2.split(/[:,]/)
    let tampung4 = {}
    for (let index = 0; index < tampung3.length; index+=2) {
        let key = tampung3[index]
        let value = tampung3[index+1]
        tampung4[key] = value
    }
    console.log(tampung4)
}



