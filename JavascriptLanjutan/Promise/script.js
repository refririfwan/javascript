// Promise
// Jquery
// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=5d49748b&s=x-men',
//     success: movies => console.log(movies)
// })

// Vanila Js
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.status === 200) {
//         if (xhr.readyState === 4) {
//             console.log(JSON.parse(xhr.response));
//         }
//     } else {
//         console.log(xhr.responseText);
//     }
// }

// xhr.open('get', 'http://www.omdbapi.com/?apikey=5d49748b&s=x-men');
// xhr.send();

// fetch 
// const movies = fetch('http://www.omdbapi.com/?apikey=5d49748b&s=x-men');
// console.log(movies);

// fetch('http://www.omdbapi.com/?apikey=5d49748b&s=x-men')
//     .then(response => response.json())
//     .then(response => console.log(response))

// promise
// Object yg mempresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yg akan datang
// janji (terpenuhi / ingkar)
// states (fulfilled  / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

// contoh 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('Janji telah di tepati.');
//     } else {
//         reject('Ingkar janji.')
//     }
// })

// janji1
//     .then(response => console.log('ok : ' + response))
//     .catch(response => console.log('not ok : ' + response))

// contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa wakti!')
//         }, 3000)
//     } else {
//         setTimeout(() => {
//             resolve('Tidak ditepati setelah beberapa wakti!')
//         }, 3000)
//     }
// })

// console.log('mulai');
// console.log(janji2.then(() => console.log(janji2)));
// janji2
//     .finally(() => console.log('selesai menunggu'))
//     .then(response => console.log('ok : ' + response))
//     .catch(response => console.log('not ok : ' + response))
// console.log('selesai');

// Promise.all()

const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'x-men',
            sutradara: 'refri',
            pemeran: 'rifwan'
        }])
    }, 2000)
})

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'bandung',
            temp: 26,
            kondisi: 'cerah berawan'
        }])
    }, 1000)
})

// film.then(response => console.log(response));
// cuaca.temp(response => console.log(response));

Promise.all([film, cuaca])
    // .then(response => console.log(response));
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    })