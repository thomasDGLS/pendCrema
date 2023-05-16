import { Component, OnInit } from '@angular/core';
import { IPoduct } from 'src/app/domain/ipoduct';
import { Wish } from 'src/app/domain/wish';
import { ProductsService } from 'src/app/services/products.service';
import { WishService } from 'src/app/services/wish.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  data: IPoduct[] = [];

  constructor(private _service: ProductsService) {}


  ngOnInit(): void {
    this.data = this._service.getAllProducts();
  }

}
