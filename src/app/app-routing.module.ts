import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateUpdateItemComponent } from './items/update-item/create-update-item.component';

const routes: Routes = [
  { path: '', component: ItemsComponent, },
  { path: 'create-update-item', component: CreateUpdateItemComponent },
  { path: '**', component: PageNotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
