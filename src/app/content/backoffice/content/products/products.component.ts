import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {IProduct, ProductsService} from '../../../../services/products.service';
import {MatCheckboxChange} from '@angular/material/checkbox';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products$: Observable<IProduct[]> = this.productsServer.getProductsJson();
  public searchText = '';
  public hasFavorites = false;

  constructor(private productsServer: ProductsService) {
    console.log(this.productsServer.timestamp);
  }

  ngOnInit(): void {
  }
  public searchProductByTitle(text: string): void {
    console.log(text);
    this.searchText = text;
  }

  public productsFilter(products: IProduct[]): IProduct[] {
    return products.filter((product: IProduct) => {
      return `${product.title} ${product.price}`.toLocaleLowerCase().includes(this.searchText.toLowerCase());
    });
  }

  toggleFavoriteProducts(event: MatCheckboxChange): void {
    this.hasFavorites = event.checked;
    // console.log(this.hasFavorites);
  }
}
