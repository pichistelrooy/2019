import { data } from "./MOCK_DATA.js"

function loadData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 1000)
    })
}

function renderTable(datos) {
    var table = document.getElementById("table");
    var body = table.getElementsByTagName("tbody")[0];
    while (body.firstChild) body.removeChild(body.firstChild);
    datos.forEach(element => {
        var row = body.insertRow(-1);
        var id = row.insertCell(-1)
        id.innerHTML = element.id
        var fname = row.insertCell(-1);
        fname.innerHTML = element.first_name;
        var lname = row.insertCell(-1);
        lname.innerHTML = element.last_name;
        var email = row.insertCell(-1);
        email.innerHTML = element.email;
        var dni = row.insertCell(-1);
        dni.innerHTML = element.dni;
    });
}

function sort() {
    loadData().then(r => {
        var field = document.getElementById("field").value;
        var sort = document.getElementById("sort").value;
        var tbody = document.getElementById("table").getElementsByTagName("tbody")[0];

        var result = sortData(r, field, sort);
        renderTable(result);
    })
}

window.onload = () => {
    const sortBtn = document.getElementById("sortBtn");
    sortBtn.addEventListener("click", () => sort());
    loadData().then(r => renderTable(r));
}

function sortData(r, field, sort) {
    if (sort.toUpperCase() === 'ASC') {
        r.sort((a, b) => (a[field] > b[field]) ? 1 : ((a[field] < b[field]) ? -1 : 0));
    }
    else {
        r.sort((a, b) => (a[field] < b[field]) ? 1 : ((a[field] > b[field]) ? -1 : 0));
    }
    return r;
}