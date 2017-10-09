var page = 0;
var itemsCount = 9;

$(document).ready(function () {
    showMoreClicked();
});

$('.show-more-buttom .fa-plus-circle').click(showMoreClicked);

function showMoreClicked() {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/photos',
        method: 'GET',
        success: function (data, status, xhr) {
            renderProducts(data.slice(page * itemsCount, (page + 1) * itemsCount));
            fillCarousel(data.slice(page * itemsCount, (page + 1) * itemsCount));
            page++;
        },
        error: function () {

        }
    });
}

function renderProducts(data) {
    var parentElem = $('.product-gallery-container')[0];
    var elem;
    for (i = 0; i < data.length; i++) {
        elem = document.createElement('div');
        elem.className = 'product-item';
        elem.innerHTML = '<img src="' + data[i].url + '">';
        parentElem.append(elem);
    }
}

function fillCarousel(data) {
    var parentElem = $('#carouselExampleSlidesOnly .carousel-inner');
    var elem;
    for (i = 0; i < data.length; i++) {
        console.debug(data[i]);
        const child = `
            <div class="carousel-item'>
                <img class="d-block w-100" src="${data[i].url}" alt="${data[i].title}">
            </div>
        `;
        parentElem.append(child);
    }
}

