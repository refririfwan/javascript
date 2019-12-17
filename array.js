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
var arr = ["refri", "rifwan", "rifwanda"];
arr.unshift('daharmi');
console.log(arr.join('\n'));
arr.shift();
console.log(arr.join('\n'));