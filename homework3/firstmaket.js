var page = 0;
var itemsCount = 9;

$(document).ready(function () {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/photos',
        method: 'GET',
        success: function (data, status, xhr) {
            renderProducts(data.slice(page, itemsCount));
            page++;
        },
        error: function () {

        }
    });
});

$('.show-more-buttom .fa-plus-circle').click(showMoreClicked);

function showMoreClicked() {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/photos',
        method: 'GET',
        success: function (data, status, xhr) {
            renderProducts(data.slice(page * itemsCount, (page + 1) * itemsCount));
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
var parentElem = $('.carousel-inner');
var elem;
for (i = 0; i < data.length; i++) {
    parentElem.append (
    '<div class="carousel-item' + ((i === 0) ? ' active' : '') + '">' +
        `<img class="d-block w-100" src="` + data[i].url + `" alt="` + data[i].title + `">
      </div>`
    );
    }
}

