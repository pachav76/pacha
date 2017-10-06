var Name = prompt('Who that?','');

if (Name == 'Admin') {
    var pass = prompt ('Password','');

    if (pass == 'BlackMaster') {
        alert( 'Welcome!' );
    } else if (pass == null) {
        alert ('Acces denied');
    }
    else {
        alert ('Password wrong');
    }

} else if (Name == null) {
    alert ('Acces denied');
} else {
    alert ('I dont know you');
}