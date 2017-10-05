$(document).ready(function () {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/photos',
        method: 'GET',
        success: function (data, status, xhr) {
            renderProducts(data.slice(0, 9));
        },
        error: function () {

        }
    });
});

function renderProducts(data) {
    
    var parentElem = $('.product-gallery')[0];
    var elem;
    for (i = 0; i < data.length; i++) {
        elem = document.createElement('div');
        elem.className = 'product-item';
        elem.innerHTML = '<img src="' + data[i].url + '">';
        parentElem.append(elem);
    }
}