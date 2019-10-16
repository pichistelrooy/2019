var cargarTodo = async function () {

    const clienteid = await cargarCliente();
    console.log("por fuera " + clienteid);

    const account = await cargarAccount(clienteid);
    console.log(account);
}

var cargarCliente = function () {
    var firstname = document.getElementById("firstName").value;
    var lastname = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    //console.log(firstname + " " + lastname + " " + email + "" + balance);

    return new Promise(function (Resolve, Reject) {
        var request = new XMLHttpRequest();
        request.open('POST', 'https://avanzada2-parcial1.herokuapp.com/api/clients?first_name=' +
            firstname + "&last_name=" + lastname + "&email=" + email);
        request.responseType = 'json';
        request.onload = function () {
            if (request.status == 200) {
                setTimeout(() => {
                    records = request.response;
                    console.log(records.id);
                    Resolve(request.response.id);
                }, 2000);
            }
            else {
                if (request.status == 409) {
                    Reject(Error("Ya existe una persona con ese email!: " + email +
                        ". Error: " + request.statusText));
                } else {
                    Reject(Error("No se pudo comunicar con el servico: " + request.statusText));
                    console.log(request.status);
                }
            }
        }

        request.onerror = function () {
            Reject(Error("Problemas de internet"));
        }

        request.send();
    })
}

var cargarAccount = function (clienteid) {
    var balance = document.getElementById("balance").value;
    return new Promise(function (Resolve, Reject) {
        var request = new XMLHttpRequest();
        request.open('POST', 'https://avanzada2-parcial1.herokuapp.com/api/accounts?client_id=' +
            clienteid + "&balance=" + balance);
        request.responseType = 'text';
        request.onload = function () {
            if (request.status == 200) {
                setTimeout(() => {
                    console.log(request.response);
                    Resolve(request.response);
                }, 2000);
            }
            else {
                if (request.status == 409) {
                    Reject(Error("Ya existe una persona con ese email!: " + email +
                        ". Error: " + request.statusText));
                } else {
                    Reject(Error("No se pudo comunicar con el servico: " + request.statusText));
                    console.log(request.status);
                }
            }
        }

        request.onerror = function () {
            Reject(Error("Problemas de internet"));
        }

        request.send();
    })
}

var clientes = [];

var loadFull = async function () {

    clientes = await getClients();
    //console.log(clientes);

    var cuentas = [];
    cuentas = await getAccount();
    //console.log(cuentas);

    //combino todo;
    clientes.forEach(cliente => {
        cuentas.forEach(cuenta => {
            if(cliente.accountid == cuenta.accountid)
            {
                cliente.balance = cuenta.balance;
                cliente.lastoperation = cuenta.last_operation_date;    
            }
        });
    });
    console.log(clientes);

    armarTabla(clientes);
}

var getClients = function() {

    return new Promise(function (Resolve, Reject) {
        var request = new XMLHttpRequest();
        request.open('GET', 'https://avanzada2-parcial1.herokuapp.com/api/clients');
        request.responseType = 'json';
        request.onload = function () {
            if (request.status == 200) {
                setTimeout(() => {
                    Resolve(request.response);
                }, 2000);
            }
            else {
                if (request.status == 409) {
                    Reject(Error("Ya existe una persona con ese email!: " + email +
                        ". Error: " + request.statusText));
                } else {
                    Reject(Error("No se pudo comunicar con el servico: " + request.statusText));
                    console.log(request.status);
                }
            }
        }

        request.onerror = function () {
            Reject(Error("Problemas de internet"));
        }

        request.send();
    })
}

var getAccount = function() {

    return new Promise(function (Resolve, Reject) {
        var request = new XMLHttpRequest();
        request.open('GET', 'https://avanzada2-parcial1.herokuapp.com/api/accounts');
        request.responseType = 'json';
        request.onload = function () {
            if (request.status == 200) {
                setTimeout(() => {
                    Resolve(request.response);
                }, 2000);
            }
            else {
                if (request.status == 409) {
                    Reject(Error("Ya existe una persona con ese email!: " + email +
                        ". Error: " + request.statusText));
                } else {
                    Reject(Error("No se pudo comunicar con el servico: " + request.statusText));
                    console.log(request.status);
                }
            }
        }

        request.onerror = function () {
            Reject(Error("Problemas de internet"));
        }

        request.send();
    })
}

function armarTabla(clientes) {
    var tr;
    console.log("hola");
    $('#cuerpo').html('');
    for (var i = 0; i < clientes.length; i++) {
        tr = $('<tr/>');
        tr.append("<td>" + clientes[i].id + "</td>");
        tr.append("<td>" + clientes[i].first_name + " " + clientes[i].last_name + "</td>");
        tr.append("<td>" + clientes[i].email + "</td>");
        tr.append("<td>" + clientes[i].balance + "</td>");
        tr.append("<td>" + clientes[i].lastoperation + "</td>");
        $('#cuerpo').append(tr);
    }
}
var ordenado = 0;

function ordenar(){
    if(ordenado == 0){
        //console.log("es 0");
        //console.log(clientes);
        clientes.sort((a,b) => (a.first_name > b.first_name ? 1 : -1));
        //console.log(clientes);
        //document.getElementById(NameArrow).class = "fas fa-sort-down";
        ordenado = 1;        
    } else{
        //console.log("es 1");
        //console.log(clientes);
        clientes.sort((a,b) => (a.first_name < b.first_name ? 1 : -1));
        //document.getElementById(NameArrow).className = "fas fa-sort-up";
        //console.log(clientes);
        ordenado = 0;
    }
    armarTabla(clientes);
}

loadFull();