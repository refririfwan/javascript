const p3 = document.getElementsByClassName('p3')[0];

function ubahWarna() {
    // p3.style.backgroundColor = 'lightblue';
    p2.style.backgroundColor = 'lightblue';
}

const p2 = document.getElementsByClassName('p2')[0];
p2.onclick = ubahWarna;

const p4 = document.getElementsByTagName('p')[3];
p4.addEventListener('click', function () {
    // alert('ok');
    const ul = document.getElementsByTagName('ul')[0];
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('item baru');
    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru);
});
// event handler > menimpa yang sudah ada Vs eventlistener > menambahkan event baru