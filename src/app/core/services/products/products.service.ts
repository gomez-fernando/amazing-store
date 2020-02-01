import { Injectable } from '@angular/core';

// solo instalamos el cliente porque el módulo ya está en app.module
import { HttpClient } from '@angular/common/http';

import { Product } from './../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {



  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>('https://platzi-store.herokuapp.com/products/');
  }

  getProduct(id: string) {
    return this.http.get(`'https://platzi-store.herokuapp.com/products/'${id}`);
  }
}
