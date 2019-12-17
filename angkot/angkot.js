var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.length == 0) {
        // tambah penumpang
        penumpang.push(namaPenumpang);
        // kembalikan isi array dan keluar dari fungsi
        return penumpang;
    } else {
        // telusuri seleuruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            // jika ada kursi kosong
            if (penumpang[i] == undefined) {
                // tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                // kembali isi array & keluar dari fungsi
                return penumpang;
            }
            // jika suda ada nama yang sama
            else if (penumpang[i] == namaPenumpang) {
                // tampilkan pesan kesalahannya
                console.log(namaPenumpang + ' sudah ada di dalam angkot.');
                // kembalikan isi array & keluar dari fungsi
                return penumpang;
            }
            // jika seuruh kursi terisi
            else if (i == penumpang.length - 1) {
                // tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array & keluar dari fungsi
                return penumpang;
            }
        }
    }
}

var hapusPenumpang = function (namaPenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.length == 0) {
        console.log('Angkot masih kosong');
        return penumpang;
    } else {
        // telusri kursi penumpang
        for (var i = 0; i < penumpang.length; i++) {
            // jika nama penumpang yg akan dihapus ada
            if (penumpang[i] == namaPenumpang) {
                // kosongkan array
                penumpang[i] = undefined;
                // kembalikan isi array
                return penumpang;
            }
            // jika ditelusuri sampai akhir tidak ada nama yang sama
            else if (i == penumpang.length - 1) {
                // tampilkan pesan kesalahan
                console.log(namaPenumpang + ' tidak ada di dalam Angkot.');
                // kembalikan isi array
                return penumpang;
            }
        }
    }
}