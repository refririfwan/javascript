// Membuat object
// 1. Object Literal
// var mhs = {
//     nama: "Refri Rifwan",
//     umur: 21,
//     ips: [3.00, 3.25, 3.50],
//     alamat: {
//         jalan: "JL. abc No. 123",
//         kota: "Malang",
//         provinsi: "Jawa Timur"
//     }
// };

// 2. Function Declaration
// function buatObjectMahasiswa(nama, nim, email, jurusan) {
//     var mhs = {};
//     mhs.nama = nama;
//     mhs.nim = nim;
//     mhs.email = email;
//     mhs.jurusan = jurusan;
//     return mhs;
// }

// var mhs = buatObjectMahasiswa('refri', '1551', 'refri@student.com', 'teknik informatika');

// 3. Constructor
// function Mahasiswa(nama, nim, email, jurusan) {
//     this.nama = nama;
//     this.nim = nim;
//     this.email = email;
//     this.jurusan = jurusan;
// }

// var mhs = new Mahasiswa('refri', '1551', 'refri@student.com', 'teknik informatika');

// 4. This
// this == window (Secara global)
// This in Function Declaration
// function halo() {
//     console.log(this);
//     console.log('halo');
// }
// this mengembalikan object secara global
// this.halo();

// This in Object Literal
// var obj = {
//     a: 10,
//     nama: 'refri'
// };
// obj.halo = function () {
//     console.log(this);
//     console.log('halo');
// }
// this mengembalikan object yang bersangkutan
// obj.halo();

// This in Constructor
function Halo() {
    console.log(this);
    console.log('halo');
}
// this mengembalikan object yang baru dibuat
new Halo();