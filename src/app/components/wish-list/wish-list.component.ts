import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Wish } from 'src/app/domain/wish';
import { WishService } from 'src/app/services/wish.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  wishs: Wish[] = [];

  constructor(private _wishService: WishService){}

  ngOnInit(): void {
    this.retrieveWishes();
  }


  retrieveWishes(): void {
    this._wishService.getAll().snapshotChanges().pipe(
      map(change =>
        change.map( c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.wishs = data;
    });
  }

}
