// variabel meminta inputan dari pengguna menggunakan promt
let userInput = prompt("masukkan salah satu angka:");

// variabel inputan menjadi sebuah bilangan(ganjil atau genap)
let angka = parseInt(userInput);
// memeriksa apakah bilangan atau angka tersebut ganjil atau genap
if (angka %2 === 0) {
    alert("Angka Genap");
} else {
    alert("angka Ganjil");
}