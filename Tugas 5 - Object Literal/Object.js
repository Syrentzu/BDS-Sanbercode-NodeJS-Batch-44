console.log("Soal No 1");

function arrayToObject(arr) {
    for (i = 0; i < arr.length; i++) {
        let thisyear = new Date().getFullYear();
        let personarr = arr[i]
        let objperson = {
            firstname: personarr[0],
            lastname: personarr[1],
            gender: personarr[2]

        };

        if (!personarr[3] || personarr[3] > thisyear ) {
            objperson.age = "Invalid Birth Year"
        } else {
            objperson.age = thisyear - personarr[3]
        }

        let fullname = `${objperson.firstname} ${objperson.lastname}`

        console.log((i+1) + ". " + fullname + ": ", objperson);
    }
}
 
// Driver Code
let people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ]
arrayToObject(people) 

 
let people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]
arrayToObject(people2) 

 
// Error case 
arrayToObject([]) // ""

console.log("Soal no 2");

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    let output = []
    for(j = 0; j < arrPenumpang.length; j++) {
        let penumpangSekarang = arrPenumpang[j];
        let penumpangObject = {
            penumpang: penumpangSekarang[0],
            naikDari: penumpangSekarang[1],
            tujuan: penumpangSekarang[2],
        }
        let bayar = (rute.indexOf(penumpangSekarang[2]) - rute.indexOf(penumpangSekarang[1])) * 2000;

        penumpangObject.bayar = bayar

        output.push(penumpangObject)

    }
    return output;
  }
   
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
   
  console.log(naikAngkot([])); //[]

console.log("Soal no 3"); 

function nilaiTertinggi(data) {
    let tampung = {};
    for (let i = 0; i < data.length; i++) {
      let dataMurid = data[i];
      if (tampung[dataMurid.class] === undefined || dataMurid.score > tampung[dataMurid.class].score) {
        tampung[dataMurid.class] = { name: dataMurid.name, score: dataMurid.score };
      }
    }
    return tampung;
  }
  
  // TEST CASE
  console.log(nilaiTertinggi([
    {
      name: 'Asep',
      score: 90,
      class: 'adonis'
    },
    {
      name: 'Ahmad',
      score: 85,
      class: 'vuejs'
    },
    {
      name: 'Regi',
      score: 74,
      class: 'adonis'
    },
    {
      name: 'Afrida',
      score: 78,
      class: 'reactjs'
    }
  ]));
  
  // OUTPUT:
  
  // {
  //   adonis: { name: 'Asep', score: 90 },
  //   vuejs: { name: 'Ahmad', score: 85 },
  //   reactjs: { name: 'Afrida', score: 78}
  // }
  
  
  console.log(nilaiTertinggi([
    {
      name: 'Bondra',
      score: 100,
      class: 'adonis'
    },
    {
      name: 'Putri',
      score: 76,
      class: 'laravel'
    },
    {
      name: 'Iqbal',
      score: 92,
      class: 'adonis'
    },
    {
      name: 'Tyar',
      score: 71,
      class: 'laravel'
    },
    {
      name: 'Hilmy',
      score: 80,
      class: 'vuejs'
    }
  ]));
  
  // {
  //   adonis: { name: 'Bondra', score: 100 },
  //   laravel: { name: 'Putri', score: 76 },
  //   vuejs: { name: 'Hilmy', score: 80 }
  // }
  
