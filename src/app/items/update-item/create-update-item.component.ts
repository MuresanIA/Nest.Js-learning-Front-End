import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take, tap } from 'rxjs';
import { ItemModel } from '../models/itemModel';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-create-update-item',
  templateUrl: './create-update-item.component.html',
  styleUrls: ['./create-update-item.component.scss'],
})
export class CreateUpdateItemComponent implements OnInit {
  itemModel!: ItemModel;
  itemForm = new FormGroup({
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
            result.name,
            result.description,
            result.qty
          );
          this.setPreviousValues();
        }),
        take(1)
      )
      .subscribe();
  }

  setPreviousValues() {
    this.itemForm.controls['itemName'].setValue(this.itemModel.name!);
    this.itemForm.controls['itemDescription'].setValue(
      this.itemModel?.description!
    );

    this.itemForm.controls['itemQty'].setValue(String(this.itemModel.qty));
  }

  createOrUpdateItem() {
    if (this.itemModel?._id) {
      const builtItemModel: ItemModel = new ItemModel(
        this.itemModel?._id,
        this.itemForm.controls['itemName'].value!,
        this.itemForm.controls['itemDescription'].value!,
        Number(this.itemForm.controls['itemQty'].value!)
      );
      this.itemService
        .updateItem(builtItemModel, builtItemModel._id!)
        .pipe(
          tap((result) => {
            builtItemModel._id = result._id!;
          }),
          take(1)
        )
        .subscribe();
      console.log(builtItemModel);
      this.router.navigateByUrl('/');
    } else if (!this.itemModel._id) {
      this.itemService
        .createItem(
          (this.itemModel = new ItemModel(
            this.itemModel._id!,
            this.itemForm.controls['itemName'].value!,
            this.itemForm.controls['itemDescription'].value!,
            Number(this.itemForm.controls['itemQty'].value!)
          ))
        )
        .subscribe((itemModel) => (this.itemModel = itemModel));
      console.log(this.itemModel);
      this.router.navigateByUrl('/');
    }
  }

  redirectToItems() {
    this.router.navigateByUrl('')
  }

  onSubmit() {
    this.createOrUpdateItem();
  }
}
