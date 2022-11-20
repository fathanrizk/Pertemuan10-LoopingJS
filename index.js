//Belajar Switch Case

const pekerjaan = "pelaut"

switch (pekerjaan) {
    case "pelaut":
        result = "Berlayar"
        break;
    case "polisi":
        result = "Menilang"
        break;
    case "guru":
        result = "Mengajar"
        break;
    default:
        result = "Gatau"
        break;
}
console.log(result);

//Perut
const perut = "penuh"
switch (perut) {
    case "lapar":
        console.log("Makan")
        break;
    case "kosong":
        console.log("Asam lambung")
        break;
    case "penuh":
        console.log("Ngantuk")
        break;
    default:
        console.log("Tidur")
        break;
}

//ternary operator
//kondisi button true false
//Jika true "sideBar tampil", jika false "sideBar tertutup"
function ternary(button){
    return (button ? "Munculkan SideBar" : "Tutup SideBar")
}

const button = ternary(true)
console.log(button);

//Perulangan for

for(let i=1 ; i<=10; i++){
    console.log(i);
}

console.log("\n");

//Cetak nomor dari 5 sampai -5 dengan loop for

for(let j=5; j>=-5; j--){
    console.log(j);
}

console.log("\n");
//Cetak nomor kelipatan 2, 2 sampai 20

for (let i=2; i<=20; i=i+2){
    console.log(i);
}

console.log("\n");
//cetak 1 - 15
//angka habis dibagi 3 & 5 "fizbuzz"
//angka habis dibagi 3 (fizz), angka habis dibagi 5 (Buzz), selebihnya (angka)

// for (let i=1 ; i<=15; i++){
//     console.log(i);
//     if(i%3 == 0 && i%5 == 0 ){
//         console.log("Fizbuzz");
//     }else if(i%3 == 0){
//         console.log("fizz");
//     }else if(i%5 == 0){
//         console.log("Buzz");
//     }else{
//         console.log(i);
//     }
// }

//Pindahkan kode diatas ke dalam function dan dinamis

function hitung_loop(param){

    let hasil_loop
    for (let i=1 ; i<=param; i++){
        // console.log(i);

        if(i%3 == 0 && i%5 == 0 ){
            hasil_loop = "Fizzbuzz"
        }else if(i%3 == 0){
            hasil_loop = "Fizz"
        }else if(i%5 == 0){
            hasil_loop = "Buzz"
        }else{
            hasil_loop = i
        }
        // console.log(i);
        console.log(hasil_loop);
        // return hasil_loop
    }
    return hasil_loop
}

// console.log(hitung_loop(15));
const nilai_loop = hitung_loop(15)
// console.log(nilai_loop);
