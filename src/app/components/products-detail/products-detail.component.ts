import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPoduct } from 'src/app/domain/ipoduct';
import { CardService } from 'src/app/services/card.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent implements OnInit {

  product!: IPoduct;

  constructor(private _activated_route: ActivatedRoute,
      private _service: ProductsService,
      private _cartService: CardService
    ){}


  ngOnInit(): void {
    //let id: number = Number(this._activated_route.snapshot.paramMap.get('id'));

    this._activated_route.paramMap.subscribe({
      next: p => {
        let id: number = Number(p.get('id'));
        this.product = this._service.getProductById(id);
      },
      error: e => console.error("Erreur lors de l'invocation du service : " + e)
    });
  }

  addProductToCart() {
    this._cartService.addProductToCart();
  }

}
