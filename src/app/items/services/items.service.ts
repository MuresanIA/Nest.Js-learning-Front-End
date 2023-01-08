import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../interfaces/item.interface';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor(private httpClient: HttpClient) {}

  getAllItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>('http://localhost:3000/items');
  }

  deleteItem(itemId: string): Observable<Item> {
    let httpheaders = new HttpHeaders().set('Content-type', 'application/Json');
    let options = {
      headers: httpheaders,
    };
    return this.httpClient.delete<Item>(
      'http://localhost:3000/items/' + itemId
    );
  }

  updateItem(itemId: string, item: Item): Observable<Item> {
    return this.httpClient.put<Item>(
      'http://localhost:3000/items/' + itemId,
      item
    );
  }
}
