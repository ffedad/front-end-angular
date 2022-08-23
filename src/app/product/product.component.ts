import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})

export class ProductComponent implements OnInit {
  
  public products: any[]  = [{image: "../../assets/milk.jpeg", _id: 1, name: "milk", price: 5},
                             {image: "../../assets/bread.jpeg", _id: 2, name: "bread", price: 4},
                             {image: "../../assets/water.jpg", _id: 3, name: "water", price: 2}];
  
  constructor(private http: HttpService) {}
  
  // _getProducts(): void {
  //   this.http.getAllProducts().subscribe((data: any) => {
  //     this.products = data.data;
  //     console.log(this.products);
  //   });
  // }

   _getProducts() {
      return this.products;
  }

  // _addItemToCart( id: any, quantity: any): void {
  //   let payload = {
  //     productId: id,
  //     quantity,
  //   };
  //   this.http.addToCart(payload).subscribe(() => {
  //     this._getProducts();
  //     alert('Product Added');
  //   });
  // }

  _addItemToCart( id: any, quantity: any): void {
    let payload = {
      productId: id,
      quantity,
    };
    this.http.addToCart(payload).subscribe(() => {
      this._getProducts();
      alert('Product Added');
    });
  }

  ngOnInit(): void {
    this._getProducts();
  }
}