import { Component, OnInit } from '@angular/core';
/*import { ProductListComponent} from 'src/app/components/product-list/product-list.component';
import { Producto } from 'src/app/models/producto';*/

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor() {
  }

  /*public Guardar(id: number,name: string,description: string,price: number,stock: number){
    let lista = new ProductListComponent;
    let producto = new Producto();
    producto.id = id;
    producto.name = name;
    producto.description = description;
    producto.price = price;
    producto.stock = stock;
    lista.productos.push(producto);
    console.log(id);
    console.log(name);
    console.log(description);
    console.log(price);
    console.log(stock);
  }*/

  /*public Hola(a: string){
    console.log(a);
  }*/

  ngOnInit() {
  }

}
