var angka = prompt('Masukan angka : ');
if (angka % 2 === 0) {
    alert(angka + ' adalah bilangan Genap');
} else if (angka % 2 === 1) {
    alert(angka + ' adalah bilangan Ganjil');
} else {
    alert('yang anda masukan bukan angka!');
}