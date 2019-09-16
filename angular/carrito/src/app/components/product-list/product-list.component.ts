import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  productos = [];

  constructor(){
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

    this.productos.push(producto1);
    this.productos.push(producto2);
  }

  ngOnInit() {
  }
}
