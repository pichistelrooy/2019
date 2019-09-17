import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carrito';
  add = 0;
  modify = 0;
  remove = 0;

  setAdd(){
    this.modify = 0;
    this.remove = 0;
    if (this.add == 1) {
      this.add = 0;
    } else {
      this.add = 1;
    }
  }

  setModify(){
    this.add = 0;
    this.remove = 0;
    if (this.modify == 1) {
      this.modify = 0;
    } else {
      this.modify = 1;
    }
  }

  setRemove(){
    this.modify = 0;
    this.add = 0;
    if (this.remove == 1) {
      this.remove = 0;
    } else {
      this.remove = 1;
    }
  }

  productos = [];

  addProduct(){
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var description = document.getElementById("description").value;
    var price = document.getElementById("price").value;
    var stock = document.getElementById("stock").value;
    
    let producto = new Producto();
    producto.id = id;
    producto.name = name;
    producto.description = description;
    producto.price = price;
    producto.stock = stock;

    let producto1 = new Producto();
    producto1.id = 1;
    producto1.name = 'Jugo Tang Naranja';
    producto1.description = 'Sobre de jugo en polvo sabor naranja';
    producto1.price = 10;
    producto1.stock = 150;

    let producto2 = new Producto();
    producto2.id = 2;
    producto2.name = 'Jugo Tang Manzana';
    producto2.description = 'Sobre de jugo en polvo sabor manzana';
    producto2.price = 10.35;
    producto2.stock = 170;

    this.productos.push(producto);
    this.productos.push(producto1);
    this.productos.push(producto2);
    this.add = 0;
    alert("Producto agregado correctamente");
  }

  removeProduct(){
    var i: 0;
    var idRemove = document.getElementById("idRemove").value;
    this.productos.forEach(producto => {
      if (producto.id == idRemove){
        delete this.productos[idRemove]
      }
      i++;
    });
  }
}
