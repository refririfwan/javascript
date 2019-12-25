function getPilihanComputer() {
    const comp = Math.random();
    if (comp < 0.34) return 'semut';
    if (comp >= 0.34 && comp < 0.67) return 'orang';
    return 'gajah';
}

function getHasil(comp, player) {
    if (player == comp) return 'SERI!';
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    if (player == 'orang') return (comp == 'semut') ? 'MENANG!' : 'KALAH!';
    if (player == 'semut') return (comp == 'gajah') ? 'MENANG!' : 'KALAH!';
}

function putar() {
    const imgComputer = document.getElementsByClassName('img-komputer')[0];
    const gambar = ['gajah', 'orang', 'semut'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if (i == gambar.length) i = 0;
    }, 100);
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (pil) {
    pil.addEventListener('click', function () {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);
        putar();
        setTimeout(function () {
            const imgComputer = document.getElementsByClassName('img-komputer')[0];
            imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
            const info = document.getElementsByClassName('info')[0];
            info.innerHTML = hasil;
        }, 1000);
    });
});

// const pGajah = document.getElementsByClassName('gajah')[0];
// pGajah.addEventListener('click', function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
//     const imgComputer = document.getElementsByClassName('img-komputer')[0];
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
//     const info = document.getElementsByClassName('info')[0];
//     info.innerHTML = hasil;
// });

// const pOrang = document.getElementsByClassName('orang')[0];
// pOrang.addEventListener('click', function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
//     const imgComputer = document.getElementsByClassName('img-komputer')[0];
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
//     const info = document.getElementsByClassName('info')[0];
//     info.innerHTML = hasil;
// });

// const pSemut = document.getElementsByClassName('semut')[0];
// pSemut.addEventListener('click', function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
//     const imgComputer = document.getElementsByClassName('img-komputer')[0];
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
//     const info = document.getElementsByClassName('info')[0];
//     info.innerHTML = hasil;
// });