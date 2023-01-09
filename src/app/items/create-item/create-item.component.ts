import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { tap, take } from 'rxjs';
import { ItemModel } from '../models/itemModel';
import { ItemsService } from '../services/items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss'],
})
export class CreateItemComponent implements OnInit {
  itemModel: ItemModel | undefined;

  createItemForm = new FormGroup({
    itemName: new FormControl('', Validators.required),
    itemDescription: new FormControl('', Validators.required),
    itemQty: new FormControl('', Validators.required),
  });

  constructor(private itemService: ItemsService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.itemService
      .createItem(
        (this.itemModel = new ItemModel(
          undefined,
          this.createItemForm.controls['itemName'].value,
          this.createItemForm.controls['itemDescription'].value,
          +this.createItemForm.controls['itemQty'].value
        ))
      )
      .subscribe((itemModel) => (this.itemModel = itemModel));
    console.log(this.itemModel);
    this.router.navigateByUrl('/');
  }
}
