import { Component } from '@angular/core';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products: string[] = [];
  constructor(private data: DataService){
   this.getProducts();
  }
  public getProducts(){
    this.data.getProducts().
    subscribe((response) => {
     this.products = response;
    });
  }
}
