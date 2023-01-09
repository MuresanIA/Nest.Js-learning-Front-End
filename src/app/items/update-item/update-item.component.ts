import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take, tap } from 'rxjs';
import { ItemModel } from '../models/itemModel';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.scss'],
})
export class UpdateItemComponent implements OnInit {
  itemModel: ItemModel | undefined;
  updateItemForm = new FormGroup({
    itemName: new FormControl('', Validators.required),
    itemDescription: new FormControl('', Validators.required),
    itemQty: new FormControl('', Validators.required),
  });

  constructor(private router: Router, private itemService: ItemsService) {}

  ngOnInit(): void {
    this.getItemModel();
  }

  getItemModel() {
    this.itemService
      .getitemModel()
      .pipe(
        tap((result) => {
          this.itemModel = new ItemModel(
            result._id,
            result.qty,
            result.name,
            result.description
          );
          this.setPreviousValues();
        }),
        take(1)
      )
      .subscribe();
  }

  setPreviousValues() {
    this.updateItemForm.controls['itemName'].setValue(this.itemModel?.name);
    this.updateItemForm.controls['itemDescription'].setValue(
      this.itemModel?.description
    );
    this.updateItemForm.controls['itemQty'].setValue(this.itemModel?.qty);
  }

  onSubmit() {
    const builtItemModel: ItemModel = new ItemModel(
      this.itemModel?._id,
      this.updateItemForm.controls['itemQty'].value,
      this.updateItemForm.controls['itemName'].value,
      this.updateItemForm.controls['itemDescription'].value
    );
    this.itemService
      .updateItem(builtItemModel, builtItemModel._id || '')
      .pipe(
        tap((result) => {
          builtItemModel._id = result._id || '';
        }),
        take(1)
      )
      .subscribe();
    console.log(builtItemModel);
    this.router.navigateByUrl('/');
  }
}
