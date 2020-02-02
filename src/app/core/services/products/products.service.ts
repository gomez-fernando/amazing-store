import { Injectable } from '@angular/core';

// solo instalamos el cliente porque el módulo ya está en app.module
import { HttpClient } from '@angular/common/http';

import { Product } from './../../models/product.model';
import { environment } from './../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {



  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>(`${environment.url_api}/products/`);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post<Product[]>(`${environment.url_api}/products/`, product);
  }
}
