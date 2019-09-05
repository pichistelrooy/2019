var carrito = [];
var productos = new Array();

var prod1 = { Name : 'Arroz Gallo', Price : '36.48' };
var prod2 = { Name : 'Atún La Campagnola', Price : '136.21' };
var prod3 = { Name : 'Vainillas Valente', Price : '38.00' };
var prod4 = { Name : 'Gelatina Exquisita Sabor Frutilla', Price : '26.34' };
var prod5 = { Name : 'Nuggets de pollo Sadia', Price : '321.89' };
var prod6 = { Name : 'Tomate kilo', Price : '40' };
productos.push(prod1);
productos.push(prod2);
productos.push(prod3);
productos.push(prod4);
productos.push(prod5);
productos.push(prod6);
listar();

function agregar(id)
{
    //console.log(id);
    var carro = document.getElementById('carro');
    var add = document.getElementsByName('filaproductos')[id].innerText;
    //console.log(document.getElementsByName('filaproductos')[id].innerText);

    productos.forEach(producto => 
    {
        if (producto.Name === add) {
            carrito.push(producto);        
        }
    });

    var fila = document.createElement('label');
    fila.innerHTML = add;
    fila.setAttribute('class','mb-2 mr-2');

    var num = document.createElement('input');
    num.setAttribute('type','number');
    num.setAttribute('max','9');
    num.setAttribute('value',1);
    num.setAttribute('class','number mb-2 mr-2');

    var ig = document.createElement('div');
    ig.setAttribute('class','input-group');
    ig.appendChild(fila);
    ig.appendChild(num);

    carro.appendChild(ig);
    carrito.forEach(itemcompra => 
    {
        console.log(itemcompra.Name + ' ' + itemcompra.Price);
    });
}

function eliminar()
{
    carrito.splice(x,1);
}

function listar()
{
    var empTab = document.getElementById('productos');

    var rowCnt = empTab.rows.length;        // GET TABLE ROW COUNT.
    var tr = empTab.insertRow(rowCnt);      // TABLE ROW.
    tr = empTab.insertRow(rowCnt);
    var c = 0;
    productos.forEach(producto => 
    {
        if (c > 0) {
            tr = empTab.insertRow(rowCnt);
        }
        var td = document.createElement('td');         
        td.innerHTML = producto.Name;
        td.setAttribute('name','filaproductos');
        tr.appendChild(td);
        var td = document.createElement('td');         
        td.innerHTML = producto.Price;
        tr.appendChild(td);
        var td = document.createElement('td');         
        // ADD A BUTTON.
        var button = document.createElement('input');
        // SET INPUT ATTRIBUTE.
        button.setAttribute('type', 'button');
        button.setAttribute('value', 'Agregar');
        button.setAttribute('class', 'btn btn-success');
        c++;
        button.setAttribute('id',productos.length - c);
        // ADD THE BUTTON's 'onclick' EVENT.
        button.setAttribute('onclick', 'agregar(this.id)');
        td.appendChild(button);
        tr.appendChild(td);
    })
}
