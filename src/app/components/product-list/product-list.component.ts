import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = ' This is the Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;

  products: any[] = [
    {
      "productId": 2,
      "productName": "Garden cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2021",
      "description": "15 gallon capacity",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/image.jpg"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 18, 2021",
      "description": "Curved clarw steel hammer",
      "price": 8.99,
      "starRating": 4.8,
      "imageUrl": "assets/image.jpg"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
