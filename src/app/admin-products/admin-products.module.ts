import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAllProdsComponent } from './components/admin-all-prods/admin-all-prods.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AdminAllProdsComponent],
  imports: [CommonModule, SharedModule],
})
export class AdminProductsModule {}
