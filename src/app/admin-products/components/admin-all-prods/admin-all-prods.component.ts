import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin-all-prods.service';
import { Product } from 'src/app/products/models/products';

@Component({
  selector: 'app-admin-all-prods',
  templateUrl: './admin-all-prods.component.html',
  styleUrls: ['./admin-all-prods.component.scss'],
})
export class AdminAllProdsComponent implements OnInit {
  adminProds: Product[] = [];
  categories: string[] = [];
  form!: FormGroup;
  base64: any = '';
  constructor(private adminServies: AdminService, private build: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.build.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      category: ['', [Validators.required]],
    });
    this.getAdminAllProds();
    this.getAdminCategories();
  }

  getAdminAllProds() {
    this.adminServies.getAllProducts().subscribe(
      (res: any) => {
        this.adminProds = res;
        // console.log(res);
      },
      (error) => alert(error)
    );
  }

  getAdminCategories() {
    this.adminServies.getAllCategories().subscribe(
      (res: any) => {
        // console.log(res);
        this.categories = res;
      },
      (error) => {
        alert(error);
      }
    );
  }

  getSelectedCategory(event: any) {
    this.form.get('category')?.setValue(event.target.value);
  }

  getImagePath(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64 = reader.result;
      this.form.get('image')?.setValue(this.base64);
      console.log(this.base64);
    };
  }

  addProduct() {
    const model = this.form.value;
    this.adminServies.createProduct(model).subscribe((res: any) => {
      alert('Product Added Successfully!');
    });
    console.log(this.form);
  }

  updateProdData(item: any) {
    this.form.get('title')?.setValue(item.title);
    this.form.get('price')?.setValue(item.price);
    this.form.get('description')?.setValue(item.description);
    this.form.get('category')?.setValue(item.image);
    this.form.get('category')?.setValue(item.category);
    this.base64 = item.image;
  }
  // this.form.patchValue({
  //   title: item.title,
  //   price: item.price,
  //   description: item.description,
  //   image: item.image,
  //   category: item.category,
  // })
}
