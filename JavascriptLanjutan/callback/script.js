// Callback
// Synchronous Callback
// function halo(nama) {
//     alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('Masukan Nama : ');
//     callback(nama);
// }

// tampilkanPesan(nama => alert(`Halo, ${nama}`));

// Asynchronous
// const mhs = [{
//         "nama": "Refri",
//         "nim": "1551",
//         "email": "refri@student.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 1
//     },
//     {
//         "nama": "Rifwan",
//         "nim": "1552",
//         "email": "rifwan@student.com",
//         "jurusan": "Teknik Komputer ",
//         "idDosenWali": 2
//     },
//     {
//         "nama": "Daharmi",
//         "nim": "1553",
//         "email": "daharmi@student.com",
//         "jurusan": "Teknik Elektro",
//         "idDosenWali": 2
//     },
//     {
//         "nama": "Rifwanda",
//         "nim": "1554",
//         "email": "rifwanda@student.com",
//         "jurusan": "Teknik Mesin",
//         "idDosenWali": 1
//     }
// ];
// console.log('mulai');
// mhs.forEach(m => {
//     for (let i = 0; i < 10000000; i++) {
//         let date = new Date();
//     }
//     console.log(m.nama)
// });
// console.log('selesai');

// Asynchronous Callback
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response);
//             } else if (xhr.status === 404) {
//                 error();
//             }
//         }
//     }
//     xhr.open('get', url);
//     xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa('mahasiswa.json', result => {
//     const mhs = JSON.parse(result);
//     mhs.forEach(m => console.log(m.nama));
// }, () => {});
// console.log('selesai');

// JQuery
console.log('mulai');
$.ajax({
    url: 'mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: (e) => {
        console.log(e.responseText);
    }
});
console.log('selesai');