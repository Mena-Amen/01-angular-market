import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  carts: any[] = [];
  products: any[] = [];
  form!: FormGroup;
  details: any;
  // total: any = 0;
  // success: boolean = false;
  constructor(
    private service: CartsService,
    private bulid: FormBuilder,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    // this.getCartProduct();
    this.form = this.bulid.group({
      start: [''],
      end: [''],
    });
    this.getAllCarts();
  }

  getAllCarts() {
    this.service.getAllCarts().subscribe((res: any) => {
      this.carts = res;
    });
  }

  applyFilter() {
    let date = this.form.value;
    this.service.getAllCarts(date).subscribe((res: any) => {
      this.carts = res;
    });
    // console.log(this.form.value);
  }

  deleteCart(id: number) {
    this.service.deleteCart(id).subscribe((res: any) => {
      this.getAllCarts();
      alert('Cart Item Deleted');
    });
  }

  view(index: number) {
    this.products = [];
    this.details = this.carts[index];
    for (let x in this.details.products) {
      this.productService
        .getProductById(this.details.products[x].productId)
        .subscribe((res) => {
          this.products.push({
            item: res,
            quantity: this.details.products[x].quantity,
          });
        });
    }
    console.log(this.details);
  }

  // getCartProduct() {
  //   if ('cart' in localStorage) {
  //     this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
  //     // console.log(this.cartProducts);
  //   }
  //   this.getTotalPrice();
  // }

  // getTotalPrice() {
  //   this.total = 0;
  //   for (let x in this.cartProducts) {
  //     this.total +=
  //       this.cartProducts[x].item.price * this.cartProducts[x].quantity;
  //   }
  // }

  // addAmount(index: any) {
  //   this.cartProducts[index].quantity++;
  //   this.getTotalPrice();
  //   localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  // }

  // minsAmount(index: any) {
  //   this.cartProducts[index].quantity--;
  //   this.getTotalPrice();
  //   localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  // }

  // detectChange() {
  //   localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  // }

  // deleteProduct(index: number) {
  //   this.cartProducts.splice(index, 1);
  //   this.getTotalPrice();
  //   localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  // }

  // clearCart() {
  //   this.cartProducts = [];
  //   localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  //   this.getTotalPrice();
  // }

  // addCartToBackend() {
  //   let products = this.cartProducts.map((item) => {
  //     return { productId: item.item.id, quantity: item.quantity };
  //   });

  //   let Model = {
  //     userID: 2,
  //     date: new Date(),
  //     products: products,
  //   };
  //   console.log(Model);

  //   this.service.createNewCart(Model).subscribe((res) => {
  //     this.success = true;
  //   });
  // }
}
