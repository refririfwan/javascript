// Latihan callback
$('.search-button').on('click', function () {
    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=5d49748b&s=' + $('.input-keyword').val(),
        success: results => {
            const movies = results.Search;
            let cards = '';
            movies.forEach(m => {
                cards += showCards(m);
            });
            $('.movie-container').html(cards);

            // Ketika tombol detail di klik
            $('.modal-detail-button').on('click', function () {
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=5d49748b&i=' + $(this).data('imdbid'),
                    success: m => {
                        const movieDetail = showCard(m);
                        $('.modal-body').html(movieDetail);
                    },
                    error: (e) => {
                        console.log(e.responseText);
                    }
                })
            })
        },
        error: (e) => {
            console.log(e.responseText);
        }
    })
})

function showCards(m) {
    return `
            <div class="col-md-4 my-4">
                <div class="card">
                    <img src = "${m.Poster}"
                    class = "card-img-top"
                    alt = "${m.Title}" >
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                        <a href = "#"
                        class = "btn btn-primary modal-detail-button" data-toggle = "modal" data-target = "#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>
            `;
}

function showCard(m) {
    return `                    
    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-3">
                                <img src="${m.Poster}" alt="${m.Title}" class="img-fluid">
                            </div>
                            <div class="col-md">
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <h4>${m.Title} (${m.Year})</h4>
                                    </li>
                                    <li class="list-group-item"><strong>
                                            Director :
                                        </strong> ${m.Director}</li>
                                    <li class = "list-group-item" > <strong > Actors: </strong>  ${m.Actors}</li >
                                    <li class = "list-group-item" > <strong > Writer: </strong>  ${m.Writer}</li >
                                    <li class = "list-group-item" > <strong > Plot: </strong> <br>  ${m.Plot}</li >
                                </ul>
                            </div>
                        </div>
                    </div>`
}