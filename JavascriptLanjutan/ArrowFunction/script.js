// function expression

// const tampilNama = function (nama) {
//     return `Halo, ${nama}`;
// }
// console.log(tampilNama('Refri'));

// single parameter
// const tampilNama = (nama) => {
//     return `Halo, ${nama}`
// }
// console.log(tampilNama('Rifwan'));

// dual parameter
// const tampilNama = (nama, umur) => {
//     return `Halo ${nama}, berusia ${umur}`;
// }
// console.log(tampilNama('Rifwanda', 22));

// implisit return
// const tampilNama = nama => `Halo, ${nama}`;
// console.log(tampilNama('Rifwan'));

// without parameter
// const tampilNama = () => `Halo Refri`;
// console.log(tampilNama());

let mahasiswa = ['Refri', 'Rifwan', 'Rifwanda'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);

// return array
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// return object
// let jumlahHuruf = mahasiswa.map(nama => ({
//     nama: nama,
//     jmlHuruf: nama.length
// }));
// console.table(jumlahHuruf);

// mengembalikan properti nama yang sama
// let jumlahHuruf = mahasiswa.map(nama => ({
//     nama,
//     jmlHuruf: nama.length
// }));
// console.table(jumlahHuruf);

// konsep this pada arrow function 

// constructor function
// const Mahasiswa = function () {
//     this.nama = 'Refri';
//     this.umur = 22;
//     console.log(this);
//     this.sayHello = function () {
//         console.log(`Halo, nama saya ${this.nama}, dan saya berusia ${this.umur}`);
//     }
// }

// const refri = new Mahasiswa();

// using arrow function
// const Mahasiswa = function () {
//     this.nama = 'Refri';
//     this.umur = 22;
//     console.log(this);
//     this.sayHello = () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya berusia ${this.umur}`);
//     }
// }

// const refri = new Mahasiswa();

// arrow function on object literal
// const mhs = {
//     nama: 'refri',
//     umur: 22,
//     sayHello: () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya berusia ${this.umur} tahun.`);
//     }
// }

// arrow function tidak memiliki konsep this
// const Mahasiswa = function () {
//     this.nama = 'Refri';
//     this.umur = 22;
//     console.log(this);
//     this.sayHello = () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya berusia ${this.umur}`);
//     }

//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500);
// }

// const refri = new Mahasiswa();

// latihan arrow function
const box = document.querySelector('.box');
box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';
    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }
    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});