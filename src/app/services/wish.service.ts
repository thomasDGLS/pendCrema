import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Wish } from '../domain/wish';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  private dbPath = '/wishlist';

  wishesRef: AngularFirestoreCollection<Wish>;

  constructor(private _db: AngularFirestore) {
    this.wishesRef = _db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Wish> {
    return this.wishesRef;
  }

  create(wish: Wish): any {
    return this.wishesRef.add({ ...wish });
  }

  update(id: string, data: any): Promise<void> {
    return this.wishesRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.wishesRef.doc(id).delete();
  }
}
