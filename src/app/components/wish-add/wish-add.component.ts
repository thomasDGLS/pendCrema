import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Wish } from 'src/app/domain/wish';
import { WishService } from 'src/app/services/wish.service';

const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

@Component({
  selector: 'app-wish-add',
  templateUrl: './wish-add.component.html',
  styleUrls: ['./wish-add.component.scss']
})
export class WishAddComponent implements OnInit {

  wishForm = this._fb.group({
    titre: ['', [Validators.required]],
    marque: ['', Validators.required],
    lien: ['', Validators.required],
    image: ['', [Validators.required, Validators.pattern(reg)]]
  });

  constructor(private _wishService: WishService, private _fb: FormBuilder){}

  ngOnInit(): void {}

  addWish(): void {
    let tmpWish: Wish = {
      titre: this.wishForm.getRawValue().titre,
      marque: this.wishForm.getRawValue().marque,
      lien: this.wishForm.getRawValue().lien,
      image: this.wishForm.getRawValue().image,
      isReserve: false
    };

    this._wishService.create(tmpWish).then();

    this.wishForm.reset();
  }

}
