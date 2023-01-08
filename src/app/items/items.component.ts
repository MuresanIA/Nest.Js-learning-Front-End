import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Item } from './interfaces/item.interface';
import { ItemsService } from './services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  itemModel: Item[] = [];

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.getItems();
  }


  getItems() {
    this.itemsService.getAllItems().pipe(
      tap( result => {
        if (result) {
          this.itemModel = result;
          console.log(this.itemModel);
        }
      })
    ).subscribe();
  }

  deleteItem(itemId: string) {
    this.itemsService.deleteItem(itemId).subscribe(
      result => {
        console.log(result);
      }
    );
  }
}
