let carrito = [];

class Item{
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio   
    }

    toString(){
        return this.nombre + ': $' + this.precio;
    }
}

function agregar(){
    var item = new Item(document.getElementById("name").value,
        document.getElementById("price").value);
    carrito.push(item);
    alert("Producto agregado");
    document.getElementById("name").value = '';
    document.getElementById("price").value = '';
}

function mostrarcarrito(){
    carrito.forEach(element => {
        console.log(element.toString());
    });
}

function mostrarprecio(){
    let listaprecio = [];
    carrito.forEach(element => {
        listaprecio.push(element.precio);
    });
    console.log(listaprecio.reduce((a,b)=>parseInt(a)+parseInt(b)));
}