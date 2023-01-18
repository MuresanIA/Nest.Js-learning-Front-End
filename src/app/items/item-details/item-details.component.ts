import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private itemsService: ItemsService, private router: Router) {}
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

  redirectToItems() {
    this.router.navigateByUrl('');
  }
}
