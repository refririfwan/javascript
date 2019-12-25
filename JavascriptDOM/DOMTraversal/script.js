// Event Handling
// const close = document.getElementsByClassName('close')[0];
// const card = document.getElementsByClassName('card')[0];

// close.addEventListener('click', function () {
//     card.style.display = 'none';
// })

// DOM Traversal
// const close = document.getElementsByClassName('close');
// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function (event) {
//         // close[i].parentElement.style.display = 'none';
//         event.target.parentElement.style.display = 'none';
//     });
// }
const close = document.querySelectorAll('.close');
close.forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.target.parentElement.style.display = 'none';
        // prevent default
        e.preventDefault();
        // menghentikan bubbling
        e.stopPropagation();
    });
});

// event bubbling
const cards = document.querySelectorAll('.card');
cards.forEach(function (card) {
    card.addEventListener('click', function (e) {
        alert('ok');
    })
})