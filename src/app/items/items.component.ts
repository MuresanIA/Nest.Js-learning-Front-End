import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { takeLast, tap } from 'rxjs';
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
            console.log(this.itemModel);
          }
        }),
        takeLast(1)
      )
      .subscribe();
  }

  deleteItem(itemId: string) {
    this.itemsService.deleteItem(itemId).subscribe((result) => {
      console.log(result);
    });
  }

  redirectToUpdateItemComponent(item: ItemModel) {
    const newItem = new ItemModel(
      item._id,
      item.qty,
      item.name,
      item.description
    );
    console.log(newItem);
    this.itemsService.sendItemModel(newItem);
    this.router.navigate(['update-item']);
  }
}
