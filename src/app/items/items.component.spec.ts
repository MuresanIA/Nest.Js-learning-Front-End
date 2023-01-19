import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { ItemsComponent } from './items.component';
import { ItemsService } from './services/items.service';
import { ItemModel } from './models/itemModel';

describe('ItemsComponent', () => {
  let component: ItemsComponent;
  let fixture: ComponentFixture<ItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemsComponent],
      imports: [HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAllItems', () => {
   const service = fixture.debugElement.injector.get(ItemsService);
   service.getAllItems();
   component.getItems();
   expect(component.itemModel).toEqual(new Array<ItemModel>);
  });
});
