// for of
// itterable
// array
// const mhs = ['refri', 'rifwan', 'daharmi'];

// for (const m of mhs) {
//     console.log(m);
// }
// for of tidak memiliki index
// string
// const nama = 'refri';
// for (const n of nama) {
//     console.log(n);
// }
// mengakali index pada for of
// const mhs = ['refri', 'rifwan', 'daharmi'];
// for (const [i, m] of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke ${i+1}`);
// }

// nodelist
// const liNama = document.querySelectorAll('.nama');

// liNama.forEach(n => console.log(n.textContent));

// for (n of liNama) {
//     console.log(n.innerHTML);
// }

// arguments
// function jmlkanAngka() {
//     let jumlah = 0;
//     for (a of arguments) {
//         jumlah += a;
//     }
//     return jumlah
// }

// console.log(jmlkanAngka(1, 2, 3, 4, 5));

// for in
// enumerable
// object
const mhs = {
    nama: 'refri',
    umur: 22,
    email: 'refri@student.com'
}

for (m in mhs) {
    console.log(m);
    console.log(mhs[m]);
}