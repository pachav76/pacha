

document.getElementsByClassName('page-title')[0].onclick = addClassAbc();
$('.page-title').click(addClassAbc);
/*
var qwe = $('navbar-link');
for (var i = 0; i < qwe.length; i++) {
    console.log (qwe[i].innerText);
}

var str = $('.navbar-link')[0].innerText;

var q = 1;
*/
/*
$('.navbar-link').removeClass('abc');
*/
var q = 1;

function addClassAbc() {
    var links = document.getElementsByClassName('navbar-link');
        for (var i = 0; i < links.length; i++) {
            links[i].className += 'abc';
        }
        alert('added!');
    }

abc(11);

function abc(num) {

    var q = num / 2;
    var w = num % 2

        if (q > 1) abc(q);
        else console.log(w);
    
}
