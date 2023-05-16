import { Injectable } from '@angular/core';
import { IPoduct } from '../domain/ipoduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  //Décalaration des variables
  private data: IPoduct[] = [
    {id: 10, title: "Clavier sans fil corsaire", unitPrice: 40.5},
    {id: 20, title: "Disque SSD 1 To", unitPrice: 101.53},
    {id: 30, title: "Ecran Dell 22' OLED 244Mhz", unitPrice: 225.37},
    {id: 40, title: "Souris optique ergonomique Logitec", unitPrice: 80}
  ];

  constructor() { }

  public getAllProducts(): IPoduct[] {
    return this.data;
  }

  public getProductById(id: number): IPoduct {
    let result = this.data.find(p => p.id == id);
    return result!;
  }

  public addProduct(tmpProduct: IPoduct): boolean {

    if (this.data.find(temp => temp.id == tmpProduct.id)) {
      console.error("Un objet avec cette id existe déjà !");
      return false;
    }
    else {
      this.data.push(tmpProduct);
      console.log("Ajout du product : " + tmpProduct.title);
      return true;
    }

    return false;

  }
}
