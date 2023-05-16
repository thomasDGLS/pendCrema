import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IPoduct } from 'src/app/domain/ipoduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.scss']
})
export class ProductsAddComponent {

  productForm = this._fb.group({
    productId: [, Validators.required],
    productTitle: ['', [Validators.required, Validators.minLength(5)]],
    unitPrice: [1, Validators.required]
  });

  sendError: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private _service: ProductsService
    ) {}

  addProduct() {
    let tmpProduct: IPoduct = {
      id: this.productForm.value.productId!,
      title: this.productForm.value.productTitle!,
      unitPrice: this.productForm.value.unitPrice!
    }
    if(!this._service.addProduct(tmpProduct)) {
      this.sendError = true;
    }
    console.log(this.productForm.value);
  }
}
