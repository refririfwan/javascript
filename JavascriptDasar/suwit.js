var tanya = true;
while (tanya) {
    // menangkap pilihan player
    var p = prompt('pilih : gajah, semut, orang');

    // menangkap pilihan computer
    // membangkitkan bilangan random
    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'semut';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'gajah'
    }

    hasil = '';
    // memnetukan rules
    if (p == comp) {
        hasil = 'SERI';
    } else if (p == 'gajah') {
        hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    } else if (p == 'orang') {
        hasil = (comp == 'semut') ? 'MENANG!' : 'KALAH!';
    } else if (p == 'semut') {
        hasil = (comp == 'gajah') ? 'MENANG!' : 'KALAH!';
    } else {
        hasil = 'Memasukan pilihan yang salah!';
    }

    // tampilkan hasilnya 
    alert('Kamu memilih : ' + p + '\nKomputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);

    tanya = confirm('main lagi ?');
}

alert('Terimakasih sudah bermain');