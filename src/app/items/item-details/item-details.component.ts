import { Component, OnInit } from '@angular/core';
import { catchError, take, tap } from 'rxjs';
import { ItemModel } from '../models/itemModel';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {
  itemModel!: ItemModel;
  constructor(private itemsService: ItemsService) {}
  ngOnInit(): void {
    this.getItemDetails();
  }

  getItemDetails() {
    this.itemsService
      .getitemModel()
      .pipe(
        tap((result) => {
          if (result) {
            this.itemModel = result;
            console.log('item details ------> ', this.itemModel);
          }
        }),
        take(1),
        catchError((err) => {
          console.log(err);
          return err;
        })
      )
      .subscribe();
  }
}
