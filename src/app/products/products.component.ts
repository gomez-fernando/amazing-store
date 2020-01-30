import { Component, OnInit } from '@angular/core';
import { Product } from './../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 60,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu est ut felis rutrum dapibus. Sed finibus.'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 60,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu est ut felis rutrum dapibus. Sed finibus.'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 60,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu est ut felis rutrum dapibus. Sed finibus.'
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 60,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu est ut felis rutrum dapibus. Sed finibus.'
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 60,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu est ut felis rutrum dapibus. Sed finibus.'
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 60,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu est ut felis rutrum dapibus. Sed finibus.'
    }
  ];

  constructor() {}

  ngOnInit() {}

  clickProduct(id: number) {
    console.log('product: ');
    console.log(id);
  }
}
