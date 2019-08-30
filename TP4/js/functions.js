var carrito = [];
var productos = new Array();
var element = new element();
element.nombre = 'Arroz Gallo';
element.precio = 36.48;
productos.push(element);
var element = new element();
element.nombre = 'Atún La Campagnola';
element.precio = 136.21;
productos.push(element);

function agregar()
{
    carrito.push();
}

function eliminar()
{
    carrito.splice(x,1);
}

function listar()
{
    return productos;
}
