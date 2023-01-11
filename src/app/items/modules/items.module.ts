import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from '../items.component';
import { ItemsService } from '../services/items.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateUpdateItemComponent } from '../update-item/create-update-item.component';



@NgModule({
  declarations: [ItemsComponent, CreateUpdateItemComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [ItemsService],
  exports: [ItemsComponent, CreateUpdateItemComponent, ReactiveFormsModule, CommonModule]
})
export class ItemsModule { }
