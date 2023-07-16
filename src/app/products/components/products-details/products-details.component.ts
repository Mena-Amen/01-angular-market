import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss'],
})
export class ProductsDetailsComponent implements OnInit {
  id: any;
  idData: any = {};
  loading: boolean = false;
  constructor(
    private router: ActivatedRoute,
    private services: ProductsService
  ) {
    this.id = this.router.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.loading = true;
    this.services.getProductById(this.id).subscribe(
      (res) => {
        this.loading = false;
        this.idData = res;
      },
      (error) => {
        this.loading = false;
        alert(error);
      }
    );
  }
}
