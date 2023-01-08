import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from '../items.component';
import { ItemsService } from '../services/items.service';
import { UpdateItemComponent } from '../update-item/update-item.component';



@NgModule({
  declarations: [ItemsComponent, UpdateItemComponent],
  imports: [
    CommonModule
  ],
  providers: [ItemsService],
  exports: [ItemsComponent, UpdateItemComponent]
})
export class ItemsModule { }
