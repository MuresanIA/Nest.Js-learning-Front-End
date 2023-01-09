import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateItemComponent } from './items/create-item/create-item.component';
import { ItemsComponent } from './items/items.component';
import { UpdateItemComponent } from './items/update-item/update-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: ItemsComponent },
  { path: 'update-item', component: UpdateItemComponent },
  { path: 'create-item', component: CreateItemComponent },
  { path: '**', component: PageNotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
