// Manipulasi Array

// 1. Menambah isi array
// var arr = [];
// arr[0] = "refri";
// arr[1] = "rifwan";
// arr[2] = "rifwanda";
// arr[6] = "daharmi";
// console.log(arr);

// 2. Menghapus isi array
// var arr = ["refri", "rifwan", "rifwanda", "daharmi"];
// arr[3] = undefined;
// console.log(arr);

// 3. Menampilkan isi array
// var arr = ["refri", "rifwan", "rifwanda", "daharmi"];
// for (var i = 0; i < arr.length; i++) console.log('Mahasiswa ke-' + (i + 1) + ' : ' + arr[i]);

// Method pada array
// 1. Join
// var arr = ["refri", "rifwan", "rifwanda", "daharmi"];
// console.log(arr.join('\n'));

// 2. push & pop (elemen terakhir)
// var arr = ["refri", "rifwan", "rifwanda"];
// arr.push('daharmi', 'tanjung');
// console.log(arr.join('\n'));
// arr.pop()
// console.log(arr.join('\n'));

// 3. unshift & shift (elemen awal)
// var arr = ["refri", "rifwan", "rifwanda"];
// arr.unshift('daharmi');
// console.log(arr.join('\n'));
// arr.shift();
// console.log(arr.join('\n'));

// 4. splice (menyisipkan elemen array ditengah)
// splice(indexAwal, mauDihapusBerapa, elementBaru1, elementBaru2, ...)
// var arr = ["refri", "rifwan", "rifwanda"];
// arr.splice(2, 2, 'daharmi', 'rifwanda');
// console.log(arr.join('\n'));

// 5. slice (mengiris array)
// slice(awal,akhir)
// var arr = ["refri", "rifwan", "daharmi", "rifwanda"];
// console.log(arr.join('\n'));
// var arr2 = arr.slice(0, 2);
// console.log(arr2.join('\n'));

// 6. foreach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// angka.forEach(function (e) {
//     console.log(e)
// });
// var nama = ["refri", "rifwan", "daharmi", "rifwanda"];
// nama.forEach(function (e, i) {
//     console.log('Mahasiswa ke-' + (i + 1) + ' adalah ' + e);
// });

// 7. map (mengembalikan array)
// var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var angka2 = angka.map(function (e) {
//     return e * 2;
// });
// console.log(angka2.join('\n'));

// 8. sort
var angka = [1, 2, 3, 10, 4, 5, 0, 6, 7, 20, 8, 9];
angka.sort(function (a, b) {
    return a - b;
});
console.log(angka.join('\n'));