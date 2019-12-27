// Cara untuk membuat Object pada Javascript
// 1. Object Literal
// Problem tidak efektif untuk banyak object
// let mahasiswa1 = {
//     nama: 'Refri',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo $(this.nama), selamat makan`);
//     }
// }
// nama object tidak boleh sama
// let mahasiswa2 = {
//     nama: 'Refri',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo $(this.nama), selamat makan`);
//     }
// }

// 2. Function Declaration
// Problem management memory 
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     mahasiswa.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan!`);

//     }
//     mahasiswa.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat Bermain!`);

//     }
//     return mahasiswa;
// }

// let refri = Mahasiswa('Refri', 10);
// let rifwan = Mahasiswa('Rifwan', 20);

// 3. Constructor Function
// keyword new
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan!`);

//     }
//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat Bermain!`);

//     }
// }

// let refri = new Mahasiswa('Refri', 10);

// 4. Object Created
// Problem kerja dua kali dengan dua object
// const methodMahasiswa = {
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan!`);

//     },
//     main: function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat Bermain!`);

//     },
//     tidur: function (jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, Selamat Tidur!`);
//     }
// }

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     return mahasiswa;
// }

// let refri = Mahasiswa('Refri', 10);
// let rifwan = Mahasiswa('Rifwan', 20);

// 5. Prototype
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, Selamat Makan!`;
// }

// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, Selamat Bermain!`;
// }

// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam * 2;
//     return `Halo ${this.nama}, Selamat Tidur!`;
// }

// let refri = new Mahasiswa('Refri', 10);

// 6. Versi Class
class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        return `Halo ${this.nama}, Selamat Makan!`;
    }

    main(jam) {
        this.energi -= jam;
        return `Halo ${this.nama}, Selamat Bermain!`;
    }

    tidur(jam) {
        this.energi += jam * 2;
        return `Halo ${this.nama}, Selamat Tidur!`;
    }
}

let refri = new Mahasiswa('Refri', 10);
let rifwan = new Mahasiswa('Rifwan', 20);