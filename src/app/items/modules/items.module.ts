import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from '../items.component';
import { ItemsService } from '../services/items.service';
import { CreateUpdateItemComponent } from '../update-item/create-update-item.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ItemsComponent, CreateUpdateItemComponent],
  imports: [CommonModule, NgbCollapseModule, NgbModule, ReactiveFormsModule],
  providers: [ItemsService],
  exports: [ItemsComponent, CreateUpdateItemComponent, CommonModule],
})
export class ItemsModule {}
