// spread Operator
// memecah iterable menjadi single element
// const mhs = ['refri', 'rifwan', 'daharmi'];
// console.log(...mhs);
// console.log(...mhs[0]);

// Menggabungkan dua array
// const mhs = ['refri', 'rifwan', 'daharmi'];
// const dosen = ['sandhika', 'galih', 'padika'];
// const orang = [...mhs, 'rifwanda', ...dosen];
// // const orang = mhs.concat(dosen);
// console.log(orang);

// Mengcopy array
// const mhs = ['refri', 'rifwan', 'daharmi'];
// // const mhs1 = mhs;
// const mhs1 = [...mhs];
// mhs1[0] = 'rifwanda';
// console.log(mhs);

// const liMhs = document.querySelectorAll('li');
// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);

// const nama = document.querySelector('.nama');
// const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
// nama.innerHTML = huruf;

// rest parameter
// function myFunc(a, b, ...myArgs) {
//     return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
// }
// must be on last parameters
// rest parameter jadi dalam bentuk array
// function myFunc(...myArgs) {
//     return `myArgs = ${myArgs}`;
// }

// console.log(myFunc(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
//     // let total = 0;
//     // for (const a of angka) {
//     //     total += a;
//     // }
//     // return total;
//     return angka.reduce((a, b) => a + b);
// }

// console.log(jumlahkan(1, 2, 3, 4, 5));

// array destructing
// const kelompok = ['Refri', 'Rifwan', 'Daharmi', 'Rifwanda'];
// const [ketua, wakil, ...anggota] = kelompok;
// console.log(anggota);

// object destructuring
// const team = {
//     pm: 'refri',
//     frontEnd1: 'rifwan',
//     frontEnd2: 'daharmi',
//     backEnd: 'rifwanda',
//     ux: 'wanda',
//     devOps: 'harmi'
// }

// const {
//     pm,
//     ...myTeam
// } = team;
// console.log(myTeam);

// filtering
// function filterBy(type, ...values) {
//     return values.filter(v => typeof v === type);
// }

// console.log(filterBy('number', 1, 2, 'refri', false, 10, true, 'rifwan'));
// console.log(filterBy('string', 1, 2, 'refri', false, 10, true, 'rifwan'));

// Assynchronous
// console.log('satu');
// setTimeout(function () {
//     console.log('dua');
// }, 5000)
// console.log('tiga');