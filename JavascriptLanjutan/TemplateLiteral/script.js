//  Template Literal / Template String
// const nama = 'Refri';
// const umur = 22;
// console.log(`Halo, nama saya ${nama} dan saya berusia ${umur} tahun.`);

// Embedded Expression
// console.log(`${1 +1}`);
// console.log(`${alert('hello')}`);
// const x = 10;
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

// 1. HTML Fragments
// const mhs = {
//     nama: 'Refri Rifwan',
//     umur: 22,
//     nim: '1551',
//     email: 'refri@student.com'
// }

// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="nrp">${mhs.nim}</span>
// </div>`;

// 2. Looping
// const mhs = [{
//     nama: 'Refri',
//     email: 'refri@student.com'
// }, {
//     nama: 'Rifwan',
//     email: 'rifwan@student.com'
// }, {
//     nama: 'Daharmi',
//     email: 'daharmi@student.com'
// }];

// const el = `<div class="mhs">
// ${mhs.map(m => `<ul>
// <li>${m.nama}</li>
// <li>${m.email}</li>
// </ul>`).join('')}
// </div>`;

// 3. Condiitionals
// tenary
// const lagu = {
//     judul: 'Kau Adalah',
//     penyanyi: 'Isyana Saraswati'
//     feat: 'Rayi Putra'
// }

// const el = `<div class="lagu">
// <ul>
// <li>${lagu.penyanyi}</li>
// <li> ${lagu.judul}
// ${lagu.feat ? `(feat. ${lagu.feat})`: ''} 
// </li>
// </ul>
// </div>`;

// 4. Nested
// HTML Fragments Bersarang
// const mhs = {
//     nama: 'Refri Rifwan',
//     semster: 9,
//     mataKuliah: [
//         'Jaringan Komputer',
//         'Sistem Operasi',
//         'Pemrogrman Web',
//         'Rekayasa Perangkan Lunak'
//     ]
// };

// function cetakMataKuliah(mataKuliah) {
//     return `
//     <ol>
//     ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
//     </ol>
//     `;
// }

// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="semester">Semester : ${mhs.semster}</span>
// <h4>Mata Kuliah : </h4>
// ${cetakMataKuliah(mhs.mataKuliah)}
// </div>`;

// document.body.innerHTML = el;

// Tagged Template
// const nama = 'Refri Rifwan';
// const umur = 22;

// function coba(strings, ...values) {
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`;
//     // });
//     // return result;
//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }

// const str = coba `Halo, nama saya ${nama}, saya berusia ${umur} tahun.`;
// console.log(str);

const nama = 'Refri Rifwan';
const umur = 22;
const email = 'refririfwan@student.com';

function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}

const str = highlight `Halo, nama saya ${nama}, saya berusia ${umur} tahun, dan email saya adalah ${email}.`;
document.body.innerHTML = str;