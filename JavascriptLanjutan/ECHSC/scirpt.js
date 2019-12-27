// 2.1 Execution Context, Hoisting & Scope
// console.log(nama);
// var nama = 'Refri';
// Creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// hoisting (naikin bendera)
// window = global object
// this = window

// Execution phase
// console.log(sayHello);
// console.log(sayHello());
// var nama = 'refri';
// var umur = 33;
// console.log(sayHello());

// function sayHello() {
//     // console.log(`Halo, nama saya ${nama}, saya berusia ${umur
//     // } tahun.`);
//     return `Halo, nama saya ${nama}, saya berusia ${umur} tahun.`;
// }

// function membuat local execution context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

// var nama = 'Refri Rifwan';
// var username = 'refririfwan';

// function cetakURL() {
//     var instagramURL = 'https://www.instagram.com/';
//     return instagramURL + username;
// }

// console.log(cetakURL('refririfwanda'));

// function a() {
//     console.log('ini a');

//     function b() {
//         console.log('ini b');

//         function c() {
//             console.log('ini c');

//         }
//         c();

//     }
//     b();

// }
// a();

// closure
// lexical scope
// function init() {
//     let nama = 'Refri';

//     function tampilNama() {
//         console.log(nama);
//     }
//     tampilNama()
// }
// init()

// function factory
// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!.`);
//     }
// }

// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// selamatPagi('Refri');
// selamatMalam('Rifwan');

// console.dir(selamatSiang);

// latihan closure
let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
})();

console.log(add());
console.log(add());
console.log(add());

// let a = add();

// console.log(a());
// console.log(a());
// console.log(a());