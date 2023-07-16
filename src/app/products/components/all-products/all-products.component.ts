import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/products';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  products: Product[] = [];
  categories: string[] = [];
  loading: boolean = false;
  cartProducts: any[] = [];
  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.loading = true;
    this.service.getAllProducts().subscribe(
      (res: any) => {
        // console.log(res);
        this.products = res;
        this.loading = false;
      },
      (error) => {
        alert(error);
        this.loading = false;
      }
    );
  }

  getCategories() {
    this.loading = true;
    this.service.getAllCategories().subscribe(
      (res: any) => {
        // console.log(res);
        this.categories = res;
        this.loading = false;
      },
      (error) => {
        alert(error);
        this.loading = false;
      }
    );
  }

  filterCategory(event: any) {
    let value = event.target.value;
    if (value == 'all') {
      this.getProducts();
    } else {
      this.getProductsCategory(value);
    }
  }

  getProductsCategory(keyword: string) {
    this.loading = true;
    this.service.getProductsByCategory(keyword).subscribe((res: any) => {
      this.products = res;
      this.loading = false;
    });
  }

  addToCart(event: any) {
    // JSON.stringify() /// To Send Data
    // JSON.parse() /// To Receive Data
    // console.log(event);

    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      let existedItem = this.cartProducts.find(
        (item) => item.item.id == event.item.id
      );
      if (existedItem) {
        alert('Item Is Already Exists In Your Cart');
      } else {
        this.cartProducts.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));
      }
    } else {
      this.cartProducts.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
  }
}
