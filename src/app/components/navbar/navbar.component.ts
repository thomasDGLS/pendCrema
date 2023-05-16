import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  countBadge: number = 0;

  constructor(private _cartService: CardService) {}


  ngOnInit(): void {
    this._cartService.countObservable.subscribe({
      next: l => this.countBadge = l,
      error: e => console.error(e)
    });
  }

}
