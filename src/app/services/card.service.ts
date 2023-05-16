import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  length: number = 0;
  private count = new BehaviorSubject(this.length);
  countObservable = this.count.asObservable();

  constructor() { }

  addProductToCart() {
    this.count.next(++this.length);
    console.log(">>>> Add to cart trigger : " + this.count.value);

  }
}
