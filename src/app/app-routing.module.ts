import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateUpdateItemComponent } from './items/update-item/create-update-item.component';
import { ItemDetailsComponent } from './items/item-details/item-details.component';

const routes: Routes = [
  { path: '', component: ItemsComponent, },
  { path: 'create-update-item', component: CreateUpdateItemComponent },
  { path: 'item-details', component: ItemDetailsComponent },
  { path: '**', component: PageNotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
