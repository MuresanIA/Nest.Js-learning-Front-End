import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ItemModel } from '../models/itemModel';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  itemModel: BehaviorSubject<ItemModel> = new BehaviorSubject(new ItemModel());
  constructor(private httpClient: HttpClient) {}

  getAllItems(): Observable<ItemModel[]> {
    return this.httpClient.get<ItemModel[]>('http://localhost:3000/items');
  }

  deleteItem(itemId: string): Observable<ItemModel> {
    let httpheaders = new HttpHeaders().set('Content-type', 'application/Json');
    let options = {
      headers: httpheaders,
    };
    return this.httpClient.delete<ItemModel>(
      'http://localhost:3000/items/' + itemId
    );
  }

  createItem(item: ItemModel): Observable<ItemModel> {
    return this.httpClient.post<ItemModel>('http://localhost:3000/items', item);
  }

  updateItem(item: ItemModel, itemId: string): Observable<ItemModel> {
    return this.httpClient.put<ItemModel>(
      'http://localhost:3000/items/' + itemId,
      item
    );
  }

  getItemById(itemId: string): Observable<ItemModel> {
    return this.httpClient.get<ItemModel>('http://localhost:3000/items/' + itemId);
  }

  sendItemModel(itemModel: ItemModel) {
    this.itemModel.next(itemModel);
  }

  getitemModel() {
    return this.itemModel.asObservable();
  }
}
