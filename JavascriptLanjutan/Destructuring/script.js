// Destructuring Variable / Assignment

// Destructuring Array
// const perkenalan = ['halo', 'nama', 'saya', 'refri'];
// const [salam, satu, dua, nama] = perkenalan;

// skip items
// const [salam, , , nama] = perkenalan;

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
//     return [1, 2];
// }
// const [a, b] = coba();
// console.log(a);
// console.log(b);

// rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

// Destructuring Object
// const mhs = {
//     nama: 'refri',
//     umur: 22
// }

// const {
//     nama,
//     umur
// } = mhs;
// console.log(nama);
// console.log(umur);

// assignment tanpa deklarasi  object
// ({
//     nama,
//     umur
// } = {
//     nama: 'refri',
//     umur: 22
// });

// console.log(nama);
// console.log(umur);

// assign ke variable baru
// const mhs = {
//     nama: 'refri',
//     umur: 22
// }

// const {
//     nama: n,
//     umur: u
// } = mhs;
// console.log(n);
// console.log(u);

// memberikan default value
// const mhs = {
//     nama: 'refri',
//     umur: 22
// }

// const {
//     nama,
//     umur,
//     email = 'default@student.com'
// } = mhs;
// console.log(nama);
// console.log(umur);
// console.log(email);

// memberi nilai default + assign ke variable baru
// const mhs = {
//     nama: 'refri',
//     umur: 22,
//     email: 'refri@student.com'
// }

// const {
//     nama: n,
//     umur: u,
//     email: e = 'default@student.com'
// } = mhs;
// console.log(n);
// console.log(u);
// console.log(e);

// rest parameter
// const mhs = {
//     nama: 'refri',
//     umur: 22,
//     email: 'refri@student.com'
// }

// const {
//     nama,
//     ...values
// } = mhs;
// console.log(values);

// mengambil field pada object, setelah dikirm sebagai parameter untuk function
// const mhs = {
//     id: 123,
//     nama: 'refri',
//     umur: 22,
//     email: 'refri@student.com'
// }

// function getIdMhs({
//     id
// }) {
//     return id;
// }

// console.log(getIdMhs(mhs));

// Destructuring function
// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b];
// }
// const jumlah = penjumlahanPerkalian(2, 3)[0];
// console.log(jumlah);
// const kali = penjumlahanPerkalian(2, 3)[1];
// console.log(kali);
// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);
// const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2, 3);
// console.log(kurang);
// console.log(bagi);

// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }

// const {
//     bagi,
//     tambah,
//     kali,
//     kurang
// } = kalkulasi(2, 3);
// console.log(kurang);

// destructuring function arguments
const mhs1 = {
    nama: 'refri',
    umur: 22,
    email: 'refri@student.com',
    nilai: {
        tugas: 80,
        uts: 70,
        uas: 75
    }
}

function cetakMhs({
    nama,
    umur,
    nilai: {
        tugas,
        uts,
        uas
    }
}) {
    return `Halo, nama saya ${nama}, saya berusia ${umur} tahun, dan nilai UAS saya adalah ${uas}`;
}

console.log(cetakMhs(mhs1));