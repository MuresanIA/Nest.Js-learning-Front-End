import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from '../items.component';
import { ItemsService } from '../services/items.service';
import { UpdateItemComponent } from '../update-item/update-item.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ItemsComponent, UpdateItemComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [ItemsService],
  exports: [ItemsComponent, UpdateItemComponent, ReactiveFormsModule, CommonModule]
})
export class ItemsModule { }
