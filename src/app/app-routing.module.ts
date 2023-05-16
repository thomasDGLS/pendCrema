import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsPromotionsComponent } from './components/products-promotions/products-promotions.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import { ProductsAddComponent } from './components/products-add/products-add.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { WishAddComponent } from './components/wish-add/wish-add.component';

const routes: Routes = [
  {path: "", redirectTo: "products", pathMatch:'full'},
  {path: "products", component: ProductsListComponent},
  {path: "product/:id", component: ProductsDetailComponent},
  {path: "addProduct", component: ProductsAddComponent},
  {path: "wish", component: WishListComponent},
  {path: "addWish", component: WishAddComponent},
  {path: "promotions", component: ProductsPromotionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
