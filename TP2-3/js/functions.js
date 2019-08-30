function deleteRow()
{
    var table = document.querySelector(".myTable");
    table.deleteRow(-1);
}

function insertRow()
{
    var table = document.querySelector(".myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = 'Header 1';
    cell2.innerHTML = 'Header 2';
}
