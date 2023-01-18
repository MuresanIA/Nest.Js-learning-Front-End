import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, takeLast, tap } from 'rxjs';
import { ItemModel } from './models/itemModel';
import { ItemsService } from './services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  itemModel: ItemModel[] = [];

  constructor(private itemsService: ItemsService, private router: Router) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.itemsService
      .getAllItems()
      .pipe(
        tap((result) => {
          if (result) {
            this.itemModel = result;
          }
        }),
        takeLast(1),
        catchError((err) => {
          console.log(err);
          return err;
        })
      )
      .subscribe();
  }

  deleteItem(itemId: string) {
    this.itemsService.deleteItem(itemId).subscribe();
  }

  redirectToUpdateItemComponent(item: ItemModel) {
    const newItem = new ItemModel(
      item._id,
      item.name,
      item.description,
      item.qty
    );
    console.log(newItem);
    this.itemsService.sendItemModel(newItem);
    this.router.navigate(['create-update-item']);
  }

  redirectToCreateItemComponent() {
    const emptyItem = new ItemModel();
    this.itemsService.sendItemModel(emptyItem);
    this.router.navigate(['create-update-item']);
  }

  openItemDetailsComponent(item: ItemModel) {
    const itemDetails = new ItemModel(
      '',
      item.name,
      item.description,
      item.qty,
      item.color,
      item.previousOwner
    );
    this.itemsService.sendItemModel(itemDetails);
    this.router.navigate(['item-details']);
  }
}
