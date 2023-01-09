import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from '../items.component';
import { ItemsService } from '../services/items.service';
import { UpdateItemComponent } from '../update-item/update-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateItemComponent } from '../create-item/create-item.component';



@NgModule({
  declarations: [ItemsComponent, UpdateItemComponent, CreateItemComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [ItemsService],
  exports: [ItemsComponent, UpdateItemComponent, ReactiveFormsModule, CommonModule, CreateItemComponent]
})
export class ItemsModule { }
