var page = 0;
var itemsCount = 9;

$(document).ready(function () {
    loadPhotos();
    $('#login-email').val('a-tone007@list.ru');
});

$('#login-button').click(function () {
    var login = $('#login-email').val();
    var password = $('#login-password').val();

    $.post({
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: {'email': login, password},
        success: function (data) {

        },
        error: function () {

        }
    });
});

function loadPhotos() {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/photos',
        method: 'GET',
        success: function (data, status, xhr) {
            renderProducts(data.slice(page, itemsCount));
            
            //fillCarousel(data.slice(0, 9));
            page++;
        },
        error: function () {
            
        }
    });
}

$('.show-more-button .fa-plus-circle').click(showMoreClicked);

function showMoreClicked() {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/photos',
        method: 'GET',
        success: function (data, status, xhr) {
            setTimeout(function() {
                renderProducts(data.slice(page * itemsCount, (page + 1) * itemsCount));
            }, 0);
            
            page++;
        },
        error: function () {
            
        }
    });
}

function renderProducts(data) {
    // var parentElem = $('.product-gallery')[0];
    // var elem;
    // for (i = 0; i < data.length; i++) {
    //     elem = document.createElement('div');
    //     elem.className = 'product-item';
    //     elem.innerHTML = '<img src="' + data[i].url + '">';
    //     parentElem.append(elem);
    // }

    var parentElem = $('#product-gallery-container');
    var elem;
    for (i = 0; i < data.length; i++) {
        parentElem.append('<div class="product-item hided"><img src="' + data[i].url + '"></div>');
    }

    setTimeout(() => {
        var elems = document.getElementsByClassName('product-item');
        var i = (page - 1) * itemsCount;
        (function loop() {
            elems[i].className = 'product-item';
            if (++i < elems.length) {
                setTimeout(loop, 200);
            }
        })();
    }, 0);
}

function fillCarousel(data) {
    var parentElem = $('.carousel-inner');
    var elem;
    for (i = 0; i < data.length; i++) {
        parentElem.append(
            `<div class="carousel-item ${((i === 0) ? ' active' : '')}">
                <img class="d-block w-100" src="${data[i].url}" alt="${data[i].title}">
            </div>`
        );
    }
}